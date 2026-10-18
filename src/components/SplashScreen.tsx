import React from 'react';
import { Logo } from './Logo';
import { Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SplashScreenProps {
  onDismiss: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  const { t } = useApp();

  return (
    <div
      onClick={onDismiss}
      className="fixed inset-0 z-50 bg-[#173F2A] flex flex-col items-center justify-between p-8 text-white cursor-pointer select-none transition-opacity duration-500 animate-fade-in"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl mb-6 transform hover:scale-105 transition-transform">
          <Logo size="xl" />
        </div>

        <h1 className="text-2xl font-extrabold text-white tracking-tight mt-2">
          {t.welcomeTitle}
        </h1>
        <p className="text-emerald-200 text-sm font-medium mt-1">
          {t.splashTagline}
        </p>

        <div className="mt-8 flex items-center gap-2 bg-[#82C328] text-[#173F2A] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider animate-bounce">
          <Sparkles className="w-3.5 h-3.5" /> {t.splashTag}
        </div>
      </div>

      <div className="text-center text-xs text-emerald-300/80 space-y-1">
        <p>{t.splashPressToContinue}</p>
        <p className="text-[10px] text-emerald-400/60">Demo Comercial • Veitia Studios</p>
      </div>
    </div>
  );
};
