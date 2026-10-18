import React from 'react';
import { Star, ShoppingBag, Info, AlertTriangle, Heart } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    setSelectedProduct,
    formatPrice,
    currencyCode,
    language,
    t,
    toggleFavorite,
    isFavorite,
  } = useApp();

  const isFav = isFavorite(product.id);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProduct(product);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyDown}
      aria-label={`Ver detalles de ${product.name}`}
      className="bg-white rounded-2xl border border-emerald-900/10 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-[#82C328] focus-visible:outline-offset-2"
    >
      <div>
        {/* Image Container */}
        <div
          className="relative aspect-4/3 bg-gray-100 overflow-hidden cursor-pointer"
          onClick={() => setSelectedProduct(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-2.5 left-2.5 bg-[#173F2A] text-[#82C328] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs uppercase tracking-wider">
              {product.badge}
            </span>
          )}

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product.id);
            }}
            className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition-all cursor-pointer backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-[#82C328] ${
              isFav
                ? 'bg-rose-500 text-white shadow-md scale-105'
                : 'bg-white/80 hover:bg-white text-gray-600 hover:text-rose-500 shadow-2xs'
            }`}
            title={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
          </button>

          {product.isVeterinaryPrescription && (
            <span className="absolute bottom-2 left-2 bg-blue-900/85 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-xs">
              <AlertTriangle className="w-2.5 h-2.5 text-amber-300" /> Uso Vet
            </span>
          )}
        </div>

        {/* Info Content */}
        <div className="p-3.5 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <span className="text-[#2F6B45] font-semibold uppercase text-[10px] tracking-wide">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3
            onClick={() => setSelectedProduct(product)}
            className="text-sm font-bold text-[#1D2922] line-clamp-2 cursor-pointer hover:text-[#2F6B45] transition-colors leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="text-[11px] text-emerald-800 font-medium pt-0.5">
            {language === 'pt' ? 'Apresentação:' : 'Presentación:'}{' '}
            <span className="font-semibold">{product.unit}</span>
          </div>
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="p-3.5 pt-0 border-t border-gray-100 flex items-center justify-between gap-2 mt-2">
        <div>
          <span className="text-xs text-gray-400 font-medium block -mb-0.5">{t.modalPriceDemo}</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-extrabold text-[#173F2A]">
              {formatPrice(product.price, { showCode: false })}
            </span>
            <span className="text-[10px] text-gray-500 font-semibold">{currencyCode}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="p-2 rounded-xl border border-emerald-900/15 text-[#173F2A] hover:bg-emerald-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
            title={t.viewDetails}
            aria-label={`Ver detalles de ${product.name}`}
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="bg-[#173F2A] hover:bg-[#2F6B45] text-white p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingBag className="w-4 h-4 text-[#82C328]" />
            <span className="hidden sm:inline">{language === 'pt' ? 'Adicionar' : 'Agregar'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

