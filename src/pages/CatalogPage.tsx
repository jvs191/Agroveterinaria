import React, { useState } from 'react';
import { Search, SlidersHorizontal, PackageX, Sparkles, Mic, MicOff } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { useVoiceSearch } from '../hooks/useVoiceSearch';
import { EmptyState } from '../components/EmptyState';

export const CatalogPage: React.FC = () => {
  const { products, categories, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, language, t } = useApp();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const { isListening, startListening, stopListening } = useVoiceSearch({
    language,
    onResult: (transcript) => {
      setSearchTerm(transcript);
    },
  });

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  // Filter products by search term and selected category
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchTerm.trim() === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

  return (
    <div className="space-y-5 pb-20 md:pb-8 animate-fade-in">
      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-3xl border border-emerald-900/10 shadow-2xs">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F6B45] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#82C328]" /> {language === 'pt' ? 'Catálogo Digital Campo Verde' : 'Catálogo Digital Campo Verde'}
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#173F2A] tracking-tight">
            {language === 'pt' ? 'Nossos Produtos' : 'Nuestros Productos'}
          </h1>
          <p className="text-xs text-gray-500">
            {language === 'pt'
              ? `Mostrando ${filteredProducts.length} produto(s) no catálogo de demonstração Chuí`
              : `Mostrando ${filteredProducts.length} producto(s) en catálogo de demostración Chuy`}
          </p>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 text-xs">
          <SlidersHorizontal className="w-4 h-4 text-[#2F6B45]" />
          <span className="font-semibold text-gray-700">{language === 'pt' ? 'Ordenar por:' : 'Ordenar por:'}</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#F7F6F1] border border-emerald-900/15 rounded-xl px-3 py-1.5 font-bold text-[#173F2A] focus:outline-none focus-visible:outline-2 focus-visible:outline-[#82C328]"
            aria-label="Ordenar catálogo por"
          >
            <option value="featured">{language === 'pt' ? 'Destaques' : 'Destacados'}</option>
            <option value="price-asc">{language === 'pt' ? 'Menor Preço' : 'Menor Precio'}</option>
            <option value="price-desc">{language === 'pt' ? 'Maior Preço' : 'Mayor Precio'}</option>
            <option value="rating">{language === 'pt' ? 'Melhor Avaliação' : 'Mejor Calificación'}</option>
          </select>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder={isListening ? t.listening : t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full bg-white text-xs sm:text-sm rounded-2xl pl-11 pr-20 py-3.5 border transition-all ${
            isListening
              ? 'border-red-500 ring-2 ring-red-300 bg-red-50/20'
              : 'border-emerald-900/15 shadow-2xs focus:outline-none focus-visible:outline-2 focus-visible:outline-[#82C328]'
          }`}
          aria-label="Buscar productos"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-gray-400 hover:text-gray-700 font-bold bg-gray-100 hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}

          <button
            type="button"
            onClick={handleMicClick}
            title={t.voiceSearch}
            aria-label="Búsqueda por voz"
            className={`p-2 rounded-xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328] ${
              isListening
                ? 'bg-red-500 text-white animate-bounce shadow-md'
                : 'bg-emerald-50 text-[#173F2A] hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328] ${
            selectedCategory === 'all'
              ? 'bg-[#173F2A] text-white shadow-xs'
              : 'bg-white text-gray-600 border border-emerald-900/10 hover:bg-emerald-50'
          }`}
        >
          {t.categories.all} ({products.length})
        </button>

        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          const isSelected = selectedCategory === cat.id;
          const translatedCatName = (t.categories as any)[cat.id] || cat.name;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328] ${
                isSelected
                  ? 'bg-[#173F2A] text-[#82C328] shadow-xs ring-1 ring-[#82C328]'
                  : 'bg-white text-gray-700 border border-emerald-900/10 hover:bg-emerald-50'
              }`}
            >
              {translatedCatName} ({count})
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={PackageX}
          title={
            language === 'pt'
              ? 'Não encontramos produtos para sua busca'
              : 'No encontramos productos para tu búsqueda'
          }
          description={
            language === 'pt'
              ? 'Tente com termos como "ração", "NexGard", "Ivermectina" ou selecione outra categoria.'
              : 'Probá con términos como "ración", "NexGard", "Ivermectina" o seleccioná otra categoría.'
          }
          actionLabel={language === 'pt' ? 'Ver todos os produtos' : 'Ver todos los productos'}
          onAction={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }}
          secondaryActionLabel='Buscar "Biofresh"'
          onSecondaryAction={() => setSearchTerm('Biofresh')}
        />
      )}
    </div>
  );
};

