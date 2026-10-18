import React from 'react';
import { RotateCcw, Bell, Award, Sparkles, Percent, Truck, ArrowRight, ShoppingBag, Calendar, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { INITIAL_BENEFITS } from '../data/promotions';

export const RepurchasePage: React.FC = () => {
  const { reminders, customer, addToCart, products, setActiveTab, formatPrice, language, t } = useApp();

  const biofreshProduct = products.find((p) => p.id === 'prod-biofresh-15') || products[1];
  const nexgardProduct = products.find((p) => p.id === 'prod-nexgard-15-30') || products[0];

  const offers = [
    {
      id: 'off-1',
      tag: language === 'pt' ? '🐶 Ficando sem ração?' : '🐶 ¿Por quedarse sin ración?',
      title: language === 'pt' ? 'Especial Cães Adultos Biofresh' : 'Especial Perros Adultos Biofresh',
      desc: language === 'pt' ? 'Desconto exclusivo em sacos de 15 kg.' : 'Descuento exclusivo en bolsas de 15 kg.',
      productId: 'prod-biofresh-15',
      bgColor: 'bg-emerald-50 border-emerald-200',
      btnColor: 'text-[#173F2A]',
    },
    {
      id: 'off-2',
      tag: language === 'pt' ? '🐄 Especial Produtores' : '🐄 Especial Productores',
      title: language === 'pt' ? 'Lote Antiparasitários Ivermectina' : 'Lote Antiparasitarios Ivermectina',
      desc: language === 'pt' ? 'Preços especiais para frascos de 500 ml.' : 'Precios especiales para frascos de 500 ml.',
      productId: 'prod-ivermectina-500',
      bgColor: 'bg-amber-50 border-amber-200',
      btnColor: 'text-amber-900',
    },
    {
      id: 'off-3',
      tag: language === 'pt' ? '🌱 Temporada Jardim' : '🌱 Temporada Jardín',
      title: language === 'pt' ? 'Fertilizante Orgânico 5 L' : 'Fertilizante Orgánico 5 L',
      desc: language === 'pt' ? 'Bioestimulante para horta e gramado.' : 'Bioestimulante para huerto y césped.',
      productId: 'prod-fertilizante-5l',
      bgColor: 'bg-blue-50 border-blue-200',
      btnColor: 'text-blue-900',
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-8 animate-fade-in max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#173F2A] via-[#2F6B45] to-[#173F2A] text-white p-6 rounded-3xl shadow-md border border-emerald-900/30">
        <div className="flex items-center gap-2 text-[#82C328] text-xs font-extrabold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" /> {t.repurchaseTitle}
        </div>
        <h1 className="text-2xl font-black tracking-tight">{t.repurchaseTitle}</h1>
        <p className="text-emerald-100 text-xs mt-1">
          {t.repurchaseSub}
        </p>
      </div>

      {/* 1. SECTION: Repetir Pedido (Recompra Rápida) */}
      <section className="bg-white rounded-3xl p-5 border border-emerald-900/10 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#173F2A] flex items-center justify-center font-bold">
            <RotateCcw className="w-5 h-5 text-[#2F6B45]" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-[#173F2A]">{t.repurchaseFastTitle}</h2>
            <p className="text-xs text-gray-500">{t.repurchaseFastSub}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {/* Re-order Card 1 */}
          <div className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-3 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <img
                src={biofreshProduct.image}
                alt={biofreshProduct.name}
                className="w-14 h-14 object-cover rounded-xl shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                  {language === 'pt' ? 'Comprado há 28 dias' : 'Comprado hace 28 días'}
                </span>
                <h3 className="font-extrabold text-xs text-[#1D2922] mt-1 line-clamp-1">
                  {biofreshProduct.name}
                </h3>
                <span className="text-xs font-black text-[#173F2A]">
                  {formatPrice(biofreshProduct.price)}
                </span>
              </div>
            </div>

            <button
              onClick={() => addToCart(biofreshProduct, 1)}
              className="w-full bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#82C328]" />
              {language === 'pt' ? 'Repetir pedido agora' : 'Repetir pedido ahora'}
            </button>
          </div>

          {/* Re-order Card 2 */}
          <div className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-3 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <img
                src={nexgardProduct.image}
                alt={nexgardProduct.name}
                className="w-14 h-14 object-cover rounded-xl shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full uppercase">
                  {language === 'pt' ? 'Provavelmente precisará em breve' : 'Probablemente estés por necesitar'}
                </span>
                <h3 className="font-extrabold text-xs text-[#1D2922] mt-1 line-clamp-1">
                  {nexgardProduct.name}
                </h3>
                <span className="text-xs font-black text-[#173F2A]">
                  {formatPrice(nexgardProduct.price)}
                </span>
              </div>
            </div>

            <button
              onClick={() => addToCart(nexgardProduct, 1)}
              className="w-full bg-[#2F6B45] hover:bg-[#173F2A] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#82C328]" />
              {language === 'pt' ? 'Repor antiparasitário' : 'Reponer antiparasitario'}
            </button>
          </div>
        </div>
      </section>

      {/* 2. SECTION: Mis Recordatorios */}
      <section className="bg-white rounded-3xl p-5 border border-emerald-900/10 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Bell className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#173F2A]">{t.repurchaseRemindersTitle}</h2>
              <p className="text-xs text-gray-500">{t.repurchaseRemindersSub}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {reminders.map((rem) => {
            const isUrgent = rem.status === 'Urgente';
            const statusLabel = isUrgent
              ? (language === 'pt' ? 'Urgente' : 'Urgente')
              : (language === 'pt' ? 'Programado' : rem.status);

            const titleTranslated = language === 'pt'
              ? (rem.id === 'rem-ration-biofresh'
                ? 'Repor Ração Cão'
                : rem.id === 'rem-dewormer-nexgard'
                ? 'Dose Antiparasitária Mensal'
                : 'Revacinação / Desparasitação Gado')
              : rem.title;

            const actionTranslated = language === 'pt'
              ? (rem.id === 'rem-ration-biofresh'
                ? 'Repetir pedido com 1 Clique'
                : rem.id === 'rem-dewormer-nexgard'
                ? 'Ver produto'
                : 'Consultar por Lote')
              : rem.actionText;

            const categoryTranslated = language === 'pt'
              ? (rem.category === 'Mascotas' ? 'Mascotes' : rem.category)
              : rem.category;

            return (
              <div
                key={rem.id}
                className="p-3.5 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={rem.image}
                    alt={rem.title}
                    className="w-12 h-12 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#2F6B45] uppercase">
                        {categoryTranslated}
                      </span>
                      <span
                        className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                          isUrgent
                            ? 'bg-red-100 text-red-700'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {statusLabel}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-xs text-[#1D2922]">{titleTranslated}</h4>
                    <p className="text-[11px] text-gray-500">{rem.dueDate}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const p = products.find((prod) => prod.id === rem.productId) || products[0];
                    addToCart(p, 1);
                  }}
                  className="w-full sm:w-auto bg-[#173F2A] hover:bg-[#2F6B45] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                  {actionTranslated}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SECTION: Fidelización & Mis Beneficios */}
      <section className="bg-white rounded-3xl p-5 border border-emerald-900/10 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-900 to-[#173F2A] text-white p-5 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#82C328] text-[#173F2A] flex items-center justify-center font-black">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] text-emerald-200 uppercase font-bold tracking-wider block">
                {t.repurchaseLoyaltyTag}
              </span>
              <h3 className="text-lg font-black">{customer.name}</h3>
              <p className="text-xs text-emerald-100">
                {language === 'pt' ? 'Nível:' : 'Nivel:'} <strong className="text-[#82C328] uppercase">{customer.tier}</strong> • {customer.totalOrders} {t.repurchaseLoyaltySub}
              </p>
            </div>
          </div>

          <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-right w-full sm:w-auto">
            <span className="text-xs text-emerald-200 block font-medium">{t.repurchasePoints}</span>
            <span className="text-2xl font-black text-[#82C328]">{customer.points} PTS</span>
          </div>
        </div>

        {/* Available Benefits */}
        <div className="space-y-3">
          <h3 className="text-sm font-extrabold text-[#173F2A]">{t.repurchaseBenefitsTitle}</h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {INITIAL_BENEFITS.map((ben) => {
              const benTitle = language === 'pt'
                ? (ben.id === 'ben-10off-raciones'
                  ? '10% OFF em Rações Super Premium'
                  : ben.id === 'ben-envio-gratis-chuy'
                  ? 'Frete Grátis no Chuí / Chuy'
                  : '5% OFF na Linha Agro & Ferramentas')
                : ben.title;

              const benDesc = language === 'pt'
                ? (ben.id === 'ben-10off-raciones'
                  ? 'Válido para marcas Biofresh e Royal Canin em compras acima de 15 kg.'
                  : ben.id === 'ben-envio-gratis-chuy'
                  ? 'Entrega direta na sua casa ou propriedade rural no raio urbano.'
                  : 'Benefício exclusivo para clientes da categoria VIP Agro.')
                : ben.description;

              return (
                <div
                  key={ben.id}
                  className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="bg-[#173F2A] text-[#82C328] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                        {ben.discount}
                      </span>
                      <span className="text-[10px] text-gray-500 font-bold">
                        {ben.pointsCost} Pts
                      </span>
                    </div>

                    <h4 className="font-extrabold text-xs text-[#1D2922] mt-2">{benTitle}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed mt-1">{benDesc}</p>
                  </div>

                  <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-600 bg-white px-2 py-1 rounded border">
                      {t.repurchaseCode}: {ben.code}
                    </span>
                    <button
                      onClick={() => setActiveTab('comprar')}
                      className="text-xs font-bold text-[#2F6B45] hover:underline cursor-pointer"
                    >
                      {t.repurchaseUseNow}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION: Ofertas para vos */}
      <section className="bg-white rounded-3xl p-5 border border-emerald-900/10 shadow-2xs space-y-3">
        <h2 className="text-base font-extrabold text-[#173F2A]">{t.repurchaseOffersTitle}</h2>

        <div className="grid sm:grid-cols-3 gap-3">
          {offers.map((off) => (
            <div key={off.id} className={`p-4 rounded-2xl border space-y-2 flex flex-col justify-between ${off.bgColor}`}>
              <div>
                <span className={`text-[10px] font-extrabold uppercase block ${off.btnColor}`}>
                  {off.tag}
                </span>
                <h4 className="font-bold text-xs text-[#1D2922] mt-1">{off.title}</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">{off.desc}</p>
              </div>

              <button
                onClick={() => {
                  const p = products.find((prod) => prod.id === off.productId);
                  if (p) addToCart(p, 1);
                  else setActiveTab('comprar');
                }}
                className={`text-xs font-extrabold hover:underline block pt-2 cursor-pointer ${off.btnColor}`}
              >
                {language === 'pt' ? 'Comprar oferta →' : 'Comprar oferta →'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
