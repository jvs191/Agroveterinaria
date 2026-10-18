import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageSquare, Truck, Store, ShieldAlert, Plus, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart, generateWhatsAppLink, formatPrice, currencyCode, language, t } = useApp();
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const product = selectedProduct;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setSelectedProduct(null);
  };

  const handleWhatsAppConsult = () => {
    const priceFormatted = formatPrice(product.price);
    const msg = language === 'pt'
      ? `Olá Campo Verde Chuí 👋\nQuero fazer uma consulta sobre o produto:\n*${product.name}*\nPreço DEMO: ${priceFormatted} (${product.unit})\nPossuem estoque para retirada ou envio?`
      : `Hola Campo Verde Chuy 👋\nQuiero hacer una consulta sobre el producto:\n*${product.name}*\nPrecio DEMO: ${priceFormatted} (${product.unit})\n¿Tienen stock para retiro o envío?`;
    window.open(generateWhatsAppLink(undefined, msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-900/10 my-auto">
        {/* Modal Header */}
        <div className="relative aspect-16/10 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#173F2A] text-[#82C328] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div>
            <div className="flex items-center justify-between text-xs text-emerald-800 font-semibold uppercase tracking-wider">
              <span>{product.categoryName}</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <h2 className="text-xl font-extrabold text-[#1D2922] mt-1 leading-tight">
              {product.name}
            </h2>
          </div>

          {/* Pricing */}
          <div className="bg-[#F7F6F1] p-3.5 rounded-2xl flex items-center justify-between border border-emerald-900/10">
            <div>
              <span className="text-xs text-gray-500 font-medium block">{t.modalPriceDemo}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#173F2A]">
                  {formatPrice(product.price, { showCode: false })}
                </span>
                <span className="text-xs text-gray-500 font-bold">{currencyCode}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through font-medium">
                    {formatPrice(product.originalPrice, { showCode: false })}
                  </span>
                )}
              </div>
            </div>

            <div className="text-right text-xs">
              <span className="text-emerald-800 font-semibold block">{product.unit}</span>
              <span className="text-emerald-600 font-medium">{t.modalAvailableStock}</span>
            </div>
          </div>

          {/* Veterinary Notice if applicable */}
          {product.isVeterinaryPrescription && (
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{t.modalVetNoticeTag}</p>
                <p className="mt-0.5 text-amber-800">
                  {product.dosageInfo || t.modalVetNoticeDefault}
                </p>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
            <h4 className="font-bold text-[#173F2A] uppercase text-[11px] tracking-wider">
              {t.modalDetailsTitle}
            </h4>
            <p>{product.fullDescription || product.description}</p>
            {product.recommendedFor && (
              <p className="pt-1">
                <strong>{t.modalRecommendedFor}</strong> {product.recommendedFor}
              </p>
            )}
          </div>

          {/* Delivery Options */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-2">
            <div className="border border-emerald-900/10 rounded-xl p-2.5 flex items-center gap-2 bg-emerald-50/50">
              <Store className="w-4 h-4 text-[#2F6B45]" />
              <div>
                <span className="font-bold block text-[#173F2A]">{t.cartStorePickup}</span>
                <span className="text-[10px] text-gray-500">Chuy / Chuí ({t.cartFree})</span>
              </div>
            </div>

            <div className="border border-emerald-900/10 rounded-xl p-2.5 flex items-center gap-2 bg-emerald-50/50">
              <Truck className="w-4 h-4 text-[#2F6B45]" />
              <div>
                <span className="font-bold block text-[#173F2A]">{t.cartHomeDelivery}</span>
                <span className="text-[10px] text-gray-500">{t.cartToCoordinate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center gap-3">
          {/* Quantity selector */}
          <div className="flex items-center justify-between w-full sm:w-auto bg-white border border-gray-300 rounded-xl px-3 py-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-gray-600 hover:text-black p-1"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-sm px-3 text-[#173F2A]">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-gray-600 hover:text-black p-1"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full">
            <button
              onClick={handleWhatsAppConsult}
              className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </button>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <ShoppingBag className="w-4 h-4 text-[#82C328]" /> {t.addToCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
