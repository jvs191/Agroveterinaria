import { Order } from '../types';

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'CV-1024',
    date: 'Hace 28 días (13 Jul)',
    items: [
      {
        productId: 'prod-biofresh-15',
        productName: 'Biofresh Adultos Razas Medianas y Grandes 15 kg',
        price: 3890,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
      },
    ],
    total: 3890,
    currency: 'UYU',
    status: 'Entregado',
    deliveryType: 'Envío a Domicilio',
    address: 'Av. Brasil 450, Chuy',
    whatsAppSent: true,
    canReorder: true,
  },
  {
    id: 'CV-1019',
    date: 'Hace 3 días (7 Ago)',
    items: [
      {
        productId: 'prod-nexgard-15-30',
        productName: 'NexGard Spectra 15.1 – 30 kg',
        price: 1850,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
      },
      {
        productId: 'prod-fertilizante-organico',
        productName: 'Fertilizante Orgánico Folíar Huerto 5 L',
        price: 680,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
      },
    ],
    total: 2530,
    currency: 'UYU',
    status: 'Preparando',
    deliveryType: 'Retiro en Tienda',
    address: 'Sucursal Chuy / Chuí - Sucursal Central',
    whatsAppSent: true,
    canReorder: false,
  },
];
