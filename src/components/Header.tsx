import React, { useState } from 'react';
import { ShoppingBag, Search, MapPin, ShieldCheck, Mic, MicOff, WifiOff, Globe, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { useVoiceSearch } from '../hooks/useVoiceSearch';

export const Header: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    cartCount,
    setIsCartOpen,
    searchTerm,
    setSearchTerm,
    language,
    setLanguage,
    t,
    isOffline,
  } = useApp();

  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [speechToast, setSpeechToast] = useState<string | null>(null);

  const { isListening, isSupported, startListening, stopListening } = useVoiceSearch({
    language,
    onResult: (transcript) => {
      setSearchTerm(transcript);
      if (activeTab !== 'comprar') {
        setActiveTab('comprar');
      }
    },
  });

  const handleMicClick = () => {
    if (!isSupported) {
      setSpeechToast(t.speechNotSupported);
      setTimeout(() => setSpeechToast(null), 3000);
      return;
    }

    if (isListening) {
      stopListening();
    } else {
      startListening();
      if (activeTab !== 'comprar') {
        setActiveTab('comprar');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-2xs">
      {/* Offline PWA Banner */}
      {isOffline && (
        <div className="bg-[#173F2A] text-[#82C328] text-[11px] font-black px-4 py-1.5 text-center flex items-center justify-center gap-2 border-b border-emerald-800">
          <WifiOff className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>
            <strong>{t.offlineTitle}:</strong> {t.offlineDesc}
          </span>
        </div>
      )}

      {/* Voice Listening Toast Feedback */}
      {isListening && (
        <div className="bg-[#173F2A] text-white text-xs font-bold px-4 py-2 flex items-center justify-between gap-2 animate-pulse border-b border-[#82C328]/30">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-[#82C328] font-black">{t.listening}</span>
            {searchTerm && <span className="italic text-emerald-200">"{searchTerm}"</span>}
          </div>
          <button
            onClick={stopListening}
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded-lg transition-colors"
          >
            Detener
          </button>
        </div>
      )}

      {/* Speech Toast Notification */}
      {speechToast && (
        <div className="bg-amber-100 text-amber-900 text-xs font-bold px-4 py-1.5 text-center flex items-center justify-center gap-2 border-b border-amber-200">
          <span>{speechToast}</span>
          <button onClick={() => setSpeechToast(null)} className="p-0.5 hover:bg-amber-200 rounded">
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-3">
        {/* Logo & Border Location */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0" onClick={() => setActiveTab('inicio')}>
          <Logo size="md" />
          <div className="hidden md:flex flex-col border-l border-emerald-900/15 pl-3 py-0.5">
            <span className="text-[11px] font-bold text-[#173F2A] flex items-center gap-1 uppercase tracking-wider">
              <MapPin className="w-3 h-3 text-[#2F6B45]" /> {t.borderLocation}
            </span>
            <span className="text-[10px] text-gray-500 font-medium">{t.countrySub}</span>
          </div>
        </div>

        {/* Quick Search Bar with Voice Speech API (Desktop & Tablet) */}
        <div className="hidden lg:flex items-center relative flex-1 max-w-sm mx-3">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder={isListening ? t.listening : t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (activeTab !== 'comprar') setActiveTab('comprar');
            }}
            className={`w-full bg-[#F7F6F1] text-xs rounded-full pl-9 pr-10 py-2 border transition-all ${
              isListening
                ? 'border-red-500 ring-2 ring-red-300 bg-red-50/30'
                : 'border-emerald-900/10 focus:outline-none focus:ring-2 focus:ring-[#2F6B45]/30 focus:border-[#2F6B45]'
            }`}
          />
          <button
            type="button"
            onClick={handleMicClick}
            title={t.voiceSearch}
            className={`absolute right-2.5 p-1 rounded-full transition-colors ${
              isListening
                ? 'bg-red-500 text-white animate-bounce'
                : 'text-gray-400 hover:text-[#173F2A] hover:bg-emerald-100/60'
            }`}
          >
            {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Right Action Controls: Language Switcher + Admin Panel + Mobile Mic Search + Cart */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile Voice Search Quick Trigger */}
          <button
            type="button"
            onClick={() => {
              setIsMobileSearchOpen(!isMobileSearchOpen);
              if (!isMobileSearchOpen && activeTab !== 'comprar') {
                setActiveTab('comprar');
              }
            }}
            className={`lg:hidden p-2 rounded-full border transition-colors ${
              isListening
                ? 'bg-red-500 text-white border-red-600 animate-pulse'
                : 'bg-[#F7F6F1] text-[#173F2A] border-emerald-900/10 hover:bg-emerald-100'
            }`}
            title={t.voiceSearch}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Selector Pill (Español 🇺🇾 / Português 🇧🇷) */}
          <div className="flex items-center bg-[#F7F6F1] p-0.5 sm:p-1 rounded-full border border-emerald-900/10 shadow-2xs">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded-full text-[10px] font-black transition-all flex items-center gap-1 ${
                language === 'es'
                  ? 'bg-[#173F2A] text-white shadow-xs'
                  : 'text-gray-500 hover:text-[#173F2A]'
              }`}
              title="Cambiar a Español (Chuy, UY)"
            >
              <span className="text-xs">🇺🇾</span>
              <span className="hidden sm:inline">ES</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`px-2 py-1 rounded-full text-[10px] font-black transition-all flex items-center gap-1 ${
                language === 'pt'
                  ? 'bg-[#173F2A] text-white shadow-xs'
                  : 'text-gray-500 hover:text-[#173F2A]'
              }`}
              title="Mudar para Português (Chuí, BR)"
            >
              <span className="text-xs">🇧🇷</span>
              <span className="hidden sm:inline">PT</span>
            </button>
          </div>

          {/* Admin Panel Commercial Switch */}
          <button
            onClick={() => setActiveTab(activeTab === 'admin' ? 'inicio' : 'admin')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs ${
              activeTab === 'admin'
                ? 'bg-[#173F2A] text-white ring-2 ring-[#82C328]'
                : 'bg-emerald-50 text-[#173F2A] hover:bg-emerald-100 border border-emerald-200'
            }`}
            title="Ver Panel Comercial de Administración"
          >
            <ShieldCheck className="w-4 h-4 text-[#82C328]" />
            <span className="hidden md:inline">{t.adminPanel}</span>
            <span className="md:hidden text-[10px] uppercase tracking-wider">Panel</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 sm:p-2.5 rounded-full bg-[#173F2A] text-white hover:bg-[#2F6B45] transition-colors shadow-2xs group"
            aria-label={t.cart}
          >
            <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-100 group-hover:scale-105 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#82C328] text-[#173F2A] font-extrabold text-[10px] sm:text-[11px] w-4 sm:w-5 h-4 sm:h-5 rounded-full flex items-center justify-center shadow-xs border border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block border-t border-emerald-900/10 bg-emerald-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 overflow-x-auto py-1 text-xs">
          {[
            { id: 'inicio', label: t.home },
            { id: 'comprar', label: t.catalog },
            { id: 'asistente', label: t.assistant, isSpecial: true },
            { id: 'pedidos', label: t.orders },
            { id: 'recompra', label: t.repurchase },
            { id: 'tienda', label: t.store },
            { id: 'cuenta', label: t.account },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#173F2A] text-white shadow-2xs'
                    : 'text-gray-700 hover:bg-emerald-100/60 hover:text-[#173F2A]'
                }`}
              >
                {tab.isSpecial && <span className="w-2 h-2 rounded-full bg-[#82C328] animate-pulse" />}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Mobile Search Input with Voice Mic */}
      {isMobileSearchOpen && (
        <div className="lg:hidden px-4 pb-3 pt-1 border-t border-emerald-900/10 bg-[#F7F6F1]/80 backdrop-blur-xs flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              autoFocus
              placeholder={isListening ? t.listening : t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-white text-xs rounded-full pl-9 pr-10 py-2 border ${
                isListening ? 'border-red-500 ring-2 ring-red-300' : 'border-emerald-900/20 focus:outline-none'
              }`}
            />
            <button
              type="button"
              onClick={handleMicClick}
              className={`absolute right-2 top-1.5 p-1 rounded-full ${
                isListening ? 'bg-red-500 text-white animate-pulse' : 'text-gray-500 hover:text-[#173F2A]'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => setIsMobileSearchOpen(false)}
            className="text-xs text-gray-500 font-bold px-2 py-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
