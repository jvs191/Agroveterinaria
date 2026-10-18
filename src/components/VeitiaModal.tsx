import React from 'react';
import { X, CheckCircle2, MessageSquare, ExternalLink, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';

export const VeitiaModal: React.FC = () => {
  const { isVeitiaModalOpen, setIsVeitiaModalOpen, whatsAppNumber, language, t } = useApp();

  if (!isVeitiaModalOpen) return null;

  const handleContactWhatsApp = () => {
    const text = language === 'pt'
      ? `Olá Veitia Studios 👋\nEstive revisando a demo comercial de *Campo Verde Digital*.\nGostaria de conversar sobre a implementação real do ecossistema (PWA, ecommerce, IA, WhatsApp e automatizações) para Campo Verde Chuí.`
      : `Hola Veitia Studios 👋\nEstuve revisando la demo comercial de *Campo Verde Digital*.\nMe gustaría conversar sobre la implementación real del ecosistema (PWA, ecommerce, IA, WhatsApp y automatizaciones) para Campo Verde Chuy.`;
    window.open(`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-emerald-900/20 my-auto">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#173F2A] via-[#2F6B45] to-[#173F2A] text-white p-6 relative">
          <button
            onClick={() => setIsVeitiaModalOpen(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#82C328] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" /> {t.veitiaProposalTag}
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight leading-snug">
            {t.veitiaTitle}
          </h2>

          <p className="text-emerald-100 text-xs mt-1 max-w-md">
            {t.veitiaDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          <div className="bg-[#F7F6F1] p-4 rounded-2xl border border-emerald-900/10 flex items-center justify-between">
            <Logo size="md" />
            <span className="text-[11px] font-bold text-[#173F2A] bg-[#82C328] px-2.5 py-1 rounded-full uppercase">
              Chuy / Chuí
            </span>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-[#173F2A] uppercase tracking-wider mb-3">
              {t.veitiaModulesTitle}
            </h4>

            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              {(language === 'pt'
                ? [
                    'Aplicação PWA Instalável',
                    'Catálogo & Ecommerce Sync',
                    'WhatsApp API & Automações',
                    'Assistente Inteligente IA',
                    'Motor de Recompra Automática',
                    'Banco de Dados Supabase / Cloud',
                    'Automação de Fluxos n8n',
                    'Painel Comercial & Analítica CRM',
                  ]
                : [
                    'Aplicación PWA Instalable',
                    'Catálogo & Ecommerce Sync',
                    'WhatsApp API & Automatizaciones',
                    'Asistente Inteligente IA',
                    'Motor de Recompra Automática',
                    'Base de Datos Supabase / Cloud',
                    'Automatización de Flujos n8n',
                    'Panel Comercial & Analítica CRM',
                  ]
              ).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-900/10 text-[#1D2922] font-semibold"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2F6B45] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-900 text-white p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-[#82C328] font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> {t.veitiaCommitmentTag}
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed">
              {t.veitiaCommitmentDesc}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleContactWhatsApp}
            className="w-full sm:flex-1 bg-[#2F6B45] hover:bg-[#173F2A] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#82C328]" />
            <span>{t.adminTalkVeitia}</span>
          </button>

          <button
            onClick={() => setIsVeitiaModalOpen(false)}
            className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-xl text-xs transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
