import React from 'react';
import { Home, ShoppingBag, Bot, Package, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ActiveTab } from '../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, cartCount, t } = useApp();

  const navItems: { id: ActiveTab; label: string; icon: React.ElementType; badge?: number; isSpecial?: boolean }[] = [
    { id: 'inicio', label: t.home, icon: Home },
    { id: 'comprar', label: t.catalog, icon: ShoppingBag, badge: cartCount },
    { id: 'asistente', label: t.assistant, icon: Bot, isSpecial: true },
    { id: 'pedidos', label: t.orders, icon: Package },
    { id: 'cuenta', label: t.account, icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-emerald-900/10 shadow-lg md:hidden">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.isSpecial) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center group relative -top-3"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all ${
                    isActive
                      ? 'bg-gradient-to-tr from-[#173F2A] to-[#2F6B45] text-[#82C328] ring-4 ring-emerald-100 scale-105'
                      : 'bg-[#173F2A] text-white hover:bg-[#2F6B45]'
                  }`}
                >
                  <Icon className="w-6 h-6 animate-pulse-subtle" />
                </div>
                <span className={`text-[10px] font-bold mt-0.5 ${isActive ? 'text-[#173F2A]' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 relative transition-colors ${
                isActive ? 'text-[#173F2A] font-bold' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {item.badge && item.badge > 0 ? (
                  <span className="absolute -top-1.5 -right-2 bg-[#82C328] text-[#173F2A] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 bg-[#2F6B45] rounded-full absolute bottom-0" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
