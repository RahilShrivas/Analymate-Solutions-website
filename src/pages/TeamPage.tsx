import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, Clock, Building2, ArrowRight } from 'lucide-react';
import { LEADERSHIP_TEAM, COMPANY_INFO } from '../data/companyData';

interface TeamPageProps {
  onOpenConsultation: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#102B49] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Governance & Leadership
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              The People Behind the Perspective
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Analymate Solutions Pvt. Ltd. is led by a dedicated executive management team focused on operational discipline, business systems engineering, and technological excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Editorial Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78] block mb-1">
              Verified Corporate Officers
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102B49]">
              Executive Leadership
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Authentic corporate records for Analymate Solutions Pvt. Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-[#F7F8F8] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between relative shadow-xs"
              >
                <div>
                  {/* Top Seal / Verified Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#102B49] text-white font-display font-extrabold text-xl flex items-center justify-center shadow-xs">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    {member.designationStatus === 'confirmed' ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Executive Board</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded-md border border-slate-300">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>Designation Pending</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[#102B49]">
                    {member.name}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#087C78] mt-1 mb-2">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-500 font-medium mb-5">
                    {member.department}
                  </p>

                  {/* Operational Notes / Overview */}
                  <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600 leading-relaxed">
                    <p>{member.notes}</p>
                    {member.designationStatus === 'pending' && (
                      <p className="text-[11px] text-slate-400 italic">
                        Official biography, academic credentials, and designations will be published upon corporate confirmation.
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#087C78]" />
                    <span>Currency Tower, Raipur</span>
                  </div>
                  <span className="text-[#087C78] font-semibold">Active Officer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Philosophy on Advisory Quality */}
      <section className="py-16 bg-[#F7F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <ShieldCheck className="w-10 h-10 text-[#087C78] mx-auto" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#102B49]">
            Engagement Governance & Quality Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Every client project at Analymate Solutions is directly overseen by an executive officer. We maintain a limited engagement roster to guarantee active partner attention, rigorous audit reviews, and measurable operational outcomes.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg transition-colors cursor-pointer"
            >
              <span>Connect with Our Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
