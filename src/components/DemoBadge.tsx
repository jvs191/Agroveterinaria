import React from 'react';
import { Info, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DemoBadge: React.FC = () => {
  const { setIsVeitiaModalOpen, t } = useApp();

  return (
    <div className="bg-gradient-to-r from-[#173F2A] via-[#2F6B45] to-[#173F2A] text-white px-3 py-1.5 text-xs font-medium flex items-center justify-between shadow-xs z-30">
      <div className="flex items-center gap-1.5 max-w-7xl mx-auto w-full justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#82C328] text-[#173F2A] px-2 py-0.5 rounded-full font-extrabold text-[10px] tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3 h-3" /> DEMO COMERCIAL
          </span>
          <span className="hidden sm:inline text-emerald-100 text-xs">
            {t.demoBadgeText}
          </span>
        </div>

        <button
          onClick={() => setIsVeitiaModalOpen(true)}
          className="text-xs text-lime-300 hover:text-white underline font-semibold flex items-center gap-1 transition-colors"
        >
          <span>{t.demoBadgeDrivenBy}</span>
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
