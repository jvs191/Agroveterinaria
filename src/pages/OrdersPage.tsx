import React from 'react';
import { Package, RotateCcw, Clock, CheckCircle2, Truck, Store, ArrowRight, MessageSquare, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EmptyState } from '../components/EmptyState';

export const OrdersPage: React.FC = () => {
  const { orders, repeatOrder, generateWhatsAppLink, setActiveTab, formatPrice, language, t } = useApp();

  return (
    <div className="space-y-5 pb-20 md:pb-8 animate-fade-in max-w-4xl mx-auto">
      {/* Title Header */}
      <div className="bg-white p-5 rounded-3xl border border-emerald-900/10 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F6B45] uppercase tracking-wider mb-1">
            <Package className="w-3.5 h-3.5 text-[#82C328]" /> {t.ordersHistoryTag}
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#173F2A] tracking-tight">
            {t.ordersTitle}
          </h1>
          <p className="text-xs text-gray-500">
            {t.ordersSub}
          </p>
        </div>

        <button
          onClick={() => setActiveTab('comprar')}
          className="bg-[#173F2A] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#2F6B45] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
        >
          {t.ordersNewOrderBtn}
        </button>
      </div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <EmptyState
          icon={ShoppingBag}
          title={language === 'pt' ? 'Nenhum pedido registrado' : 'Sin pedidos registrados'}
          description={
            language === 'pt'
              ? 'Você aún não fez nenhum pedido no catálogo DEMO de Campo Verde.'
              : 'Aún no realizaste ningún pedido en el catálogo DEMO de Campo Verde.'
          }
          actionLabel={t.goToProducts}
          onAction={() => setActiveTab('comprar')}
        />
      ) : (
        <div className="space-y-4">
        {orders.map((order) => {
          const isDelivered = order.status === 'Entregado';
          const statusText = isDelivered
            ? (language === 'pt' ? 'Entregue' : 'Entregado')
            : (language === 'pt' ? 'Em Processamento' : 'En Procesamiento');
          
          const deliveryTypeText = order.deliveryType === 'Retiro en Tienda'
            ? (language === 'pt' ? 'Retirada na Loja' : 'Retiro en Tienda')
            : (language === 'pt' ? 'Entrega em Domicílio' : 'Envío a Domicilio');

          const waMsg = language === 'pt'
            ? `Olá Campo Verde Chuí 👋 Consulto sobre o status do pedido *#${order.id}*.`
            : `Hola Campo Verde Chuy 👋 Consulto por el estado del pedido *#${order.id}*.`;

          return (
            <div
              key={order.id}
              className="bg-white rounded-3xl p-5 border border-emerald-900/10 shadow-2xs space-y-4 transition-all hover:border-emerald-900/20"
            >
              {/* Order Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs ${
                      isDelivered ? 'bg-emerald-100 text-[#173F2A]' : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {isDelivered ? <CheckCircle2 className="w-5 h-5 text-[#2F6B45]" /> : <Clock className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-extrabold text-[#173F2A]">
                        {language === 'pt' ? 'Pedido' : 'Pedido'} #{order.id}
                      </h3>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                          isDelivered
                            ? 'bg-emerald-100 text-[#173F2A]'
                            : 'bg-amber-100 text-amber-900 animate-pulse'
                        }`}
                      >
                        {statusText}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{order.date}</span>
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-xs text-gray-500 block">{t.ordersTotal}</span>
                  <span className="text-base font-black text-[#173F2A]">
                    {formatPrice(order.total)}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center justify-between p-2.5 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                      <div>
                        <h4 className="font-bold text-[#1D2922]">{item.productName}</h4>
                        <span className="text-gray-500">{t.ordersQuantity}: {item.quantity}</span>
                      </div>
                    </div>

                    <span className="font-extrabold text-[#173F2A]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Delivery Details & Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  {order.deliveryType === 'Retiro en Tienda' ? (
                    <Store className="w-4 h-4 text-[#2F6B45]" />
                  ) : (
                    <Truck className="w-4 h-4 text-[#2F6B45]" />
                  )}
                  <span>
                    <strong>{deliveryTypeText}:</strong> {order.address}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={generateWhatsAppLink(undefined, waMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial bg-emerald-50 text-[#173F2A] hover:bg-emerald-100 font-bold px-3 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#2F6B45]" /> WhatsApp
                  </a>

                  {order.canReorder && (
                    <button
                      onClick={() => repeatOrder(order)}
                      className="flex-1 sm:flex-initial bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#82C328]" />
                      <span>{language === 'pt' ? 'Repetir pedido' : 'Repetir pedido'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
};
