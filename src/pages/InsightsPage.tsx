import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag, ChevronRight, FileText } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  takeaways: string[];
  date: string;
}

const INSIGHTS_ARTICLES: Article[] = [
  {
    id: "inventory-leakages-guide",
    title: "The 6 Silent Cost Leakages in Industrial Operations — And How to Stop Them",
    category: "Cost Reduction",
    readTime: "5 min read",
    date: "Corporate Whitepaper · 2026",
    summary: "Material scrap, undocumented returns, and discrepancy between ERP numbers and physical inventory slowly erode bottom-line profitability. Learn the systematic audit checkpoints to restore physical inventory integrity.",
    takeaways: [
      "Physical vs book reconciliation protocols that identify pilferage immediately",
      "Standardizing scrap allowance baselines at each stage of production",
      "Implementing barcode-driven inward and dispatch double-check gates"
    ]
  },
  {
    id: "erp-adoption-bridge",
    title: "Why 70% of ERP Implementations Stall — And the Missing SOP Bridge",
    category: "Process Automation",
    readTime: "6 min read",
    date: "Enterprise Advisory · 2026",
    summary: "Companies invest millions in enterprise software, yet employees continue running parallel Excel spreadsheets. Explore why software succeeds only when preceded by rigorous, documented standard operating procedures.",
    takeaways: [
      "Why digitizing an undefined process simply creates digital chaos faster",
      "The role of floor-level role champions during the first 90 days of go-live",
      "Establishing strict data entry validation rules before system handoff"
    ]
  },
  {
    id: "raci-accountability-discipline",
    title: "From Finger-Pointing to Cadence: Building Real Accountability with RACI Matrices",
    category: "Process Excellence",
    readTime: "4 min read",
    date: "Operational Governance · 2026",
    summary: "When missed deadlines occur, who is truly responsible? How structured RACI (Responsible, Accountable, Consulted, Informed) documentation eliminates organizational ambiguity and empowers middle management.",
    takeaways: [
      "Single-point accountability: why tasks with multiple 'owners' never get finished",
      "Designing daily flash task logs that highlight bottlenecks before month-end",
      "Conducting constructive weekly review meetings based on objective metrics"
    ]
  },
  {
    id: "executive-mis-metrics",
    title: "The 5 Numbers Every Business Leader Needs on Their Screen by 9 AM",
    category: "Business Intelligence",
    readTime: "5 min read",
    date: "Management Information Systems · 2026",
    summary: "Waiting until the 15th of the following month for accounting reports leaves leaders flying blind. How automated flash MIS dashboards provide daily visibility over collections, dispatch velocity, and cash runway.",
    takeaways: [
      "Distinguishing vanity revenue from daily realized bank collections",
      "Monitoring plant capacity utilization and idle machine hours in real-time",
      "Automating trigger alerts when overdue receivables cross customer credit terms"
    ]
  }
];

interface InsightsPageProps {
  onOpenConsultation: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onOpenConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#102B49] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
              Operational Perspectives
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Insights & Advisory Frameworks
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Practical methodologies, field diagnostics, and system engineering lessons drawn from real enterprise business transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="bg-[#F7F8F8] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#087C78]/50 transition-all duration-200"
              >
                <div>
                  {/* Clean unboxed metadata per frontend design skill §1.A */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-[#087C78]">{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#102B49] mb-3 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {art.summary}
                  </p>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Core Framework Takeaways:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {art.takeaways.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#087C78] shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102B49] hover:text-[#087C78] transition-colors cursor-pointer"
                  >
                    <span>Read Executive Summary</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-[#087C78] hover:underline"
                  >
                    Discuss With Advisor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087C78]">
                {selectedArticle.category} · Executive Briefing
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-500 hover:text-slate-800 text-sm font-semibold p-1"
              >
                ✕ Close
              </button>
            </div>

            <div className="py-6 space-y-5">
              <h3 className="font-display font-bold text-2xl text-[#102B49] leading-tight">
                {selectedArticle.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedArticle.summary}
              </p>

              <div className="p-5 bg-[#F7F8F8] border border-slate-200 rounded-xl space-y-3">
                <h4 className="font-display font-bold text-sm text-[#102B49]">
                  Implementation Protocols:
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedArticle.takeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#087C78] mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                Published by Analymate Solutions Pvt. Ltd. advisory team. For customized implementation in your organization, contact our office.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg transition-colors"
              >
                <span>Request Advisory Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
