import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { MapPin, Phone, Mail, Globe, ArrowRight, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, CONSULTING_CATEGORIES } from '../data/companyData';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#102B49] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand & Introduction Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block" aria-label="Analymate Solutions">
              <BrandLogo variant="light" size="lg" showTagline={true} />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Analymate Solutions Pvt. Ltd. partners with established businesses and enterprises to streamline operations, reduce operational costs, establish structured SOPs, improve accountability, and implement scalable ERP and automation systems.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200 uppercase tracking-wider block mb-1">
                Corporate Identification:
              </span>
              <span>CIN Registered Private Limited Company · Raipur, Chhattisgarh</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Leadership
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Consulting Practices
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {CONSULTING_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services?category=${cat.id}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Raipur Office
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F07820] shrink-0 mt-1" />
                <address className="not-italic text-xs leading-relaxed text-slate-300">
                  {COMPANY_INFO.address.line1},<br />
                  {COMPANY_INFO.address.line2},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} — {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.country}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#087C78] shrink-0" />
                <div className="text-xs space-y-0.5 tabular-nums">
                  <div>
                    <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-white">
                      {COMPANY_INFO.phones[0].display}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-white">
                      {COMPANY_INFO.phones[1].display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#087C78] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs hover:text-white break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#087C78] shrink-0" />
                <span className="text-xs">{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Brand Statement Banner */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left border-b border-slate-800">
          <div>
            <p className="font-display font-semibold text-sm md:text-base tracking-wide text-slate-200 uppercase">
              ANALYMATE SOLUTIONS — YOUR PARTNER IN BUSINESS TRANSFORMATION.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Connecting strategic vision with rigorous floor-level execution.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-md transition-colors"
            >
              <span>Schedule Initial Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Legal & Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Analymate Solutions Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white text-slate-900 rounded-xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="font-display font-bold text-lg text-[#102B49] flex items-center gap-2">
                {modalType === 'privacy' ? (
                  <>
                    <Shield className="w-5 h-5 text-[#087C78]" />
                    Privacy Policy
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 text-[#087C78]" />
                    Terms & Conditions
                  </>
                )}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="text-slate-500 hover:text-slate-900 text-sm font-semibold p-1"
              >
                ✕ Close
              </button>
            </div>

            <div className="py-4 text-xs text-slate-600 leading-relaxed space-y-3">
              {modalType === 'privacy' ? (
                <>
                  <p className="font-semibold text-slate-900">
                    Analymate Solutions Pvt. Ltd. Privacy Commitment
                  </p>
                  <p>
                    Analymate Solutions Pvt. Ltd. (&ldquo;Analymate&rdquo;) respects client confidentiality and is committed to protecting operational, financial, and personal information shared with us during consulting engagements and initial inquiries.
                  </p>
                  <p>
                    <strong>1. Information Collection:</strong> When you submit business inquiries via our contact forms or direct communications, we collect contact details (name, company, email, phone) and project requirements strictly for responding to your consulting needs.
                  </p>
                  <p>
                    <strong>2. Confidentiality of Business Data:</strong> All operational data, financial records, SOP documents, and proprietary materials shared under our advisory agreements are governed by strict mutual non-disclosure obligations.
                  </p>
                  <p>
                    <strong>3. Data Protection:</strong> We do not sell, rent, or trade client information to any third parties. Information is stored securely and accessed only by authorized engagement staff.
                  </p>
                  <p>
                    For inquiries regarding data privacy, contact us at <strong>asfiya@analymate.in</strong>.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-slate-900">
                    Analymate Solutions Pvt. Ltd. Engagement Terms
                  </p>
                  <p>
                    By accessing www.analymate.in, you agree to these terms regarding information use and advisory inquiries.
                  </p>
                  <p>
                    <strong>1. Advisory Information:</strong> Content published on this website provides general overviews of business consulting methodologies, process optimization, and technology implementation. Specific deliverables, scope, and guarantees are defined through formal engagement contracts signed directly between Analymate Solutions Pvt. Ltd. and the client organization.
                  </p>
                  <p>
                    <strong>2. Intellectual Property:</strong> All trademarks, diagnostic frameworks, written methodologies, and visual designs remain the intellectual property of Analymate Solutions Pvt. Ltd. Client company names and marks are shown for portfolio and engagement identification purposes.
                  </p>
                  <p>
                    <strong>3. Jurisdiction:</strong> Any legal matters relating to Analymate Solutions Pvt. Ltd. shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts of Raipur, Chhattisgarh.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#102B49] rounded-lg hover:bg-[#087C78] transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
