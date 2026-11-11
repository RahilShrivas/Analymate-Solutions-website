import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Building2, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 text-[#102B49] font-mono text-xl font-bold flex items-center justify-center mx-auto shadow-xs">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#102B49]">
            Page Not Located
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The corporate advisory page or resource you requested could not be found. Please check the URL or navigate back to the main portal.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-[#087C78]" />
            <span>Contact Office</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-[11px] text-slate-400">
          Analymate Solutions Pvt. Ltd. · Currency Tower, Raipur
        </div>
      </div>
    </div>
  );
};
