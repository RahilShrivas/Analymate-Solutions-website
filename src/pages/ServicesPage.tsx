import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Workflow,
  Calculator,
  ShieldAlert,
  BarChart2,
  Compass,
  ArrowUpRight,
  Layers,
  Sparkles
} from 'lucide-react';
import {
  CONSULTING_CATEGORIES,
  CORE_SOLUTIONS,
  COMPANY_INFO
} from '../data/companyData';

interface ServicesPageProps {
  onOpenConsultationWithService: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenConsultationWithService
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState<string>(
    categoryParam || CONSULTING_CATEGORIES[0].id
  );

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
      const element = document.getElementById(categoryParam);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [categoryParam]);

  const categoryIcons: Record<string, React.ReactNode> = {
    'financial-consultancy': <Calculator className="w-5 h-5 text-[#087C78]" />,
    'business-process-consulting': <Workflow className="w-5 h-5 text-[#102B49]" />,
    'cost-profitability-analysis': <TrendingUp className="w-5 h-5 text-[#B9233D]" />,
    'tax-compliance-advisory': <ShieldAlert className="w-5 h-5 text-[#087C78]" />,
    'mis-business-intelligence': <BarChart2 className="w-5 h-5 text-[#102B49]" />,
    'business-strategy-advisory': <Compass className="w-5 h-5 text-[#F07820]" />
  };

  const currentCat = CONSULTING_CATEGORIES.find((c) => c.id === activeCategory) || CONSULTING_CATEGORIES[0];

  return (
    <div className="bg-white">
      {/* Services Header */}
      <section className="bg-[#102B49] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Analymate Consulting Practices
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Comprehensive Business Solutions. Practical Execution.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We connect high-level financial strategy with granular floor-level operating procedures. Explore our six core consulting disciplines designed to drive efficiency, accountability, and sustainable profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Brochure Core Operational Solutions Strip */}
      <section className="py-14 bg-[#F7F8F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78] block mb-1">
              Brochure Core Deliverables
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#102B49]">
              Specialized Turnkey Solutions
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Turnkey diagnostic, process design, and automation implementations directly referenced from our corporate brochure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-[#087C78] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#087C78]">
                      {sol.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Solution
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#102B49] mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-medium text-[#087C78] mb-2">
                    {sol.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Key Deliverables:
                    </span>
                    {sol.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#087C78]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenConsultationWithService(sol.title)}
                    className="text-xs font-bold text-[#087C78] hover:underline"
                  >
                    Inquire for this Solution
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Consulting Categories Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78] block mb-2">
              Practice Discipline Overview
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102B49] tracking-tight">
              In-Depth Consulting Categories
            </h2>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-xl mb-12 border border-slate-200">
            {CONSULTING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchParams({ category: cat.id });
                }}
                className={`flex-1 min-w-[200px] text-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#102B49] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-[#102B49] hover:bg-white/50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Selected Category Comprehensive Breakdown Card */}
          <div
            id={currentCat.id}
            className="bg-[#F7F8F8] border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-10 shadow-xs"
          >
            {/* Header info */}
            <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    {categoryIcons[currentCat.id]}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                    Consulting Practice
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102B49]">
                  {currentCat.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {currentCat.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenConsultationWithService(currentCat.title)}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Request Advisory Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 1. What the Service Means */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-base text-[#102B49]">
                What This Service Delivers
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                {currentCat.overview}
              </p>
            </div>

            {/* 2 & 3: Challenges Addressed & Our Approach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Addressed */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#B9233D] flex items-center gap-2">
                  <span>Business Challenges Addressed</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {currentCat.challengesAddressed.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9233D] shrink-0 mt-2" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Potential Business Outcomes */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <span>Target Business Outcomes</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {currentCat.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Scope of Support */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
              <h4 className="font-display font-bold text-base text-[#102B49]">
                Structured Scope of Support & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCat.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border border-slate-100 rounded-lg flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-[#087C78] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology / ERP Integration Banner */}
            <div className="rounded-xl overflow-hidden border border-slate-200 relative bg-slate-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                    Technology Alignment
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl">
                    Need ERP or Software Alignment for This Discipline?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We ensure that your accounting software, inventory management system, or enterprise ERP directly reflects the SOPs and reporting frameworks designed for your team.
                  </p>
                </div>
                <div className="lg:col-span-5 h-48 lg:h-full relative min-h-[180px]">
                  <img
                    src="/src/assets/images/technology_erp_dashboards_1794410797761.jpg"
                    alt="Enterprise technology operations and dashboards"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
