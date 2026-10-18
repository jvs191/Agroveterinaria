import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, ShieldCheck, Store, Truck, Stethoscope } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StorePage: React.FC = () => {
  const { generateWhatsAppLink, t } = useApp();

  return (
    <div className="space-y-6 pb-20 md:pb-8 animate-fade-in max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="bg-[#173F2A] text-white p-6 rounded-3xl shadow-md border border-emerald-900/30">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#82C328] uppercase tracking-wider mb-1">
          <MapPin className="w-3.5 h-3.5" /> {t.storeMapTag}
        </div>
        <h1 className="text-2xl font-black tracking-tight">{t.storeTitle}</h1>
        <p className="text-emerald-200 text-xs mt-1">
          {t.storeSub}
        </p>
      </div>

      {/* Main Info & Visual Map Card */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Visual Map Simulation */}
        <div className="bg-white rounded-3xl overflow-hidden border border-emerald-900/10 shadow-2xs flex flex-col justify-between">
          <div className="relative h-64 bg-emerald-900/10 flex items-center justify-center p-4">
            {/* Simulated Map Visual */}
            <div className="absolute inset-0 bg-[radial-gradient(#2F6B45_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

            <div className="relative z-10 text-center bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-900/20 shadow-lg max-w-xs space-y-2">
              <div className="w-10 h-10 bg-[#173F2A] text-[#82C328] rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-extrabold text-sm text-[#173F2A]">Agroveterinaria Campo Verde</h3>
              <p className="text-xs text-gray-600 font-medium">Avenida Brasil • Chuy / Chuí</p>
              <span className="inline-block bg-[#82C328] text-[#173F2A] font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase">
                Uruguay - Brasil
              </span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">{t.storeCoordinates}</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#82C328]" /> {t.howToGet}
            </a>
          </div>
        </div>

        {/* Store Details */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-900/10 shadow-2xs space-y-5">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#173F2A] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#2F6B45]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.storeAddressLabel}</h4>
                <p className="text-sm font-extrabold text-[#1D2922]">Avenida Brasil 450, Chuy</p>
                <p className="text-xs text-gray-500">Rocha, Uruguay / Chuí, RS, Brasil</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#173F2A] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#2F6B45]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.storeHoursLabel}</h4>
                <p className="text-sm font-extrabold text-[#1D2922]">{t.storeHoursVal}</p>
                <p className="text-xs text-gray-500">{t.storeHoursSun}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#173F2A] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#2F6B45]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.storeContactLabel}</h4>
                <p className="text-sm font-extrabold text-[#1D2922]">+598 99 123 456</p>
                <p className="text-xs text-gray-500">Atención telefónica y WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-2">
            <a
              href={generateWhatsAppLink(undefined, 'Hola Campo Verde Chuy 👋 Quisiera consultar horarios o servicios en la tienda física.')}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#2F6B45] hover:bg-[#173F2A] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 text-[#82C328]" /> {t.consultWhatsApp}
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white rounded-3xl p-6 border border-emerald-900/10 shadow-2xs space-y-4">
        <h3 className="text-base font-extrabold text-[#173F2A]">{t.storeServicesTitle}</h3>

        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-2">
            <Store className="w-6 h-6 text-[#2F6B45]" />
            <h4 className="font-extrabold text-xs text-[#1D2922]">{t.storeService1Title}</h4>
            <p className="text-[11px] text-gray-500">{t.storeService1Desc}</p>
          </div>

          <div className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-2">
            <Stethoscope className="w-6 h-6 text-[#2F6B45]" />
            <h4 className="font-extrabold text-xs text-[#1D2922]">{t.storeService2Title}</h4>
            <p className="text-[11px] text-gray-500">{t.storeService2Desc}</p>
          </div>

          <div className="p-4 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 space-y-2">
            <Truck className="w-6 h-6 text-[#2F6B45]" />
            <h4 className="font-extrabold text-xs text-[#1D2922]">{t.storeService3Title}</h4>
            <p className="text-[11px] text-gray-500">{t.storeService3Desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
