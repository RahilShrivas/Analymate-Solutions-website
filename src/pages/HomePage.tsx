import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingDown,
  FileSpreadsheet,
  Users2,
  PackageX,
  ClockAlert,
  LaptopMinimal,
  SearchCheck,
  Workflow,
  Cpu,
  BarChart3,
  BadgeDollarSign,
  ArrowRight,
  ArrowUpRight,
  Building,
  Truck,
  Store,
  Briefcase,
  Layers,
  Factory,
  CheckCircle,
  Shield,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import {
  COMPANY_INFO,
  BUSINESS_CHALLENGES,
  CORE_SOLUTIONS,
  CONSULTING_CATEGORIES,
  TARGET_INDUSTRIES,
  CONSULTING_METHODOLOGY,
  LEADERSHIP_TEAM
} from '../data/companyData';
import { ClientLogoGrid } from '../components/ClientLogoGrid';
import { EnquiryForm } from '../components/EnquiryForm';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  // Mapping problem icons
  const challengeIcons: Record<string, React.ReactNode> = {
    'rising-costs': <TrendingDown className="w-6 h-6 text-[#B9233D]" />,
    'undefined-sops': <FileSpreadsheet className="w-6 h-6 text-[#F07820]" />,
    'lack-of-accountability': <Users2 className="w-6 h-6 text-[#102B49]" />,
    'inventory-leakages': <PackageX className="w-6 h-6 text-[#B9233D]" />,
    'delayed-reports': <ClockAlert className="w-6 h-6 text-[#087C78]" />,
    'failed-software': <LaptopMinimal className="w-6 h-6 text-[#102B49]" />
  };

  // Mapping solution icons
  const solutionIcons: Record<string, React.ReactNode> = {
    'business-audit': <SearchCheck className="w-6 h-6 text-[#087C78]" />,
    'sop-design': <Workflow className="w-6 h-6 text-[#102B49]" />,
    'process-automation': <Cpu className="w-6 h-6 text-[#087C78]" />,
    'software-erp': <LaptopMinimal className="w-6 h-6 text-[#F07820]" />,
    'reports-dashboards': <BarChart3 className="w-6 h-6 text-[#102B49]" />,
    'cost-reduction': <BadgeDollarSign className="w-6 h-6 text-[#B9233D]" />
  };

  const industryIcons: Record<string, React.ReactNode> = {
    'manufacturing-industrial': <Factory className="w-5 h-5 text-[#087C78]" />,
    'trading-distribution': <Building className="w-5 h-5 text-[#102B49]" />,
    'logistics-transportation': <Truck className="w-5 h-5 text-[#087C78]" />,
    'retail-wholesale': <Store className="w-5 h-5 text-[#F07820]" />,
    'professional-services': <Briefcase className="w-5 h-5 text-[#102B49]" />,
    'growing-enterprises': <Layers className="w-5 h-5 text-[#087C78]" />
  };

  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* SECTION 02: HERO SECTION (Asymmetric 2-Column Split)    */}
      {/* ======================================================== */}
      <section className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            {/* Left Column: Proposition & Messaging */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
              {/* Eyebrow */}
              <div className="text-xs font-bold tracking-[0.2em] text-[#087C78] uppercase">
                BUSINESS CONSULTING · PROCESS EXCELLENCE · AUTOMATION · GROWTH
              </div>

              {/* Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102B49] leading-[1.14] tracking-tight text-balance">
                WE DON&apos;T JUST ADVISE BUSINESSES. WE BUILD SYSTEMS THAT HELP THEM GROW.
              </h1>

              {/* Supporting Statement */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                We partner with businesses to streamline operations, reduce costs, improve accountability and implement the right systems and software to achieve sustainable growth.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg shadow-sm transition-all duration-200"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102B49] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#087C78]" />
                </button>
              </div>

              {/* Regional Office Indicator */}
              <div className="pt-4 flex items-center gap-3 text-xs text-slate-500 border-t border-slate-100">
                <MapPin className="w-3.5 h-3.5 text-[#087C78] shrink-0" />
                <span>Headquartered in Currency Tower, Telibandha, Raipur, Chhattisgarh</span>
              </div>
            </div>

            {/* Right Column: Authentic Editorial Visual Asset */}
            <div className="lg:col-span-5 relative flex items-center">
              <div className="w-full h-full min-h-[380px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100 group">
                <img
                  src="/src/assets/images/hero_business_operations_1794410796125.jpg"
                  alt="Operations leadership overlooking modern logistics and production facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B49]/80 via-transparent to-transparent pointer-events-none" />

                {/* Subdued Editorial Overlay Banner */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-sm rounded-xl border border-white/60 shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#102B49] uppercase tracking-wider">
                        Practical Execution Over Abstract Theory
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        On-the-ground SOP design, floor audits, and active ERP adoption for lasting operational control.
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#087C78] shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Operational Focus Strip */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#087C78] uppercase tracking-wider block">
                01. Operational Audit
              </span>
              <p className="text-xs text-slate-600">
                Diagnose hidden process friction, scrap leakages, and cost overruns.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#102B49] uppercase tracking-wider block">
                02. Custom SOPs
              </span>
              <p className="text-xs text-slate-600">
                Standardize daily department workflows with measurable accountability.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#087C78] uppercase tracking-wider block">
                03. Automation & MIS
              </span>
              <p className="text-xs text-slate-600">
                Automate repetitive approvals and build single-screen leadership dashboards.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#F07820] uppercase tracking-wider block">
                04. ERP ROI
              </span>
              <p className="text-xs text-slate-600">
                Bridge the gap between software purchase and floor-level employee adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 03: BUSINESS CHALLENGES                        */}
      {/* ======================================================== */}
      <section id="challenges" className="py-20 bg-[#F7F8F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#B9233D] uppercase block mb-2">
              Diagnostic Assessment
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              IS YOUR BUSINESS FACING THESE PROBLEMS?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Most growing businesses don&apos;t fail due to lack of market demand. They struggle because operational complexity outpaces their internal systems and controls.
            </p>
          </div>

          {/* 6 Structured Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_CHALLENGES.map((prob) => (
              <div
                key={prob.id}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      {challengeIcons[prob.id]}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {prob.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#102B49] mb-2 leading-snug">
                    {prob.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    Bottom-Line Impact:
                  </span>
                  <p className="text-xs text-slate-700 italic">
                    &ldquo;{prob.impact}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlighted Statement Banner */}
          <div className="mt-12 bg-white border border-[#087C78]/30 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center md:text-left">
              <p className="font-display font-bold text-lg sm:text-xl text-[#102B49]">
                If your answer is YES to even one of these, we can help.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                You don&apos;t need another vague theoretical report. You need engineered operational systems that your team can run every single day.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-lg transition-colors shrink-0 cursor-pointer shadow-sm"
            >
              <span>Schedule Operational Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 04: HOW WE HELP                                */}
      {/* ======================================================== */}
      <section id="solutions" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
              Engineered Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              HOW WE CAN HELP YOU
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We design and implement structured solutions that transform daily firefighting into predictable, disciplined business operations.
            </p>
          </div>

          {/* 6 Core Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="bg-[#F7F8F8] border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#087C78]/50 hover:bg-white transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-xs group-hover:bg-[#102B49] group-hover:text-white transition-colors duration-200">
                      {solutionIcons[sol.id]}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {sol.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#102B49] mb-1">
                    {sol.title}
                  </h3>

                  <p className="text-xs font-medium text-[#087C78] mb-3">
                    {sol.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  {/* Core Deliverables */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {sol.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#087C78] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    to={`/services?category=${sol.serviceCategorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102B49] hover:text-[#087C78] transition-colors"
                  >
                    <span>View Service Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 05: ABOUT ANALYMATE (Split Editorial Layout)   */}
      {/* ======================================================== */}
      <section className="py-20 bg-[#102B49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase">
                About Analymate Solutions
              </span>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                WE BUILD BETTER BUSINESS SYSTEMS.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  At Analymate Solutions, we believe that sustainable business growth requires more than good advice. It requires structured processes, financial clarity, operational discipline and the right technology.
                </p>
                <p>
                  We work alongside businesses to identify operational gaps, improve management systems and implement practical solutions that create lasting business value.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h4 className="font-display font-bold text-sm text-white mb-1">
                    Business Clarity
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    Accurate financial modeling, unit-level profitability, and timely MIS reports for leadership.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h4 className="font-display font-bold text-sm text-white mb-1">
                    Process Excellence
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    Standardized SOPs, clear departmental handoffs, and objective accountability frameworks.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h4 className="font-display font-bold text-sm text-white mb-1">
                    Technology & Automation
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    ERP stabilization, digital approvals, and automated reporting systems that save hours daily.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-lg transition-colors"
                >
                  <span>Discover Analymate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Asset */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative bg-slate-800">
                <img
                  src="/src/assets/images/about_systems_consulting_1794410796564.jpg"
                  alt="Business process consultants reviewing workflow schematics and architecture"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900/90 border-t border-white/10">
                  <p className="text-xs font-medium text-slate-300">
                    Collaborating directly with owners and teams to convert business strategy into daily operational reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 06: OUR SERVICES (Comprehensive Overview)      */}
      {/* ======================================================== */}
      <section id="services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
              Consulting Practices
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              COMPREHENSIVE BUSINESS SOLUTIONS. PRACTICAL EXECUTION.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We organize our capabilities across six interconnected consulting disciplines to address every dimension of enterprise health.
            </p>
          </div>

          {/* 6 Comprehensive Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSULTING_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className="bg-[#F7F8F8] border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#102B49]/40 hover:bg-white transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#087C78]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Practice Area
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#102B49] mb-1">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {cat.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {cat.overview}
                  </p>

                  {/* Scope of Support */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Scope of Support:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {cat.scope.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#087C78] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to={`/services?category=${cat.id}`}
                    className="text-xs font-bold text-[#102B49] hover:text-[#087C78] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Full Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-[#087C78] hover:underline"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg shadow-sm transition-colors"
            >
              <span>Explore All Consulting Categories in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 07: INDUSTRIES WE SERVE                         */}
      {/* ======================================================== */}
      <section id="industries" className="py-20 bg-[#F7F8F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
              Industry Experience
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              BUSINESS UNDERSTANDING ACROSS INDUSTRIES.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Every industry has distinct operational nuances, supply chain pressures, and compliance requirements. Our systems are engineered around your sector&apos;s specific daily realities.
            </p>
          </div>

          {/* 6 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 shadow-xs transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
                      {industryIcons[ind.id]}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#102B49]">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-[#087C78] font-medium">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 mb-4 leading-relaxed">
                    <strong className="text-slate-800">Operational Focus:</strong> {ind.operationalFocus}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Common Operational Challenges:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {ind.painPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-[#B9233D] font-bold text-xs">·</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to={`/industries#${ind.id}`}
                    className="text-xs font-bold text-[#102B49] hover:text-[#087C78] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Industry Advisory Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Visual Feature Banner */}
          <div className="mt-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 p-8 sm:p-10 text-white space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                  From Plant Floor to Boardroom
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  Systems Built for Real Industrial & Commercial Environments
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We don&apos;t just consult from remote offices. We walk your factory floors, inspect warehouse racking, review store cash closeouts, and align software with the people doing the work.
                </p>
                <div className="pt-2">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-md transition-colors"
                  >
                    <span>Learn About Sector Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 h-64 lg:h-96 relative">
                <img
                  src="/src/assets/images/industry_manufacturing_logistics_1794410797475.jpg"
                  alt="Industrial manufacturing and logistics facility"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 08: OUR APPROACH (5-Stage Methodology)         */}
      {/* ======================================================== */}
      <section id="approach" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
              Consulting Methodology
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              FROM BUSINESS CHALLENGES TO PRACTICAL SOLUTIONS.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              A structured 5-stage consulting framework engineered to ensure diagnostic accuracy, customized process design, and sustained operational compliance.
            </p>
          </div>

          {/* Desktop Horizontal Process Diagram / Mobile Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {CONSULTING_METHODOLOGY.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#F7F8F8] border border-slate-200 rounded-xl p-5 flex flex-col justify-between relative group hover:border-[#087C78] hover:bg-white transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-lg font-extrabold text-[#087C78]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      STAGE
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-[#102B49] mb-1 uppercase tracking-wider">
                    {step.name}
                  </h3>

                  <p className="text-xs text-[#087C78] font-semibold mb-3 leading-snug">
                    {step.title}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 block">Deliverable:</span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-4">
            {CONSULTING_METHODOLOGY.map((step) => (
              <div
                key={step.step}
                className="bg-[#F7F8F8] border border-slate-200 rounded-xl p-5 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#102B49] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#087C78] uppercase tracking-wider block">
                      {step.name}
                    </span>
                    <h3 className="font-display font-bold text-sm text-[#102B49]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pl-11">
                  {step.description}
                </p>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 pl-11">
                  <strong className="text-slate-700">Deliverable:</strong> {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 09: OUR CLIENTS                                */}
      {/* ======================================================== */}
      <section id="clients" className="py-20 bg-[#F7F8F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
              Brochure Partners & Client Identities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              ORGANIZATIONS WE HAVE PARTNERED WITH.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We work alongside prominent infrastructure developers, real estate builders, precision manufacturers, hospitality operators, and commercial distributors.
            </p>
          </div>

          {/* Authentic Clean Logo Grid */}
          <ClientLogoGrid />

          <p className="mt-8 text-center text-xs text-slate-500">
            Client brand identities displayed per verified corporate brochure documentation.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 10: OUR TEAM                                   */}
      {/* ======================================================== */}
      <section id="team" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
              Leadership & Governance
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
              THE PEOPLE BEHIND THE PERSPECTIVE.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Our leadership brings focused expertise in organizational strategy, process re-engineering, and enterprise technology implementations.
            </p>
          </div>

          {/* Team Cards (Verified Details Only - No Fake Portraits or Bios) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-[#F7F8F8] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Monogram Seal */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#102B49] text-white font-display font-bold text-lg flex items-center justify-center shadow-xs">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    {member.designationStatus === 'confirmed' ? (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        Executive Board
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded border border-slate-300">
                        Designation to be confirmed
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#102B49]">
                    {member.name}
                  </h3>

                  <p className="text-xs font-bold text-[#087C78] uppercase tracking-wider mt-1 mb-2">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {member.department}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {member.notes}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Analymate Solutions Pvt. Ltd.</span>
                  <span className="text-[#087C78] font-semibold">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 11: FINAL CTA                                  */}
      {/* ======================================================== */}
      <section className="py-20 bg-[#102B49] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase">
            Let&apos;s Build Sustainable Growth
          </span>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            YOUR BUSINESS HAS POTENTIAL. LET&apos;S BUILD THE SYSTEMS TO UNLOCK IT.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are looking to reduce operational costs, improve accountability, implement better processes or gain greater business visibility, let&apos;s start a conversation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#087C78] hover:bg-[#087C78]/90 rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
            >
              <span>Contact Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 12: CONTACT (Form & Corporate Details)         */}
      {/* ======================================================== */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
            {/* Left Column: Contact Information & Location */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#087C78] uppercase block mb-2">
                  Direct Consultation
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B49] tracking-tight">
                  LET&apos;S TALK ABOUT YOUR BUSINESS.
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Connect with our team to arrange an on-site operational review or confidential executive discussion at our Raipur office.
                </p>
              </div>

              {/* Verified Contact Details Card */}
              <div className="bg-[#F7F8F8] border border-slate-200 rounded-xl p-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#F07820] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Office Address:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </p>
                    <a
                      href={COMPANY_INFO.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#087C78] hover:underline mt-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200">
                  <Phone className="w-5 h-5 text-[#087C78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Phone Numbers:
                    </span>
                    <div className="space-y-1 text-xs">
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phones[0].raw}`}
                          className="font-semibold text-slate-800 hover:text-[#087C78] tabular-nums"
                        >
                          {COMPANY_INFO.phones[0].display}
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phones[1].raw}`}
                          className="font-semibold text-slate-800 hover:text-[#087C78] tabular-nums"
                        >
                          {COMPANY_INFO.phones[1].display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200">
                  <Mail className="w-5 h-5 text-[#087C78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Official Email:
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs font-semibold text-slate-800 hover:text-[#087C78]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-56 bg-slate-100">
                <iframe
                  title="Analymate Solutions Office Location - Currency Tower, Raipur"
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
            <div className="lg:col-span-7 bg-[#F7F8F8] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-[#102B49]">
                  Send a Business Enquiry
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill out your company details below. An Analymate consultant will review your business context before getting in touch.
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
