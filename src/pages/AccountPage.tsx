import React from 'react';
import { User, Package, RotateCcw, Award, Bell, MapPin, ShieldCheck, Settings, LogOut, ChevronRight, Phone, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AccountPage: React.FC = () => {
  const { customer, setActiveTab, setIsVeitiaModalOpen, t } = useApp();

  const menuSections = [
    {
      title: t.accountActivityTitle,
      items: [
        { label: t.ordersTitle, icon: Package, tab: 'pedidos', description: t.ordersSub },
        { label: t.repeatOrder, icon: RotateCcw, tab: 'recompra', description: t.repurchaseFastSub },
        { label: t.repurchaseBenefitsTitle, icon: Award, tab: 'fidelizacion', description: `${customer.points} ${t.accountBenefitsDesc}` },
        { label: t.repurchaseRemindersTitle, icon: Bell, tab: 'recompra', description: t.accountRemindersDesc },
      ],
    },
    {
      title: 'Agroveterinaria Campo Verde',
      items: [
        { label: t.accountPhysicalStoreTitle, icon: MapPin, tab: 'tienda', description: 'Avenida Brasil • Horarios y mapa' },
        { label: t.adminPanel, icon: ShieldCheck, tab: 'admin', description: t.accountAdminDesc },
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-8 animate-fade-in max-w-3xl mx-auto">
      {/* Profile Header */}
      <div className="bg-[#173F2A] text-white p-6 rounded-3xl shadow-md border border-emerald-900/30 flex items-center gap-4">
        <img
          src={customer.avatar}
          alt={customer.name}
          className="w-16 h-16 rounded-2xl object-cover border-2 border-[#82C328] shadow-md"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black">{customer.name}</h1>
            <span className="bg-[#82C328] text-[#173F2A] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
              {customer.tier}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-200 mt-1">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> {customer.phone}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {customer.city}
            </span>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="space-y-4">
        {menuSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-4 border border-emerald-900/10 shadow-2xs space-y-2">
            <h3 className="text-xs font-black text-[#2F6B45] uppercase tracking-wider px-2 pt-1">
              {section.title}
            </h3>

            <div className="space-y-1">
              {section.items.map((item, itemIdx) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={itemIdx}
                    onClick={() => setActiveTab(item.tab as any)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#F7F6F1] transition-colors group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#173F2A] group-hover:bg-[#173F2A] group-hover:text-[#82C328] flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1D2922] group-hover:text-[#173F2A]">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-gray-500">{item.description}</p>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#173F2A] transition-transform group-hover:translate-x-0.5" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Commercial Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-[#173F2A] text-white p-5 rounded-3xl shadow-md border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <h4 className="text-sm font-extrabold text-[#82C328]">{t.accountVeitiaTitle}</h4>
          <p className="text-xs text-emerald-200 mt-0.5">
            {t.accountVeitiaDesc}
          </p>
        </div>

        <button
          onClick={() => setIsVeitiaModalOpen(true)}
          className="bg-[#82C328] hover:bg-[#72b020] text-[#173F2A] font-extrabold text-xs px-4 py-2.5 rounded-xl shrink-0 shadow-xs"
        >
          {t.accountVeitiaBtn}
        </button>
      </div>
    </div>
  );
};
