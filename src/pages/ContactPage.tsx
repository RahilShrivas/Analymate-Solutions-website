import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryForm } from '../components/EnquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#102B49] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Consultation & Engagement
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are looking to streamline operations, reduce overheads, resolve inventory leakages, or successfully implement an ERP, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Verified Office & Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#102B49]">
                  Corporate Office
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Visit us at Currency Tower, Raipur or reach out via direct phone or WhatsApp.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-5 bg-[#F7F8F8] border border-slate-200 rounded-xl flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[#F07820] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Registered Address
                    </span>
                    <address className="not-italic text-xs text-slate-600 leading-relaxed">
                      {COMPANY_INFO.address.line1},<br />
                      {COMPANY_INFO.address.line2},<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} — {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.country}
                    </address>
                    <a
                      href={COMPANY_INFO.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#087C78] hover:underline pt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="p-5 bg-[#F7F8F8] border border-slate-200 rounded-xl flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[#087C78] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Direct Telephone Lines
                    </span>
                    <div className="space-y-1 text-xs tabular-nums">
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phones[0].raw}`}
                          className="font-semibold text-slate-800 hover:text-[#087C78]"
                        >
                          {COMPANY_INFO.phones[0].display}
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phones[1].raw}`}
                          className="font-semibold text-slate-800 hover:text-[#087C78]"
                        >
                          {COMPANY_INFO.phones[1].display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-5 bg-[#F7F8F8] border border-slate-200 rounded-xl flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[#087C78] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs font-semibold text-slate-800 hover:text-[#087C78] break-all block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-[11px] text-slate-500">
                      Website: {COMPANY_INFO.website}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Direct Action */}
                <a
                  href={`https://wa.me/918962861774?text=${encodeURIComponent(
                    'Hello Analymate Solutions, I would like to schedule an introductory consulting diagnostic for my business.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-between text-emerald-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-700" />
                    <div className="text-left">
                      <span className="text-xs font-bold block">Quick WhatsApp Chat</span>
                      <span className="text-[11px] text-emerald-700">Connect directly with our team</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-700" />
                </a>

                {/* Operating Hours */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>
                    <strong>Business Hours:</strong> Monday – Saturday: 10:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-64 bg-slate-100">
                <iframe
                  title="Analymate Solutions Location - Currency Tower, Raipur"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Full Professional Enquiry Form */}
            <div className="lg:col-span-7 bg-[#F7F8F8] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                  Consulting Inquiry
                </span>
                <h3 className="font-display font-bold text-2xl text-[#102B49]">
                  Send Your Project Requirements
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  Provide an overview of your organization and the operational challenges you wish to address. Our senior consultants will evaluate your brief and respond promptly.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
