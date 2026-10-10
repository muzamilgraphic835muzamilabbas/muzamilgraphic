import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Inbox, 
  Database,
  CreditCard
} from 'lucide-react';
import { InquiryFormData, StoredInquiry } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { saveClientBookingToSupabase } from '../lib/supabase';

interface ContactSectionProps {
  initialService?: string;
  onInquirySubmitted: (inquiry: StoredInquiry) => void;
  inquiryCount: number;
  onOpenInquiryLog: () => void;
  onOpenPayment?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  onInquirySubmitted,
  inquiryCount,
  onOpenInquiryLog,
  onOpenPayment
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phoneOrWhatsApp: '',
    service: initialService || 'Custom Website',
    estimatedBudget: '',
    projectDetails: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<StoredInquiry | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    'Custom Website',
    'WordPress',
    'Shopify',
    'Headless Development',
    'Landing Page',
    'Website Redesign',
    'Maintenance and Optimization',
    'Other'
  ];

  const budgetOptions = [
    'Less than $1,000',
    '$1,000 – $2,500',
    '$2,500 – $5,000',
    '$5,000+',
    "Flexible / Let's Discuss"
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.service) {
      errs.service = 'Please select a required service.';
    }

    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please share a brief summary of your project goals or requirements.';
    } else if (formData.projectDetails.trim().length < 10) {
      errs.projectDetails = 'Please provide at least 10 characters describing your project.';
    }

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot test
    if (formData.honeypot) {
      // Quiet drop for automated bot submissions
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const generatedId = `PWW-${Math.floor(1000 + Math.random() * 9000)}`;

      const newInquiry: StoredInquiry = {
        ...formData,
        id: generatedId,
        submittedAt: new Date().toISOString(),
        status: 'Received',
        supabaseSynced: false
      };

      // Direct write to user's Supabase account (Project: bsahyedoirknaqrflotm)
      const supabaseResult = await saveClientBookingToSupabase(newInquiry);
      newInquiry.supabaseSynced = supabaseResult.savedToSupabase;

      onInquirySubmitted(newInquiry);
      setSubmissionSuccess(newInquiry);

      // Reset form fields
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phoneOrWhatsApp: '',
        service: 'Custom Website',
        estimatedBudget: '',
        projectDetails: '',
        honeypot: ''
      });
    } catch (err) {
      setErrors({ form: 'An unexpected issue occurred. Please reach out via WhatsApp or email directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-formatted WhatsApp link
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Prime Web Works! I would like to discuss a web project.\nName: ${formData.fullName || 'Client'}\nService: ${formData.service}\nDetails: ${formData.projectDetails || 'Interested in learning more.'}`
    );
    return `https://wa.me/${AGENCY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#080B12] relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              Let's Talk About Your Project
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Ready to Build Something Better?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            Tell us about your business, your goals, and the website you need. We'll review your requirements and discuss the right next steps.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels & trust signals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E1422] border border-slate-800 space-y-5">
              <h3 className="font-heading text-lg font-bold text-white">
                Direct Channels & Consultation
              </h3>
              <p className="text-xs text-[#A1AAB8] leading-relaxed">
                Prefer an immediate conversation? Call us directly, message on WhatsApp, or email our project leads.
              </p>

              {/* Direct Call Button */}
              <a
                href={`tel:${AGENCY_INFO.phoneNumber}`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 hover:border-sky-500/50 text-sky-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold block text-slate-100 group-hover:text-sky-200">
                      Direct Phone Call
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {AGENCY_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Direct WhatsApp button */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold block text-slate-100 group-hover:text-emerald-200">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {AGENCY_INFO.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Direct Email link */}
              <a
                href={`mailto:${AGENCY_INFO.email}?subject=Project Inquiry - Prime Web Works`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-500/50 text-purple-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold block text-slate-100 group-hover:text-purple-200">
                      Email Project Brief
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {AGENCY_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Razorpay Online Payment Gateway Trigger */}
            {onOpenPayment && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-[#111827] border border-sky-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Online Payment Gateway</h4>
                      <span className="text-[10px] text-slate-400">Powered by Razorpay</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-mono">
                    Secured
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ready to book your project or pay a milestone invoice? Pay securely using our Razorpay gateway.
                </p>
                <button
                  type="button"
                  onClick={onOpenPayment}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] text-slate-950 text-xs font-bold transition-all shadow-md active:scale-98"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Pay Project Deposit / Invoice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Response Promise Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Response Timeframe</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We review every inquiry individually. You will receive an initial response and clarification questions within <strong>24 business hours</strong>.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Serving Pakistan & Global Clients</span>
                <span className="text-emerald-400">Active Inquiry Queue</span>
              </div>
            </div>

            {/* Supabase Storage Status */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Supabase Database Connected</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">bsahyedoirknaqrflotm</span>
            </div>

            {/* Inquiries review shortcut */}
            {inquiryCount > 0 && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Inbox className="w-4 h-4 text-sky-400" />
                  <span>{inquiryCount} inquiry logged in current session</span>
                </div>
                <button
                  onClick={onOpenInquiryLog}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline"
                >
                  View Log
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Functional Project Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-slate-800 shadow-2xl relative">
              
              {/* Success Notification State */}
              {submissionSuccess ? (
                <div className="py-8 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Inquiry Received Successfully
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                      <span className="text-xs font-mono text-sky-400 bg-sky-950/50 px-2.5 py-0.5 rounded border border-sky-800/40">
                        Reference: {submissionSuccess.id}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/50 px-2.5 py-0.5 rounded border border-emerald-800/40">
                        <Database className="w-3 h-3 text-emerald-400" />
                        <span>Supabase Account Synced</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{submissionSuccess.fullName}</strong>. Your project inquiry for <strong>{submissionSuccess.service}</strong> has been logged. Our lead developer will review your scope and get in touch at <strong>{submissionSuccess.email}</strong> within 24 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmissionSuccess(null)}
                      className="px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                    >
                      <span>Also Ping on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* The Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  
                  {/* Honeypot field (hidden from view for anti-spam) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {errors.form && (
                    <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Name & Business Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Muzamil Abbas"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-800'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Name <span className="text-slate-500 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Prime Web Works"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone/WhatsApp Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. muzamilgraphic@gmail.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-800'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneOrWhatsApp" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone or WhatsApp <span className="text-slate-500 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneOrWhatsApp"
                        value={formData.phoneOrWhatsApp}
                        onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                        placeholder="+92 313 6898496"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required <span className="text-rose-400">*</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors"
                        required
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#111827] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimated Budget <span className="text-slate-500 text-[11px]">(Optional)</span>
                      </label>
                      <select
                        id="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors"
                      >
                        <option value="" className="bg-[#111827] text-slate-400">Select budget bracket</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-[#111827] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDetails: e.target.value });
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: '' });
                      }}
                      placeholder="Please summarize your requirements, target audience, preferred platform, or timeline..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition-colors resize-none ${
                        errors.projectDetails ? 'border-rose-500' : 'border-slate-800'
                      }`}
                      required
                    />
                    {errors.projectDetails && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-xl transition-all shadow-md active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy note */}
                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Your details are held confidentially and strictly used for project scoping.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
