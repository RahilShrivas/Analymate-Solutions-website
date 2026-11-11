import React from 'react';
import { CLIENT_PARTNERS } from '../data/companyData';
import { Building2, Award } from 'lucide-react';

export const ClientLogoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {CLIENT_PARTNERS.map((client) => (
        <div
          key={client.name}
          className="group relative bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:border-[#087C78]/60 hover:shadow-md flex flex-col justify-between"
        >
          {/* Top Identifier Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="w-10 h-10 rounded-lg bg-slate-100/90 text-[#102B49] font-display font-extrabold text-sm flex items-center justify-center tracking-wider border border-slate-200 group-hover:bg-[#102B49] group-hover:text-white transition-colors duration-200">
              {client.badge}
            </span>
            <span className="text-[10px] font-medium tracking-wide uppercase text-slate-500 line-clamp-1">
              {client.location}
            </span>
          </div>

          {/* Client Name & Full Identity */}
          <div className="space-y-1">
            <h4 className="font-display font-bold text-sm sm:text-base text-[#102B49] group-hover:text-[#087C78] transition-colors">
              {client.name}
            </h4>
            <p className="text-xs text-slate-500 font-normal leading-snug">
              {client.fullName}
            </p>
          </div>

          {/* Industry Classification */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
            <Building2 className="w-3 h-3 text-[#087C78] shrink-0" />
            <span className="truncate">{client.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
