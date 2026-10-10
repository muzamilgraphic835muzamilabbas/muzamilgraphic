import { createClient } from '@supabase/supabase-js';
import { StoredInquiry } from '../types';

export const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || 'https://bsahyedoirknaqrflotm.supabase.co';

export const SUPABASE_ANON_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_cz0RNtJWFfz9hNUspnoEcQ_FD5L_o6J';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const SUPABASE_SQL_SETUP = `-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/bsahyedoirknaqrflotm/sql)
CREATE TABLE IF NOT EXISTS client_inquiries (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  phone_or_whatsapp TEXT,
  service TEXT NOT NULL,
  estimated_budget TEXT,
  project_details TEXT NOT NULL,
  status TEXT DEFAULT 'Received',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Payments table for Razorpay transactions
CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  razorpay_payment_id TEXT NOT NULL,
  razorpay_order_id TEXT,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  service TEXT,
  amount NUMERIC NOT NULL,
  currency TEXT NOT NULL,
  status TEXT DEFAULT 'captured',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE client_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts so website visitors can submit inquiries & payments
CREATE POLICY "Allow public insert inquiries" ON client_inquiries 
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert payments" ON payments 
  FOR INSERT WITH CHECK (true);

-- Allow authenticated read so you can view submissions in your Supabase Dashboard
CREATE POLICY "Allow read for dashboard inquiries" ON client_inquiries 
  FOR SELECT USING (true);

CREATE POLICY "Allow read for dashboard payments" ON payments 
  FOR SELECT USING (true);
`;

export interface PaymentRecord {
  id: string;
  razorpayPaymentId: string;
  razorpayOrderId?: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  service?: string;
  amount: number;
  currency: string;
  status: string;
  createdAt?: string;
}

/**
 * Records a successful Razorpay transaction in Supabase
 */
export async function recordPaymentInSupabase(payment: PaymentRecord): Promise<{ success: boolean; error?: string }> {
  const payload = {
    id: payment.id,
    razorpay_payment_id: payment.razorpayPaymentId,
    razorpay_order_id: payment.razorpayOrderId || null,
    client_name: payment.clientName,
    client_email: payment.clientEmail,
    client_phone: payment.clientPhone || null,
    service: payment.service || 'Web Development Milestone',
    amount: payment.amount,
    currency: payment.currency,
    status: payment.status,
    created_at: payment.createdAt || new Date().toISOString()
  };

  try {
    const { error } = await supabase
      .from('payments')
      .insert([payload]);

    if (!error) {
      return { success: true };
    }
    console.warn('Supabase payment insertion note:', error.message);
    return { success: false, error: error.message };
  } catch (err: any) {
    console.error('Supabase payment recording error:', err);
    return { success: false, error: err?.message };
  }
}


export interface SaveBookingResult {
  savedToSupabase: boolean;
  tableName?: string;
  error?: string;
}

/**
 * Saves client booking / inquiry details directly into Supabase
 */
export async function saveClientBookingToSupabase(inquiry: StoredInquiry): Promise<SaveBookingResult> {
  const payload = {
    id: inquiry.id,
    full_name: inquiry.fullName,
    business_name: inquiry.businessName || null,
    email: inquiry.email,
    phone_or_whatsapp: inquiry.phoneOrWhatsApp || null,
    service: inquiry.service,
    estimated_budget: inquiry.estimatedBudget || null,
    project_details: inquiry.projectDetails,
    status: inquiry.status || 'Received',
    created_at: inquiry.submittedAt || new Date().toISOString()
  };

  try {
    // 1. Try 'client_inquiries' table
    const { error: err1 } = await supabase
      .from('client_inquiries')
      .insert([payload]);

    if (!err1) {
      return { savedToSupabase: true, tableName: 'client_inquiries' };
    }

    // 2. If 'client_inquiries' not found or error, try fallback 'bookings'
    const { error: err2 } = await supabase
      .from('bookings')
      .insert([payload]);

    if (!err2) {
      return { savedToSupabase: true, tableName: 'bookings' };
    }

    // Both had errors (e.g. table not created yet in user's Supabase project)
    console.warn('Supabase insertion note:', err1?.message || err2?.message);
    return {
      savedToSupabase: false,
      error: err1?.message || err2?.message || 'Table not found'
    };
  } catch (err: any) {
    console.error('Error connecting to Supabase:', err);
    return {
      savedToSupabase: false,
      error: err?.message || 'Connection failed'
    };
  }
}
