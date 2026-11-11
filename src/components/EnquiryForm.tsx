import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, TARGET_INDUSTRIES, CONSULTING_CATEGORIES } from '../data/companyData';

interface EnquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = '',
  onSuccess,
  compact = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    contactNumber: '',
    industry: '',
    serviceRequired: initialService || '',
    requirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company Name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Enter a valid business email address';
    }
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = 'Contact Number is required';
    } else if (formData.contactNumber.replace(/[^0-9]/g, '').length < 10) {
      errs.contactNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.industry) errs.industry = 'Please select your industry sector';
    if (!formData.serviceRequired) errs.serviceRequired = 'Please select a primary service';
    if (!formData.requirements.trim()) {
      errs.requirements = 'Please provide a brief description of your business requirement';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch and generate formal tracking ID
    setTimeout(() => {
      const refId = `ANL-${Date.now().toString().slice(-6)}`;
      setSubmittedRef(refId);
      setIsSubmitting(false);

      // Store in localStorage for user session record
      try {
        const stored = JSON.parse(localStorage.getItem('analymate_inquiries') || '[]');
        stored.push({
          refId,
          timestamp: new Date().toISOString(),
          ...formData
        });
        localStorage.setItem('analymate_inquiries', JSON.stringify(stored));
      } catch (e) {
        console.warn('Storage unavailable', e);
      }

      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Analymate Solutions,\n\nI would like to schedule a business consulting diagnostic.\n\n*Name:* ${formData.fullName || 'Business Owner'}\n*Company:* ${formData.companyName || 'Not specified'}\n*Service:* ${formData.serviceRequired || 'Process & Systems Consulting'}\n*Industry:* ${formData.industry || 'General Enterprise'}\n*Requirements:* ${formData.requirements || 'Discuss operational SOPs, cost reduction, or ERP implementation.'}`
    );
    window.open(`https://wa.me/918962861774?text=${text}`, '_blank');
  };

  if (submittedRef) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-display font-bold text-xl text-[#102B49]">
            Consultation Enquiry Received
          </h3>
          <p className="text-xs text-slate-500 font-mono tracking-wider">
            REFERENCE CODE: <span className="font-bold text-[#102B49]">{submittedRef}</span>
          </p>
          <p className="text-sm text-slate-600 max-w-md mx-auto pt-1">
            Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Our senior advisory team at Analymate Solutions will review your requirements for{' '}
            <strong className="text-slate-800">{formData.companyName}</strong> and contact you within 24 business hours.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg text-left text-xs text-slate-600 space-y-1.5 border border-slate-100 max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="text-slate-500">Service:</span>
            <span className="font-medium text-slate-800">{formData.serviceRequired}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Industry:</span>
            <span className="font-medium text-slate-800">{formData.industry}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Contact:</span>
            <span className="font-medium text-slate-800 tabular-nums">{formData.contactNumber}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-lg shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp Now</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSubmittedRef(null);
              setFormData({
                fullName: '',
                companyName: '',
                businessEmail: '',
                contactNumber: '',
                industry: '',
                serviceRequired: '',
                requirements: ''
              });
            }}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className={`grid grid-cols-1 ${compact ? 'gap-3.5' : 'sm:grid-cols-2 gap-4'}`}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Full Name <span className="text-[#B9233D]">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            placeholder="e.g. Rajesh Singhania"
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
              errors.fullName ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Company Name <span className="text-[#B9233D]">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => {
              setFormData({ ...formData, companyName: e.target.value });
              if (errors.companyName) setErrors({ ...errors, companyName: '' });
            }}
            placeholder="e.g. Apex Industrial Solutions Ltd."
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
              errors.companyName ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.companyName && (
            <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Business Email <span className="text-[#B9233D]">*</span>
          </label>
          <input
            type="email"
            value={formData.businessEmail}
            onChange={(e) => {
              setFormData({ ...formData, businessEmail: e.target.value });
              if (errors.businessEmail) setErrors({ ...errors, businessEmail: '' });
            }}
            placeholder="rajesh@company.in"
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
              errors.businessEmail ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.businessEmail && (
            <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.businessEmail}</span>
            </p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Contact Number <span className="text-[#B9233D]">*</span>
          </label>
          <input
            type="tel"
            value={formData.contactNumber}
            onChange={(e) => {
              setFormData({ ...formData, contactNumber: e.target.value });
              if (errors.contactNumber) setErrors({ ...errors, contactNumber: '' });
            }}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
              errors.contactNumber ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.contactNumber && (
            <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.contactNumber}</span>
            </p>
          )}
        </div>

        {/* Industry Sector */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Industry Sector <span className="text-[#B9233D]">*</span>
          </label>
          <select
            value={formData.industry}
            onChange={(e) => {
              setFormData({ ...formData, industry: e.target.value });
              if (errors.industry) setErrors({ ...errors, industry: '' });
            }}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
              errors.industry ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300 text-slate-800'
            }`}
          >
            <option value="">Select Industry</option>
            {TARGET_INDUSTRIES.map((ind) => (
              <option key={ind.id} value={ind.name}>
                {ind.name}
              </option>
            ))}
            <option value="Other Commercial Enterprise">Other Commercial Enterprise</option>
          </select>
          {errors.industry && (
            <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.industry}</span>
            </p>
          )}
        </div>

        {/* Service Required */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            Service Required <span className="text-[#B9233D]">*</span>
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => {
              setFormData({ ...formData, serviceRequired: e.target.value });
              if (errors.serviceRequired) setErrors({ ...errors, serviceRequired: '' });
            }}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
              errors.serviceRequired ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300 text-slate-800'
            }`}
          >
            <option value="">Select Service Offering</option>
            <optgroup label="Brochure Core Solutions">
              <option value="Business Audit & Analysis">Business Audit & Analysis</option>
              <option value="SOP Design & Implementation">SOP Design & Implementation</option>
              <option value="Process Automation">Process Automation</option>
              <option value="Software & ERP Implementation">Software & ERP Implementation</option>
              <option value="Management Reports & Dashboards">Management Reports & Dashboards</option>
              <option value="Cost Reduction Consulting">Cost Reduction Consulting</option>
            </optgroup>
            <optgroup label="Consulting Disciplines">
              {CONSULTING_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.serviceRequired && (
            <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.serviceRequired}</span>
            </p>
          )}
        </div>
      </div>

      {/* Brief Description */}
      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
          Brief Description of Business Requirements <span className="text-[#B9233D]">*</span>
        </label>
        <textarea
          rows={compact ? 3 : 4}
          value={formData.requirements}
          onChange={(e) => {
            setFormData({ ...formData, requirements: e.target.value });
            if (errors.requirements) setErrors({ ...errors, requirements: '' });
          }}
          placeholder="Describe your current operational bottlenecks, process challenges, inventory tracking issues, or ERP adoption goals..."
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087C78] transition-colors ${
            errors.requirements ? 'border-[#B9233D] bg-red-50/20' : 'border-slate-300'
          }`}
        />
        {errors.requirements && (
          <p className="text-[11px] text-[#B9233D] mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{errors.requirements}</span>
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg shadow-sm transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Processing Consultation Request...</span>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Quick WhatsApp</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-500 text-center sm:text-left pt-1">
        Your business data is protected under strict corporate confidentiality protocols. Direct contact:{' '}
        <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-[#087C78] font-semibold underline">
          {COMPANY_INFO.phones[0].display}
        </a>
      </p>
    </form>
  );
};
