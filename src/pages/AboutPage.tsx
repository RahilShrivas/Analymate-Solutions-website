import React from 'react';
import aboutImage from '../assets/images/about_systems_consulting_1794410796564.jpg';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users2,
  Layers,
  Sparkles,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP_TEAM, CONSULTING_METHODOLOGY } from '../data/companyData';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#102B49] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              About Analymate Solutions
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              We Don&apos;t Just Advise Businesses. We Build Systems That Help Them Grow.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Analymate Solutions Pvt. Ltd. is a business consulting and process excellence company. We partner with established enterprises to streamline operations, cut unbudgeted costs, build accountability, and implement scalable technology.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Executive Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                Our Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102B49] tracking-tight">
                Bridging Strategy with Daily Floor-Level Execution
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Most business leaders know where their organizations need to go. The breakdown happens between executive ambition and floor-level daily operations. Without documented standard operating procedures (SOPs), clear RACI matrices, and objective MIS reporting, organizations drift into ad-hoc firefighting.
                </p>
                <p>
                  Analymate Solutions was established to replace tribal knowledge with repeatable operating discipline. We don&apos;t produce theoretical binder reports that gather dust. We work directly with owners, department heads, and operational staff on the floor to design workflows, configure ERP systems, and audit ongoing compliance.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 bg-[#F7F8F8] border border-slate-200 rounded-lg space-y-1">
                  <span className="font-bold text-[#102B49] block">Execution Over Theory</span>
                  <p className="text-slate-600">
                    We embed systems directly into your existing staff routines and software tools.
                  </p>
                </div>
                <div className="p-4 bg-[#F7F8F8] border border-slate-200 rounded-lg space-y-1">
                  <span className="font-bold text-[#102B49] block">Measurable Impact</span>
                  <p className="text-slate-600">
                    Every consulting engagement targets clear operational speed, cost reduction, or inventory control.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src={aboutImage}
                  alt="Analymate consulting team reviewing process blueprints"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Core Values */}
      <section className="py-20 bg-[#F7F8F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#087C78]/10 text-[#087C78] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#102B49]">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the most trusted business consulting and process transformation partner for growing enterprises—recognized for engineered execution, operational integrity, and lasting organizational value.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#102B49]/10 text-[#102B49] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#102B49]">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower business owners and enterprise teams with clear financial visibility, documented operating systems, and smart automation—enabling sustainable profitability and seamless scalability.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                Foundational Principles
              </span>
              <h3 className="font-display font-bold text-2xl text-[#102B49] mt-1">
                The Values That Govern Our Advisory Practice
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2">
                <span className="font-mono text-sm font-bold text-[#087C78]">01</span>
                <h4 className="font-display font-bold text-base text-[#102B49]">
                  Integrity & Confidentiality
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We protect our clients&apos; proprietary operational data and financial ledgers with institutional diligence.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2">
                <span className="font-mono text-sm font-bold text-[#102B49]">02</span>
                <h4 className="font-display font-bold text-base text-[#102B49]">
                  Analytical Rigor
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We base diagnostic findings on verified operational data, time studies, and transaction ledgers, never assumptions.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2">
                <span className="font-mono text-sm font-bold text-[#087C78]">03</span>
                <h4 className="font-display font-bold text-base text-[#102B49]">
                  Floor-Level Empathy
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We design SOPs and software workflows that frontline workers can realistically understand and operate daily.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2">
                <span className="font-mono text-sm font-bold text-[#F07820]">04</span>
                <h4 className="font-display font-bold text-base text-[#102B49]">
                  Commitment to Stickiness
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We remain involved through post-implementation audits to ensure new systems become permanent company habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Governance & Team
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102B49] tracking-tight mt-1">
              Leadership Team
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Verified corporate officers of Analymate Solutions Pvt. Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-[#F7F8F8] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#102B49] text-white font-display font-bold text-base flex items-center justify-center">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    {member.designationStatus === 'confirmed' ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Executive Board
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200 px-2 py-0.5 rounded">
                        To Be Confirmed
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#102B49]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#087C78] uppercase tracking-wider mt-0.5 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {member.department}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {member.notes}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex justify-between">
                  <span>Raipur Office</span>
                  <span className="text-[#087C78] font-semibold">Corporate Officer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Callout */}
      <section className="py-16 bg-[#102B49] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Ready to Institutionalize Structured Processes in Your Company?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact our senior consulting team to schedule an introductory discovery session.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-lg transition-colors cursor-pointer"
            >
              <span>Schedule Initial Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
