import React from 'react';
import {
  TrendingUp,
  ShoppingBag,
  Users,
  MessageSquare,
  AlertTriangle,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  ToggleLeft,
  ToggleRight,
  BarChart3,
  BarChart2,
  Award,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COMMERCIAL_ALERTS } from '../data/automations';
import { CommercialAlert } from '../types';

export const AdminPage: React.FC = () => {
  const { automations, toggleAutomation, setIsVeitiaModalOpen, formatPrice, language, t } = useApp();

  const getAlertTitle = (alert: CommercialAlert) => {
    if (language === 'pt') {
      if (alert.id === 'alert-recompra') return 'Clientes prontos para Recompra';
      if (alert.id === 'alert-carrito') return 'Carrinhos Abandonados esta semana';
      return 'Clientes Inativos (>60 dias)';
    }
    return alert.title;
  };

  const getAlertDesc = (alert: CommercialAlert) => {
    if (language === 'pt') {
      if (alert.id === 'alert-recompra')
        return '18 clientes compraram alimento para pets há 25-30 dias e estão prestes a ficar sem estoque.';
      if (alert.id === 'alert-carrito')
        return '12 usuários adicionaram produtos (NexGard, Biofresh, Ferramentas) sem finalizar o pedido.';
      return '23 compradores frequentes não registram atividade neste bimestre.';
    }
    return alert.description;
  };

  const getAlertAction = (alert: CommercialAlert) => {
    if (language === 'pt') {
      if (alert.id === 'alert-recompra') return 'Disparar WhatsApp Recompra';
      if (alert.id === 'alert-carrito') return 'Ver carrinhos e interagir';
      return 'Ativar Campanha Fidelidade';
    }
    return alert.actionLabel;
  };

  const getImpactPotential = (alert: CommercialAlert) => {
    if (alert.id === 'alert-recompra') {
      return language === 'pt'
        ? `+${formatPrice(68400)} em vendas estimadas`
        : `+${formatPrice(68400)} en ventas estimadas`;
    }
    if (alert.id === 'alert-carrito') {
      return language === 'pt'
        ? `+${formatPrice(34200)} recuperáveis`
        : `+${formatPrice(34200)} recuperables`;
    }
    return language === 'pt' ? 'Reativa ~8 clientes recorrentes' : alert.impactPotential;
  };

  const metrics = [
    { label: t.adminMetricSalesMonth, value: formatPrice(482900), change: '+18.4%', isPositive: true, icon: TrendingUp },
    { label: t.adminMetricOrdersProcessed, value: '142', change: (t as any).adminMetricOrdersSub || '+12%', isPositive: true, icon: ShoppingBag },
    { label: t.adminMetricRepurchaseRate, value: '68%', change: '+8.2%', isPositive: true, icon: Users },
    { label: t.adminMetricWhatsappLeads, value: '215', change: '+24%', isPositive: true, icon: MessageSquare },
  ];

  const topProducts = [
    {
      name: language === 'pt' ? '1. Rações Super Premium (Biofresh)' : '1. Raciones Super Premium (Biofresh)',
      sales: language === 'pt' ? '118 sacos' : '118 bolsas',
      total: formatPrice(458000),
      share: '38%',
    },
    {
      name: '2. Antiparasitarios (NexGard Spectra)',
      sales: language === 'pt' ? '84 unidades' : '84 unidades',
      total: formatPrice(155400),
      share: '24%',
    },
    {
      name: language === 'pt' ? '3. Produtos Veterinários (Ivermectina)' : '3. Productos Veterinarios (Ivermectina)',
      sales: language === 'pt' ? '52 frascos' : '52 frascos',
      total: formatPrice(127400),
      share: '18%',
    },
    {
      name: language === 'pt' ? '4. Agro & Ferramentas (Cercas Solares)' : '4. Agro & Herramientas (Cercos Solares)',
      sales: language === 'pt' ? '14 unidades' : '14 unidades',
      total: formatPrice(124600),
      share: '12%',
    },
  ];

  const opportunities = [
    {
      name: (t as any).adminOpp1Title || (language === 'pt' ? 'Recompra de Rações' : 'Recompra de Raciones'),
      progress: 85,
      detail: (t as any).adminOpp1Desc || (language === 'pt' ? 'Alta retenção de clientes em pet' : 'Alta retención de clientes en mascotas'),
    },
    {
      name: (t as any).adminOpp2Title || (language === 'pt' ? 'Temporada Antiparasitária' : 'Zafra Antiparasitaria'),
      progress: 72,
      detail: (t as any).adminOpp2Desc || (language === 'pt' ? 'Pico de demanda na primavera/verão' : 'Pico de demanda en primavera/verano'),
    },
    {
      name: (t as any).adminOpp3Title || (language === 'pt' ? 'Atendimento WhatsApp IA' : 'Atención WhatsApp IA'),
      progress: 91,
      detail: (t as any).adminOpp3Desc || (language === 'pt' ? 'Respostas instantâneas 24/7 na fronteira' : 'Respuestas inmediatas 24/7 en frontera'),
    },
    {
      name: (t as any).adminOpp4Title || (language === 'pt' ? 'Linha Agro & Ferramentas' : 'Línea Agro & Herramientas'),
      progress: 64,
      detail: (t as any).adminOpp4Desc || (language === 'pt' ? 'Crescimento constante para produtores' : 'Crecimiento constante hacia productores'),
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-8 animate-fade-in max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="bg-[#173F2A] text-white p-6 rounded-3xl shadow-lg border border-emerald-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#82C328]" />
            <span className="text-xs font-bold text-[#82C328] uppercase tracking-wider">
              {t.adminCrmTag}
            </span>
            <span className="bg-[#82C328] text-[#173F2A] text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
              {t.adminDemoBadge}
            </span>
          </div>

          <h1 className="text-2xl font-black tracking-tight mt-1">
            {t.adminTitle}
          </h1>
          <p className="text-xs text-emerald-200 mt-0.5">
            {t.adminSub}
          </p>
        </div>

        <button
          onClick={() => setIsVeitiaModalOpen(true)}
          className="bg-[#82C328] hover:bg-[#72b020] text-[#173F2A] font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all shrink-0 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" /> {t.adminTalkVeitia}
        </button>
      </div>

      {/* 1. SECTION: Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {metrics.map((m, idx) => {
          const IconComp = m.icon;
          return (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-3xl border border-emerald-900/10 shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{m.label}</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#173F2A] flex items-center justify-center">
                  <IconComp className="w-4 h-4 text-[#2F6B45]" />
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-lg sm:text-2xl font-black text-[#173F2A]">{m.value}</span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {m.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. SECTION: Analytics (Ventas + Productos más vendidos) */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Sales Chart (30 Days Visual Simulation) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-5 sm:p-6 border border-emerald-900/10 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-extrabold text-[#173F2A]">{t.adminSales30DaysTitle}</h2>
              <p className="text-xs text-gray-500">{t.adminSales30DaysSub}</p>
            </div>
            <span className="text-xs font-extrabold text-[#2F6B45] bg-emerald-50 px-3 py-1 rounded-full">
              {t.adminSalesVsLastMonth}
            </span>
          </div>

          {/* Visual SVG Bar Chart */}
          <div className="h-44 pt-4 flex items-end justify-between gap-1.5 border-b border-gray-100 pb-2">
            {[35, 42, 28, 55, 62, 48, 70, 85, 60, 78, 92, 80, 95, 110, 88].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                <div
                  style={{ height: `${val}%` }}
                  className="w-full bg-gradient-to-t from-[#173F2A] to-[#2F6B45] group-hover:to-[#82C328] rounded-t-sm transition-all"
                />
                <span className="text-[8px] text-gray-400 font-medium">
                  {language === 'pt' ? `dia ${i * 2 + 1}` : `día ${i * 2 + 1}`}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600 font-medium pt-1">
            <span>{language === 'pt' ? 'Dia 1' : 'Día 1'}: {formatPrice(12400)}</span>
            <span className="text-[#173F2A] font-extrabold">
              {language === 'pt' ? 'Pico Safra' : 'Pico Zafra'}: {formatPrice(32800)}
            </span>
            <span>{language === 'pt' ? 'Dia 30' : 'Día 30'}: {formatPrice(24100)}</span>
          </div>
        </div>

        {/* Top Products Ranking */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-900/10 shadow-2xs space-y-4">
          <div>
            <h2 className="text-base font-extrabold text-[#173F2A]">{t.adminTopProductsTitle}</h2>
            <p className="text-xs text-gray-500">{t.adminTopProductsSub}</p>
          </div>

          <div className="space-y-3">
            {topProducts.map((p, idx) => (
              <div key={idx} className="p-3 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-[#1D2922] truncate">{p.name}</span>
                  <span className="font-bold text-[#173F2A]">{p.share}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-500">
                  <span>{p.sales}</span>
                  <span className="font-extrabold text-emerald-800">{p.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECTION: Commercial Alerts */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-900/10 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <div>
            <h2 className="text-base font-extrabold text-[#173F2A]">{t.adminAlertsTitle}</h2>
            <p className="text-xs text-gray-500">{t.adminAlertsSub}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {COMMERCIAL_ALERTS.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-2xl border space-y-3 flex flex-col justify-between ${
                alert.severity === 'high'
                  ? 'bg-amber-50/90 border-amber-200'
                  : alert.severity === 'medium'
                  ? 'bg-blue-50/90 border-blue-200'
                  : 'bg-emerald-50/90 border-emerald-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-white shadow-2xs">
                    {alert.type}
                  </span>
                  <span className="text-base font-black text-[#173F2A]">
                    {alert.count} {language === 'pt' ? 'clientes' : 'clientes'}
                  </span>
                </div>

                <h3 className="font-extrabold text-xs text-[#1D2922] mt-2">{getAlertTitle(alert)}</h3>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">{getAlertDesc(alert)}</p>
                <div className="text-[10px] font-bold text-emerald-800 pt-1">
                  {t.adminAlertImpact} {getImpactPotential(alert)}
                </div>
              </div>

              <button
                onClick={() => setIsVeitiaModalOpen(true)}
                className="w-full bg-[#173F2A] hover:bg-[#2F6B45] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors shadow-2xs cursor-pointer"
              >
                {getAlertAction(alert)}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SECTION: Automations Manager */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-900/10 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#2F6B45]" />
          <div>
            <h2 className="text-base font-extrabold text-[#173F2A]">{t.adminAutomationsTitle}</h2>
            <p className="text-xs text-gray-500">
              {t.adminAutomationsSub}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {automations.map((auto) => {
            const autoName = language === 'pt'
              ? (auto.id === 'auto-recompra-raciones'
                ? 'Aviso Inteligente de Recompra de Ração'
                : auto.id === 'auto-carrito-abandonado'
                ? 'Recuperador de Carrinho Abandonado'
                : auto.id === 'auto-cliente-inactivo'
                ? 'Reativação de Cliente Inativo'
                : 'Alerta Sanitário de Safra / Vacinação')
              : auto.name;

            const autoTrigger = language === 'pt'
              ? (auto.id === 'auto-recompra-raciones'
                ? 'Passados 25 dias da compra de alimento > 10 kg'
                : auto.id === 'auto-carrito-abandonado'
                ? 'Carrinho inativo durante 2 horas'
                : auto.id === 'auto-cliente-inactivo'
                ? 'Sem compras nos últimos 60 dias'
                : 'Início da campanha de vacinação bovina')
              : auto.trigger;

            const autoAction = language === 'pt'
              ? (auto.id === 'auto-recompra-raciones'
                ? 'Enviar WhatsApp automático com link de re-pedido em 1 clique'
                : auto.id === 'auto-carrito-abandonado'
                ? 'Enviar mensagem de assistência com botão direto para WhatsApp'
                : auto.id === 'auto-cliente-inactivo'
                ? 'Enviar cupom de presente 10% OFF na próxima visita'
                : 'Notificar clientes classificados em Agro/Pecuária')
              : auto.action;

            return (
              <div
                key={auto.id}
                className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#2F6B45] uppercase">
                      {auto.type} • {auto.channel}
                    </span>

                    {/* Interactive Toggle Switch */}
                    <button
                      onClick={() => toggleAutomation(auto.id)}
                      className="flex items-center gap-1 cursor-pointer"
                      title={language === 'pt' ? 'Ativar/Desativar automação' : 'Activar/Desactivar automatización'}
                    >
                      {auto.active ? (
                        <ToggleRight className="w-7 h-7 text-[#82C328]" />
                      ) : (
                        <ToggleLeft className="w-7 h-7 text-gray-400" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-extrabold text-xs text-[#1D2922] mt-1">{autoName}</h3>
                  <p className="text-[11px] text-gray-600 mt-1">
                    <strong>{t.adminAutoTrigger}</strong> {autoTrigger}
                  </p>
                  <p className="text-[11px] text-gray-600">
                    <strong>{t.adminAutoAction}</strong> {autoAction}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-[10px] font-semibold text-gray-500">
                  <span>{t.adminAutoExecutions} {auto.triggerCountMonth}</span>
                  <span className="text-[#173F2A] font-extrabold">{t.adminAutoConversion} {auto.conversionRate}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. SECTION: Growth Opportunities Panel */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-900/10 shadow-2xs space-y-4">
        <h2 className="text-base font-extrabold text-[#173F2A]">
          {t.adminGrowthTitle}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-900/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xs text-[#173F2A]">{opp.name}</span>
                <span className="text-xs font-black text-[#2F6B45]">{opp.progress}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  style={{ width: `${opp.progress}%` }}
                  className="bg-[#2F6B45] h-full rounded-full"
                />
              </div>

              <p className="text-[10px] text-gray-600">{opp.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. SECTION: Commercial CTA for Veitia Studios */}
      <div className="bg-gradient-to-r from-[#173F2A] via-[#2F6B45] to-[#173F2A] text-white p-6 rounded-3xl shadow-xl space-y-4 border border-emerald-800">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#82C328] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> {t.adminVeitiaCtaTag}
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            {t.adminVeitiaCtaTitle}
          </h2>
          <p className="text-xs text-emerald-100 leading-relaxed">
            {t.adminVeitiaCtaDesc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-emerald-100 pt-1">
          {[
            language === 'pt' ? 'Integração com catálogo' : 'Integración con catálogo',
            language === 'pt' ? 'Canal do WhatsApp' : 'Canal de WhatsApp',
            language === 'pt' ? 'Base de Clientes' : 'Base de Clientes',
            language === 'pt' ? 'Gestão de Pedidos' : 'Gestión de Pedidos',
            language === 'pt' ? 'Motor de Recompra' : 'Motor de Recompra',
            language === 'pt' ? 'Automações' : 'Automatizaciones',
            language === 'pt' ? 'Assistente IA' : 'Asistente IA',
            language === 'pt' ? 'Programa Fidelidade' : 'Programa Fidelización',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1.5 rounded-xl backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#82C328] shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button
            onClick={() => setIsVeitiaModalOpen(true)}
            className="bg-[#82C328] hover:bg-[#72b020] text-[#173F2A] font-black px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <span>{t.adminTalkVeitia}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

