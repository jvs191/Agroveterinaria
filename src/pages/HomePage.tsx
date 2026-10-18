import React from 'react';
import {
  ShoppingBag,
  Bot,
  RotateCcw,
  Sparkles,
  MapPin,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Dog,
  Wheat,
  PawPrint,
  Flower2,
  Wrench,
  Stethoscope,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const {
    setActiveTab,
    products,
    categories,
    setSelectedCategory,
    orders,
    repeatOrder,
    setIsVeitiaModalOpen,
    whatsAppNumber,
    generateWhatsAppLink,
    t,
  } = useApp();

  const featuredProducts = products.filter((p) => p.featured);

  const categoryIcons: Record<string, React.ElementType> = {
    Dog: Dog,
    Wheat: Wheat,
    PawPrint: PawPrint,
    Flower2: Flower2,
    Wrench: Wrench,
    Stethoscope: Stethoscope,
  };

  return (
    <div className="space-y-6 pb-20 md:pb-8 animate-fade-in">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-[#173F2A] via-[#2F6B45] to-[#173F2A] text-white rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xl border border-emerald-900/30">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#82C328]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-[#82C328]/40 px-3 py-1 rounded-full text-xs font-bold text-[#82C328] uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" /> {t.homeHeroTag}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {t.homeHeroTitle}
          </h1>

          <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-relaxed">
            {t.homeHeroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('comprar')}
              className="bg-[#82C328] hover:bg-[#72b020] text-[#173F2A] font-black px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all transform hover:scale-[1.02] cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            >
              <ShoppingBag className="w-4 h-4" /> {t.buyNow}
            </button>

            <button
              onClick={() => setActiveTab('asistente')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-4 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 backdrop-blur-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            >
              <Bot className="w-4 h-4 text-[#82C328]" /> {t.needHelp}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Re-Order Banner Prompt if there are prior purchases */}
      {orders.length > 0 && (
        <section className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 font-bold">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                {t.homeSmartReminderTag}
              </span>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#1D2922]">
                {t.homeSmartReminderTitle}
              </h4>
              <p className="text-[11px] text-gray-600">
                {t.homeSmartReminderDesc}
              </p>
            </div>
          </div>

          <button
            onClick={() => repeatOrder(orders[0])}
            className="w-full sm:w-auto bg-[#173F2A] hover:bg-[#2F6B45] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-2xs"
          >
            <span>{t.repeatOrder}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#82C328]" />
          </button>
        </section>
      )}

      {/* Categories Bar */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-[#173F2A] tracking-tight">
            {t.homeMainCategories}
          </h2>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setActiveTab('comprar');
            }}
            className="text-xs text-[#2F6B45] hover:underline font-bold flex items-center gap-1"
          >
            {t.categories.viewCatalog} <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {categories.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Dog;
            const categoryNameTranslated = (t.categories as any)[cat.id] || cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveTab('comprar');
                }}
                className="bg-white hover:bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-900/10 shadow-2xs flex flex-col items-center text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#173F2A] group-hover:bg-[#173F2A] group-hover:text-[#82C328] flex items-center justify-center transition-colors mb-2">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-[#1D2922] group-hover:text-[#173F2A]">
                  {categoryNameTranslated}
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  {cat.productCount} {t.categories.prodsCount}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Campo Verde AI Quick Entry Widget */}
      <section className="bg-gradient-to-r from-emerald-900 to-[#173F2A] text-white rounded-3xl p-5 sm:p-6 shadow-md border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#82C328] text-[#173F2A] flex items-center justify-center shrink-0 font-extrabold shadow-md">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm sm:text-base">{t.homeAssistantTitle}</h3>
              <span className="bg-[#82C328] text-[#173F2A] font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase">
                IA
              </span>
            </div>
            <p className="text-xs text-emerald-200 mt-0.5">
              {t.homeAssistantSub}
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('asistente')}
          className="w-full sm:w-auto bg-white text-[#173F2A] hover:bg-emerald-50 font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shrink-0 transition-colors shadow-sm"
        >
          <span>{t.homeAssistantBtn}</span>
          <ArrowRight className="w-4 h-4 text-[#2F6B45]" />
        </button>
      </section>

      {/* Featured Products Showcase */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-[#173F2A] tracking-tight">
              {t.homeFeaturedTitle}
            </h2>
            <p className="text-xs text-gray-500">{t.homeFeaturedSub}</p>
          </div>

          <button
            onClick={() => setActiveTab('comprar')}
            className="text-xs text-[#2F6B45] hover:underline font-bold"
          >
            {t.seeAll}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Physical Store & Location Info in Chuy / Chuí */}
      <section className="bg-white rounded-3xl p-5 border border-emerald-900/10 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#173F2A] text-[#82C328] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#2F6B45] uppercase tracking-wider block">
                {t.homeStoreTag}
              </span>
              <h3 className="text-sm font-extrabold text-[#1D2922]">
                {t.homeStoreTitle}
              </h3>
              <p className="text-xs text-gray-500">{t.homeStoreAddress}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('tienda')}
              className="flex-1 sm:flex-initial bg-emerald-50 text-[#173F2A] hover:bg-emerald-100 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
            >
              {t.howToGet}
            </button>
            <a
              href={generateWhatsAppLink(undefined, 'Hola Campo Verde Chuy 👋 Quisiera saber horarios de atención en la tienda física.')}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial bg-[#2F6B45] hover:bg-[#173F2A] text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#82C328]" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
