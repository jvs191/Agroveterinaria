import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  ActiveTab,
  Automation,
  CartItem,
  Category,
  CategoryId,
  Customer,
  Language,
  Order,
  Product,
  Reminder,
} from '../types';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { INITIAL_ORDERS } from '../data/orders';
import { INITIAL_REMINDERS } from '../data/reminders';
import { INITIAL_AUTOMATIONS, CURRENT_CUSTOMER } from '../data/automations';
import { TRANSLATIONS, Translations } from '../data/translations';
import { storage } from '../utils/storage';
import { hapticFeedback } from '../utils/haptics';
import { ToastContainer, ToastMessage, ToastType } from '../components/Toast';

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  currencyCode: 'UYU' | 'BRL';
  currencySymbol: '$' | 'R$';
  formatPrice: (amountInUYU: number, options?: { showCode?: boolean; showSymbol?: boolean }) => string;
  convertPrice: (amountInUYU: number) => number;
  isOffline: boolean;
  categories: Category[];
  products: Product[];
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: CategoryId | 'all';
  setSelectedCategory: (cat: CategoryId | 'all') => void;
  orders: Order[];
  createOrder: (deliveryType: 'Retiro en Tienda' | 'Envío a Domicilio', address?: string) => Promise<Order>;
  isProcessingOrder: boolean;
  repeatOrder: (order: Order) => void;
  reminders: Reminder[];
  automations: Automation[];
  toggleAutomation: (id: string) => void;
  customer: Customer;
  isVeitiaModalOpen: boolean;
  setIsVeitiaModalOpen: (open: boolean) => void;
  whatsAppNumber: string;
  generateWhatsAppLink: (customItems?: CartItem[], customMessage?: string) => string;
  showSplash: boolean;
  dismissSplash: () => void;
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  addToast: (title: string, message?: string, type?: ToastType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const WHATSAPP_NUMBER = '59899123456';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [language, setLanguageState] = useState<Language>(() => {
    return storage.get<Language>('campo_verde_lang', 'es');
  });
  const [isOffline, setIsOffline] = useState<boolean>(
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  );

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    storage.set('campo_verde_lang', lang);
  };

  const t = TRANSLATIONS[language];

  const currencyCode: 'UYU' | 'BRL' = language === 'es' ? 'UYU' : 'BRL';
  const currencySymbol: '$' | 'R$' = language === 'es' ? '$' : 'R$';

  const convertPrice = (amountInUYU: number): number => {
    if (language === 'es') return amountInUYU;
    return Number((amountInUYU * 0.13).toFixed(2));
  };

  const formatPrice = (
    amountInUYU: number,
    options?: { showCode?: boolean; showSymbol?: boolean }
  ): string => {
    const showCode = options?.showCode ?? true;
    const showSymbol = options?.showSymbol ?? true;

    if (language === 'es') {
      const formatted = Math.round(amountInUYU).toLocaleString('es-UY');
      let res = '';
      if (showSymbol) res += '$ ';
      res += formatted;
      if (showCode) res += ' UYU';
      return res;
    } else {
      const brl = amountInUYU * 0.13;
      const formatted = brl.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      let res = '';
      if (showSymbol) res += 'R$ ';
      res += formatted;
      if (showCode) res += ' BRL';
      return res;
    }
  };

  // Persisted Cart Items
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const defaultCart: CartItem[] = [{ product: PRODUCTS[1], quantity: 1 }];
    return storage.get<CartItem[]>('campo_verde_cart', defaultCart);
  });

  useEffect(() => {
    storage.set('campo_verde_cart', cartItems);
  }, [cartItems]);

  // Persisted Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    return storage.get<string[]>('campo_verde_favorites', ['prod-biofresh-15']);
  });

  useEffect(() => {
    storage.set('campo_verde_favorites', favorites);
  }, [favorites]);

  // Persisted Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    return storage.get<Order[]>('campo_verde_orders', INITIAL_ORDERS);
  });

  useEffect(() => {
    storage.set('campo_verde_orders', orders);
  }, [orders]);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((title: string, message?: string, type: ToastType = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    setToasts((prev) => [...prev.slice(-2), { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [reminders, setReminders] = useState<Reminder[]>(INITIAL_REMINDERS);
  const [automations, setAutomations] = useState<Automation[]>(INITIAL_AUTOMATIONS);
  const [customer, setCustomer] = useState<Customer>(CURRENT_CUSTOMER);
  const [isVeitiaModalOpen, setIsVeitiaModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const dismissSplash = () => setShowSplash(false);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(productId);
      const prod = PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        hapticFeedback('light');
        addToast(
          language === 'pt' ? 'Removido dos favoritos' : 'Quitado de favoritos',
          prod?.name,
          'remove'
        );
        return prev.filter((id) => id !== productId);
      } else {
        hapticFeedback('success');
        addToast(
          language === 'pt' ? 'Adicionado aos favoritos' : 'Agregado a favoritos',
          prod?.name,
          'favorite'
        );
        return [...prev, productId];
      }
    });
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  const addToCart = (product: Product, quantity = 1) => {
    hapticFeedback('medium');
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    addToast(
      language === 'pt' ? 'Adicionado ao carrinho' : 'Agregado al carrito',
      `${product.name} (x${quantity})`,
      'success'
    );
  };

  const removeFromCart = (productId: string) => {
    hapticFeedback('light');
    const item = cartItems.find((i) => i.product.id === productId);
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
    addToast(
      language === 'pt' ? 'Produto removido' : 'Producto eliminado',
      item?.product.name,
      'remove'
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    hapticFeedback('light');
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const createOrder = async (
    deliveryType: 'Retiro en Tienda' | 'Envío a Domicilio',
    address?: string
  ): Promise<Order> => {
    if (isProcessingOrder) return Promise.reject(new Error('Processing in progress'));
    setIsProcessingOrder(true);

    // Simulate short processing delay to demonstrate double-action prevention
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newOrder: Order = {
      id: `CV-${Math.floor(1000 + Math.random() * 9000)}`,
      date: language === 'pt' ? 'Hoje' : 'Hoy',
      items: cartItems.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image,
      })),
      total: cartTotal,
      currency: 'UYU',
      status: 'Preparando',
      deliveryType,
      address:
        address ||
        (deliveryType === 'Retiro en Tienda' ? 'Sucursal Chuy - Avenida Brasil' : customer.city),
      whatsAppSent: true,
      canReorder: true,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setCustomer((prev) => ({
      ...prev,
      points: prev.points + Math.floor(cartTotal / 100),
      totalOrders: prev.totalOrders + 1,
    }));

    setIsProcessingOrder(false);
    hapticFeedback('success');
    addToast(
      language === 'pt' ? 'Pedido DEMO realizado!' : '¡Pedido DEMO realizado!',
      `${newOrder.id} • ${newOrder.items.length} ${language === 'pt' ? 'itens' : 'items'}`,
      'order'
    );

    return newOrder;
  };

  const repeatOrder = (order: Order) => {
    hapticFeedback('medium');
    order.items.forEach((item) => {
      const prod = PRODUCTS.find((p) => p.id === item.productId) || {
        id: item.productId,
        name: item.productName,
        category: 'mascotas',
        categoryName: 'Mascotas',
        description: 'Producto repetido desde historial',
        price: item.price,
        currency: 'UYU' as const,
        unit: 'Unidad',
        image: item.image,
        rating: 5,
        reviewCount: 1,
        inStock: true,
      };
      addToCart(prod, item.quantity);
    });
    setIsCartOpen(true);
  };

  const toggleAutomation = (id: string) => {
    hapticFeedback('light');
    setAutomations((prev) =>
      prev.map((auto) => (auto.id === id ? { ...auto, active: !auto.active } : auto))
    );
  };

  const generateWhatsAppLink = (customItems?: CartItem[], customMessage?: string) => {
    if (customMessage) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
    }

    const itemsToUse = customItems || cartItems;
    if (itemsToUse.length === 0) {
      const defaultText =
        language === 'pt'
          ? `Olá Campo Verde Chuí 👋\nGostaria de fazer uma consulta sobre seus produtos e serviços.`
          : `Hola Campo Verde Chuy 👋\nQuisiera realizar una consulta sobre sus productos y servicios.`;
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
    }

    const itemDetails = itemsToUse
      .map(
        (i) =>
          `• ${i.product.name} (x${i.quantity}) - ${formatPrice(i.product.price * i.quantity)}`
      )
      .join('\n');

    const total = itemsToUse.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

    const message =
      language === 'pt'
        ? `Olá Campo Verde 👋\n\nQuero fazer o seguinte pedido DEMO:\n\n${itemDetails}\n\n*Total Estimado:* ${formatPrice(
            total
          )}\n\nPoderiam me confirmar disponibilidade e retirada/envio no Chuí?`
        : `Hola Campo Verde 👋\n\nQuiero realizar el siguiente pedido DEMO:\n\n${itemDetails}\n\n*Total Estimado:* ${formatPrice(
            total
          )}\n\n¿Podrían confirmarme disponibilidad y retiro/envío en Chuy?`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        language,
        setLanguage,
        t,
        currencyCode,
        currencySymbol,
        formatPrice,
        convertPrice,
        isOffline,
        categories: CATEGORIES,
        products: PRODUCTS,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        orders,
        createOrder,
        isProcessingOrder,
        repeatOrder,
        reminders,
        automations,
        toggleAutomation,
        customer,
        isVeitiaModalOpen,
        setIsVeitiaModalOpen,
        whatsAppNumber: WHATSAPP_NUMBER,
        generateWhatsAppLink,
        showSplash,
        dismissSplash,
        favorites,
        toggleFavorite,
        isFavorite,
        addToast,
      }}
    >
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

