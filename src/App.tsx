import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DemoBadge } from './components/DemoBadge';
import { SplashScreen } from './components/SplashScreen';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { VeitiaModal } from './components/VeitiaModal';

import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AssistantPage } from './pages/AssistantPage';
import { OrdersPage } from './pages/OrdersPage';
import { RepurchasePage } from './pages/RepurchasePage';
import { AccountPage } from './pages/AccountPage';
import { StorePage } from './pages/StorePage';
import { AdminPage } from './pages/AdminPage';

const MainContent: React.FC = () => {
  const { activeTab, showSplash, dismissSplash } = useApp();

  return (
    <div className="min-h-screen bg-[#F7F6F1] flex flex-col font-sans selection:bg-[#82C328] selection:text-[#173F2A]">
      {/* Animated Splash Screen on initial load */}
      {showSplash && <SplashScreen onDismiss={dismissSplash} />}

      {/* Top Commercial Demo Badge Banner */}
      <DemoBadge />

      {/* Main Header */}
      <Header />

      {/* Main Screen Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        {activeTab === 'inicio' && <HomePage />}
        {activeTab === 'comprar' && <CatalogPage />}
        {activeTab === 'asistente' && <AssistantPage />}
        {activeTab === 'pedidos' && <OrdersPage />}
        {(activeTab === 'recompra' || activeTab === 'fidelizacion') && <RepurchasePage />}
        {activeTab === 'cuenta' && <AccountPage />}
        {activeTab === 'tienda' && <StorePage />}
        {activeTab === 'admin' && <AdminPage />}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <VeitiaModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
