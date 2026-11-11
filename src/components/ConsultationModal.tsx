import React from 'react';
import { X, Building2, Phone, Mail, ShieldCheck } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  serviceInterest
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4.5 bg-[#102B49] text-white rounded-t-2xl border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#087C78]">
              Executive Business Consultation
            </span>
            <h3 className="font-display text-lg font-bold">
              Schedule Diagnostic With Analymate
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#087C78] shrink-0" />
            <span>
              All operational and financial metrics discussed are protected under a mutual Non-Disclosure Agreement (NDA).
            </span>
          </div>

          <EnquiryForm
            initialService={serviceInterest}
            onSuccess={() => {
              // keep modal open for reference or auto-close
            }}
            compact={true}
          />
        </div>

        {/* Footer Contact Strip */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 rounded-b-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#087C78]" />
            <span>Currency Tower, Telibandha, Raipur</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center gap-1 font-semibold text-[#102B49] hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-[#087C78]" />
              <span className="tabular-nums">{COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
