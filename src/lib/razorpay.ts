// Razorpay Client SDK Utility

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const RAZORPAY_KEY_ID = 
  import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag';

/**
 * Ensures Razorpay Checkout script is loaded
 */
export async function loadRazorpayScript(): Promise<boolean> {
  if (typeof window !== 'undefined' && window.Razorpay) {
    return true;
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error('Failed to load Razorpay checkout script');
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export interface RazorpayPaymentOptions {
  amount: number; // e.g. 250 (USD or INR)
  currency?: 'USD' | 'INR' | 'EUR' | 'GBP';
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  serviceTitle?: string;
  invoiceOrBookingId?: string;
  notes?: Record<string, string>;
  onSuccess: (response: {
    razorpay_payment_id: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
  }) => void;
  onDismiss?: () => void;
}

/**
 * Launches the official Razorpay Checkout modal
 */
export async function openRazorpayCheckout(options: RazorpayPaymentOptions): Promise<boolean> {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded || !window.Razorpay) {
    alert('Razorpay Checkout SDK could not be loaded. Please verify your internet connection.');
    return false;
  }

  const currency = options.currency || 'USD';
  // Razorpay requires amount in smallest currency unit (cents or paise)
  const amountInSmallestUnit = Math.round(options.amount * 100);

  const rzpOptions = {
    key: RAZORPAY_KEY_ID,
    amount: amountInSmallestUnit,
    currency: currency,
    name: 'Prime Web Works',
    description: options.serviceTitle 
      ? `Deposit / Milestone: ${options.serviceTitle}`
      : 'Web Design & Development Milestone Payment',
    image: 'https://primewebworks.com/favicon.ico',
    prefill: {
      name: options.clientName,
      email: options.clientEmail,
      contact: options.clientPhone || ''
    },
    notes: {
      booking_id: options.invoiceOrBookingId || 'PWW-ONLINE',
      service: options.serviceTitle || 'General Web Project',
      ...(options.notes || {})
    },
    theme: {
      color: '#38BDF8',
      backdrop_color: 'rgba(8, 11, 18, 0.85)'
    },
    modal: {
      ondismiss: () => {
        if (options.onDismiss) {
          options.onDismiss();
        }
      }
    },
    handler: (response: {
      razorpay_payment_id: string;
      razorpay_order_id?: string;
      razorpay_signature?: string;
    }) => {
      options.onSuccess(response);
    }
  };

  try {
    const rzp = new window.Razorpay(rzpOptions);
    rzp.open();
    return true;
  } catch (err) {
    console.error('Error opening Razorpay modal:', err);
    return false;
  }
}
