import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageSquare, CheckCircle, ArrowRight, Store, Truck, Sparkles, Loader2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EmptyState } from './EmptyState';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
    createOrder,
    isProcessingOrder,
    generateWhatsAppLink,
    setActiveTab,
    formatPrice,
    t,
  } = useApp();

  const [deliveryType, setDeliveryType] = useState<'Retiro en Tienda' | 'Envío a Domicilio'>('Retiro en Tienda');
  const [orderCreatedSuccess, setOrderCreatedSuccess] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCreateOrderDirect = async () => {
    try {
      const newOrder = await createOrder(deliveryType);
      setCreatedOrderId(newOrder.id);
      setOrderCreatedSuccess(true);
    } catch {
      // Ignored if processing in progress
    }
  };

  const handleWhatsAppCheckout = () => {
    window.open(generateWhatsAppLink(), '_blank');
  };

  const handleViewOrderHistory = () => {
    setOrderCreatedSuccess(false);
    setIsCartOpen(false);
    setActiveTab('pedidos');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl overflow-hidden border-l border-emerald-900/10">
        {/* Header */}
        <div className="bg-[#173F2A] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#82C328]" />
            <h2 className="font-extrabold text-base tracking-tight">{t.cartTitle}</h2>
            <span className="bg-[#82C328] text-[#173F2A] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              DEMO
            </span>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderCreatedSuccess(false);
            }}
            className="text-emerald-200 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {orderCreatedSuccess ? (
            <div className="py-12 px-4 text-center space-y-4 my-auto">
              <div className="w-16 h-16 bg-emerald-100 text-[#173F2A] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10 text-[#2F6B45]" />
              </div>

              <h3 className="text-xl font-extrabold text-[#173F2A]">
                {t.cartOrderSuccessTitle} #{createdOrderId}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                {t.cartOrderSuccessDesc}
              </p>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#2F6B45] hover:bg-[#173F2A] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#82C328]" /> {t.confirmWhatsApp}
                </button>

                <button
                  onClick={handleViewOrderHistory}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-[#173F2A] font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  {t.cartViewOrders} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <EmptyState
              icon={ShoppingBag}
              title={t.emptyCartTitle}
              description={t.emptyCartDesc}
              actionLabel={t.goToProducts}
              onAction={() => {
                setIsCartOpen(false);
                setActiveTab('comprar');
              }}
            />
          ) : (
            <>
              {/* Cart List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500 pb-1 border-b">
                  <span>{cartItems.length} {t.ordersQuantity}</span>
                  <button onClick={clearCart} className="text-red-600 hover:underline text-[11px] font-medium">
                    {t.cartClear}
                  </button>
                </div>

                {cartItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 bg-[#F7F6F1] rounded-2xl border border-emerald-900/10 shadow-2xs"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-xl shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1D2922] truncate">{product.name}</h4>
                      <p className="text-[10px] text-gray-500">{product.unit}</p>

                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-extrabold text-[#173F2A]">
                          {formatPrice(product.price * quantity)}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center bg-white rounded-lg border border-gray-300 px-1.5 py-0.5">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-1 text-gray-600 hover:text-black"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-2 text-[#173F2A]">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-1 text-gray-600 hover:text-black"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery Choice */}
              <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-900/10 space-y-2">
                <span className="text-xs font-bold text-[#173F2A] block uppercase tracking-wider text-[10px]">
                  {t.cartDeliveryMode}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('Retiro en Tienda')}
                    className={`p-2.5 rounded-xl border font-semibold flex items-center gap-2 transition-all text-left ${
                      deliveryType === 'Retiro en Tienda'
                        ? 'bg-[#173F2A] text-white border-[#173F2A] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <Store className="w-4 h-4 shrink-0 text-[#82C328]" />
                    <div>
                      <span className="block text-[11px]">{t.cartStorePickup}</span>
                      <span className="text-[9px] opacity-80 font-normal">Chuy ({t.cartFree})</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryType('Envío a Domicilio')}
                    className={`p-2.5 rounded-xl border font-semibold flex items-center gap-2 transition-all text-left ${
                      deliveryType === 'Envío a Domicilio'
                        ? 'bg-[#173F2A] text-white border-[#173F2A] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <Truck className="w-4 h-4 shrink-0 text-[#82C328]" />
                    <div>
                      <span className="block text-[11px]">{t.cartHomeDelivery}</span>
                      <span className="text-[9px] opacity-80 font-normal">{t.cartToCoordinate}</span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Controls */}
        {!orderCreatedSuccess && cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-white space-y-3 shadow-lg">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500">
                <span>{t.cartSubtotal}</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{t.cartDeliveryMode}</span>
                <span className="text-emerald-700 font-semibold">
                  {deliveryType === 'Retiro en Tienda' ? t.cartFree : t.cartToCoordinate}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-[#173F2A] pt-1 border-t">
                <span>{t.cartTotalEstimated}</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                disabled={isProcessingOrder}
                className="w-full bg-[#2F6B45] hover:bg-[#173F2A] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#82C328]"
              >
                <MessageSquare className="w-4 h-4 text-[#82C328]" />
                <span>{t.cartFinishWhatsApp}</span>
              </button>

              <button
                onClick={handleCreateOrderDirect}
                disabled={isProcessingOrder}
                className="w-full bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#82C328]"
              >
                {isProcessingOrder ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 text-[#82C328] animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#82C328]" />
                    <span>{t.cartRegisterOrder}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
