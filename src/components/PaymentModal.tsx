import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Receipt, 
  ExternalLink,
  DollarSign
} from 'lucide-react';
import { openRazorpayCheckout, RAZORPAY_KEY_ID } from '../lib/razorpay';
import { recordPaymentInSupabase, PaymentRecord } from '../lib/supabase';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  prefillEmail?: string;
  prefillName?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  prefillService,
  prefillEmail,
  prefillName
}) => {
  const [clientName, setClientName] = useState(prefillName || '');
  const [clientEmail, setClientEmail] = useState(prefillEmail || '');
  const [clientPhone, setClientPhone] = useState('');
  const [serviceTitle, setServiceTitle] = useState(prefillService || 'Custom Website Development');
  const [amount, setAmount] = useState<number>(250);
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR' | 'GBP'>('USD');
  const [invoiceRef, setInvoiceRef] = useState(`INV-${Math.floor(1000 + Math.random() * 9000)}`);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successReceipt, setSuccessReceipt] = useState<{
    paymentId: string;
    amount: number;
    currency: string;
    date: string;
  } | null>(null);

  if (!isOpen) return null;

  const presetAmounts = [
    { label: 'Initial Booking Deposit', amount: 150 },
    { label: 'Design Milestone (50%)', amount: 350 },
    { label: 'Development Phase', amount: 650 },
    { label: 'Full Project Milestone', amount: 1200 },
  ];

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!clientName.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!clientEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!amount || amount <= 0) {
      setErrorMessage('Please specify a valid payment amount.');
      return;
    }

    setIsProcessing(true);

    try {
      await openRazorpayCheckout({
        amount,
        currency,
        clientName,
        clientEmail,
        clientPhone,
        serviceTitle,
        invoiceOrBookingId: invoiceRef,
        onSuccess: async (response) => {
          setIsProcessing(false);

          const receipt = {
            paymentId: response.razorpay_payment_id,
            amount,
            currency,
            date: new Date().toISOString()
          };

          setSuccessReceipt(receipt);

          // Save transaction to user's Supabase account
          const paymentRecord: PaymentRecord = {
            id: `PAY-${response.razorpay_payment_id.slice(-8)}`,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            clientName,
            clientEmail,
            clientPhone,
            service: serviceTitle,
            amount,
            currency,
            status: 'captured',
            createdAt: receipt.date
          };

          await recordPaymentInSupabase(paymentRecord);
        },
        onDismiss: () => {
          setIsProcessing(false);
        }
      });
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage(err?.message || 'Payment initiation failed. Please verify credentials.');
    }
  };

  const currencySymbol = currency === 'USD' ? '$' : currency === 'INR' ? '₹' : currency === 'EUR' ? '€' : '£';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => {
          if (!isProcessing) onClose();
        }}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-xl bg-[#0E1422] border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-modal-title"
      >
        {/* Header */}
        <div className="bg-[#111827] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h2 id="payment-modal-title" className="font-heading text-base font-bold text-white">
                Client Payment Portal
              </h2>
              <span className="text-[11px] text-slate-400">
                Secured by Razorpay Payment Gateway
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5">
          {successReceipt ? (
            /* Success State & Receipt */
            <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Payment Successful!
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Thank you for your project milestone payment.
                </p>
              </div>

              {/* Receipt details */}
              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Payment ID:</span>
                  <span className="font-mono text-sky-400 font-semibold">{successReceipt.paymentId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Amount Paid:</span>
                  <span className="font-bold text-white">
                    {currencySymbol}{successReceipt.amount} {successReceipt.currency}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Client:</span>
                  <span className="text-slate-200">{clientName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Service:</span>
                  <span className="text-slate-200">{serviceTitle}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Database Status:</span>
                  <span className="text-emerald-400 font-medium">Logged in Supabase</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSuccessReceipt(null);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Payment Input Form */
            <form onSubmit={handlePay} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300">
                  {errorMessage}
                </div>
              )}

              {/* Preset Milestone selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Milestone or Enter Custom Amount
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {presetAmounts.map((p) => (
                    <button
                      type="button"
                      key={p.label}
                      onClick={() => setAmount(p.amount)}
                      className={`p-2.5 rounded-xl border text-left transition-colors ${
                        amount === p.amount
                          ? 'bg-sky-950/40 border-sky-500 text-sky-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="block text-[11px] text-slate-400">{p.label}</span>
                      <span className="block text-sm font-bold mt-0.5">
                        {currencySymbol}{p.amount}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount and Currency inputs */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="customAmount" className="block text-xs font-semibold text-slate-300 mb-1">
                    Amount ({currency})
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-sm text-slate-400 font-semibold">
                      {currencySymbol}
                    </span>
                    <input
                      type="number"
                      id="customAmount"
                      min={1}
                      step="any"
                      value={amount || ''}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="currencySelect" className="block text-xs font-semibold text-slate-300 mb-1">
                    Currency
                  </label>
                  <select
                    id="currencySelect"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor="payerName" className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="payerName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Muzamil Abbas"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="payerEmail" className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="payerEmail"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="client@company.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    required
                  />
                </div>
              </div>

              {/* Service & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="serviceSelect" className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Service
                  </label>
                  <input
                    type="text"
                    id="serviceSelect"
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  />
                </div>

                <div>
                  <label htmlFor="payerPhone" className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="payerPhone"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+92 313 6898496"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  />
                </div>
              </div>

              {/* Security Banner */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>256-bit SSL Encrypted Checkout</span>
                </div>
                <span className="font-mono text-slate-500">Razorpay Gateway</span>
              </div>

              {/* Submit Pay button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] transition-all shadow-md active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Launching Secure Razorpay Gateway...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Pay {currencySymbol}{amount} {currency}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#111827] px-6 py-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Supported: Cards, UPI, Netbanking, Wallets & International Cards</span>
          <span className="font-mono text-sky-400">Prime Web Works</span>
        </div>
      </div>
    </div>
  );
};
