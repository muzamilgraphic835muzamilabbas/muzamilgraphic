import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Phone, 
  Calendar, 
  Trash2, 
  Database, 
  ExternalLink, 
  Code2, 
  Copy, 
  Check 
} from 'lucide-react';
import { StoredInquiry } from '../types';
import { SUPABASE_SQL_SETUP, SUPABASE_URL } from '../lib/supabase';

interface InquiryViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: StoredInquiry[];
  onClearInquiries: () => void;
}

export const InquiryViewerModal: React.FC<InquiryViewerModalProps> = ({
  isOpen,
  onClose,
  inquiries,
  onClearInquiries
}) => {
  const [showSqlGuide, setShowSqlGuide] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  if (!isOpen) return null;

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SETUP);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        className="relative w-full max-w-3xl bg-[#0E1422] border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-viewer-title"
      >
        {/* Header */}
        <div className="bg-[#111827] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 id="inquiry-viewer-title" className="font-heading text-lg font-bold text-white flex items-center gap-2">
              <span>Project Inquiries Log</span>
              <span className="text-xs font-mono font-medium text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                {inquiries.length}
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Synchronized with Supabase database (Project: <span className="font-mono text-slate-300">bsahyedoirknaqrflotm</span>)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Supabase Status Banner */}
        <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">
              Supabase Connected: <strong className="text-emerald-400 font-mono">bsahyedoirknaqrflotm</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSqlGuide(!showSqlGuide)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>{showSqlGuide ? 'Hide Table SQL' : 'View Table SQL'}</span>
            </button>

            <a
              href="https://supabase.com/dashboard/project/bsahyedoirknaqrflotm/editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 flex items-center gap-1.5 transition-colors"
            >
              <span>Supabase Dashboard</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Optional SQL Schema Drawer */}
        {showSqlGuide && (
          <div className="bg-[#080B12] px-6 py-4 border-b border-slate-800 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Supabase SQL Setup for table `client_inquiries`:
              </span>
              <button
                onClick={handleCopySql}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-sky-400 transition-colors"
              >
                {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSql ? 'Copied!' : 'Copy SQL Script'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-36">
              {SUPABASE_SQL_SETUP}
            </pre>
          </div>
        )}

        {/* Inquiries list */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Clock className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm font-medium">No inquiries received in this session yet.</p>
              <p className="text-xs text-slate-500 mt-1">Submit an inquiry using the contact form below to test Supabase persistence.</p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div 
                key={inq.id}
                className="p-4 rounded-xl bg-[#111827] border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-800/40">
                      Ref: {inq.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {inq.fullName} {inq.businessName && `(${inq.businessName})`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                      <Database className="w-2.5 h-2.5" />
                      <span>Supabase</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {new Date(inq.submittedAt).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span className="truncate">{inq.email}</span>
                  </div>
                  {inq.phoneOrWhatsApp && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{inq.phoneOrWhatsApp}</span>
                    </div>
                  )}
                  <div className="text-slate-400">
                    Service: <strong className="text-slate-200">{inq.service}</strong>
                  </div>
                </div>

                {inq.estimatedBudget && (
                  <div className="text-xs text-slate-400">
                    Budget Range: <span className="text-slate-300 font-medium">{inq.estimatedBudget}</span>
                  </div>
                )}

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/60 text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {inq.projectDetails}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#111827] px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          {inquiries.length > 0 && (
            <button
              onClick={onClearInquiries}
              className="text-xs text-rose-400 hover:text-rose-300 inline-flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Local Cache</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-200 hover:bg-white rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
