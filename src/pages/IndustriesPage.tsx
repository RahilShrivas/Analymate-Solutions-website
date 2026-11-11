import React from 'react';
import industriesImage from '../assets/images/industry_manufacturing_logistics_1794410797475.jpg';
import { Link } from 'react-router-dom';
import {
  Factory,
  Building,
  Truck,
  Store,
  Briefcase,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { TARGET_INDUSTRIES, COMPANY_INFO } from '../data/companyData';

interface IndustriesPageProps {
  onOpenConsultationWithService: (serviceName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenConsultationWithService
}) => {
  const industryIcons: Record<string, React.ReactNode> = {
    'manufacturing-industrial': <Factory className="w-6 h-6 text-[#087C78]" />,
    'trading-distribution': <Building className="w-6 h-6 text-[#102B49]" />,
    'logistics-transportation': <Truck className="w-6 h-6 text-[#087C78]" />,
    'retail-wholesale': <Store className="w-6 h-6 text-[#F07820]" />,
    'professional-services': <Briefcase className="w-6 h-6 text-[#102B49]" />,
    'growing-enterprises': <Layers className="w-6 h-6 text-[#087C78]" />
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#102B49] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Industry Specialization
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Business Understanding Across Industries
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every sector operates with unique friction points—from raw material yields in manufacturing plants to credit collections in trading houses. We tailor our process audits and SOPs to the realities of your market.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <section className="py-12 bg-[#F7F8F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative max-h-[380px]">
            <img
              src={industriesImage}
              alt="Industrial scale manufacturing and logistics operations"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102B49]/80 via-transparent to-transparent flex items-center p-8 sm:p-12">
              <div className="max-w-md text-white space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                  Scale & Control
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl">
                  Built for High-Velocity Operations
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Eliminating material leakages, accelerating warehouse turnarounds, and ensuring real-time operational traceability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {TARGET_INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-[#F7F8F8] border border-slate-200 rounded-2xl p-6 sm:p-10 scroll-mt-24 space-y-8"
              >
                {/* Sector Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                      {industryIcons[ind.id]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#087C78]">
                          0{idx + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Sector Focus
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-[#102B49]">
                        {ind.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#087C78]">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenConsultationWithService(`Industry Advisory: ${ind.name}`)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    <span>Schedule Industry Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Operational Focus */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Operational Focus:
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ind.operationalFocus}
                  </p>
                </div>

                {/* Two Column Breakdown: Pain Points vs Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pain Points */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#B9233D] flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#B9233D]" />
                      <span>Critical Sector Pain Points</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {ind.painPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#B9233D] font-bold">·</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions Provided */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Applicable Analymate Solutions</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {ind.solutionsProvided.map((sol, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#087C78] shrink-0 mt-2" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
