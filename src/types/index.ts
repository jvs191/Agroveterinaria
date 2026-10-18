export type Language = 'es' | 'pt';

export type CategoryId = 'mascotas' | 'agro' | 'equinos' | 'jardineria' | 'herramientas' | 'farmacia';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  description: string;
  fullDescription?: string;
  price: number;
  originalPrice?: number;
  currency: 'UYU' | 'BRL' | '$';
  unit: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  isVeterinaryPrescription?: boolean;
  recommendedFor?: string;
  dosageInfo?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

export type OrderStatus = 'Pendiente' | 'Preparando' | 'En Camino' | 'Entregado' | 'Cancelado';

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  currency: string;
  status: OrderStatus;
  deliveryType: 'Retiro en Tienda' | 'Envío a Domicilio';
  address?: string;
  whatsAppSent?: boolean;
  canReorder: boolean;
}

export interface Reminder {
  id: string;
  title: string;
  category: string;
  productName: string;
  productId: string;
  dueDate: string;
  daysRemaining: number;
  status: 'Próximo' | 'Urgente' | 'Al Día';
  actionText: string;
  image: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiryDate: string;
  category: string;
  pointsCost: number;
  isUnlocked: boolean;
  iconName: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  tier: 'Inicial' | 'Frecuente' | 'VIP Agro';
  points: number;
  totalOrders: number;
  lastPurchaseDate: string;
  avatar?: string;
}

export interface Automation {
  id: string;
  name: string;
  type: 'Recompra' | 'Carrito Abandonado' | 'Cliente Inactivo' | 'Promoción' | 'Recordatorio Sanitario';
  trigger: string;
  action: string;
  channel: 'WhatsApp' | 'Notificación Push' | 'SMS';
  active: boolean;
  triggerCountMonth: number;
  conversionRate: string;
}

export interface CommercialAlert {
  id: string;
  type: 'recompra' | 'carrito' | 'inactivo' | 'stock';
  title: string;
  count: number;
  actionLabel: string;
  description: string;
  impactPotential: string;
  severity: 'high' | 'medium' | 'info';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedProducts?: Product[];
  actionButtons?: { label: string; action: string; categoryId?: CategoryId }[];
  isWarning?: boolean;
}

export type ActiveTab = 'inicio' | 'comprar' | 'asistente' | 'pedidos' | 'cuenta' | 'admin' | 'tienda' | 'fidelizacion' | 'recompra';
