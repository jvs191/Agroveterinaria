import { Language } from '../types';

export interface Translations {
  // Navigation & Header
  searchPlaceholder: string;
  listening: string;
  voiceSearch: string;
  speechNotSupported: string;
  speechError: string;
  adminPanel: string;
  cart: string;
  borderLocation: string;
  countrySub: string;
  home: string;
  catalog: string;
  assistant: string;
  orders: string;
  repurchase: string;
  account: string;
  store: string;
  offlineTitle: string;
  offlineDesc: string;
  welcomeTitle: string;
  welcomeSubtitle: string;
  languageName: string;

  // Categories
  categories: {
    all: string;
    mascotas: string;
    agro: string;
    equinos: string;
    jardineria: string;
    herramientas: string;
    farmacia: string;
    viewCatalog: string;
    prodsCount: string;
  };

  // Common Actions
  addToCart: string;
  consultWhatsApp: string;
  viewDetails: string;
  repeatOrder: string;
  repeatOrderNow: string;
  buyNow: string;
  needHelp: string;
  seeAll: string;
  howToGet: string;
  stop: string;
  close: string;
  confirmWhatsApp: string;
  emptyCartTitle: string;
  emptyCartDesc: string;
  goToProducts: string;

  // Home Page
  homeHeroTag: string;
  homeHeroTitle: string;
  homeHeroDesc: string;
  homeSmartReminderTag: string;
  homeSmartReminderTitle: string;
  homeSmartReminderDesc: string;
  homeMainCategories: string;
  homeAssistantTitle: string;
  homeAssistantSub: string;
  homeAssistantBtn: string;
  homeFeaturedTitle: string;
  homeFeaturedSub: string;
  homeStoreTag: string;
  homeStoreTitle: string;
  homeStoreAddress: string;

  // Assistant Page
  aiTitle: string;
  aiSub: string;
  aiRestart: string;
  aiVetAlertTag: string;
  aiVetAlertDesc: string;
  aiGreeting: string;
  aiCatPet: string;
  aiCatCattle: string;
  aiCatHorse: string;
  aiCatField: string;
  aiCatOrder: string;
  aiSuggestionsTag: string;
  aiTyping: string;
  aiInputPlaceholder: string;

  // Orders Page
  ordersTitle: string;
  ordersSub: string;
  ordersHistoryTag: string;
  ordersNewOrderBtn: string;
  ordersDelivered: string;
  ordersInTransit: string;
  ordersTotal: string;
  ordersQuantity: string;

  // Repurchase & Loyalty Page
  repurchaseTitle: string;
  repurchaseSub: string;
  repurchaseFastTitle: string;
  repurchaseFastSub: string;
  repurchaseRemindersTitle: string;
  repurchaseRemindersSub: string;
  repurchaseLoyaltyTag: string;
  repurchaseLoyaltySub: string;
  repurchasePoints: string;
  repurchaseBenefitsTitle: string;
  repurchaseCode: string;
  repurchaseUseNow: string;
  repurchaseOffersTitle: string;

  // Account Page
  accountActivityTitle: string;
  accountBenefitsDesc: string;
  accountRemindersDesc: string;
  accountPhysicalStoreTitle: string;
  accountAdminDesc: string;
  accountVeitiaTitle: string;
  accountVeitiaDesc: string;
  accountVeitiaBtn: string;

  // Store Page
  storeTitle: string;
  storeSub: string;
  storeMapTag: string;
  storeCoordinates: string;
  storeAddressLabel: string;
  storeHoursLabel: string;
  storeHoursVal: string;
  storeHoursSun: string;
  storeContactLabel: string;
  storeServicesTitle: string;
  storeService1Title: string;
  storeService1Desc: string;
  storeService2Title: string;
  storeService2Desc: string;
  storeService3Title: string;
  storeService3Desc: string;

  // Cart & Modals
  cartTitle: string;
  cartOrderSuccessTitle: string;
  cartOrderSuccessDesc: string;
  cartViewOrders: string;
  cartClear: string;
  cartDeliveryMode: string;
  cartStorePickup: string;
  cartHomeDelivery: string;
  cartFree: string;
  cartToCoordinate: string;
  cartSubtotal: string;
  cartTotalEstimated: string;
  cartFinishWhatsApp: string;
  cartRegisterOrder: string;

  // Product Detail Modal
  modalPriceDemo: string;
  modalAvailableStock: string;
  modalVetNoticeTag: string;
  modalVetNoticeDefault: string;
  modalDetailsTitle: string;
  modalRecommendedFor: string;

  // Commercial Admin Panel
  adminTitle: string;
  adminSub: string;
  adminCrmTag: string;
  adminDemoBadge: string;
  adminTalkVeitia: string;
  adminMetricSalesMonth: string;
  adminMetricOrdersProcessed: string;
  adminMetricRepurchaseRate: string;
  adminMetricWhatsappLeads: string;
  adminSales30DaysTitle: string;
  adminSales30DaysSub: string;
  adminSalesVsLastMonth: string;
  adminTopProductsTitle: string;
  adminTopProductsSub: string;
  adminAlertsTitle: string;
  adminAlertsSub: string;
  adminAlertImpact: string;
  adminAutomationsTitle: string;
  adminAutomationsSub: string;
  adminAutoTrigger: string;
  adminAutoAction: string;
  adminAutoExecutions: string;
  adminAutoConversion: string;
  adminGrowthTitle: string;
  adminVeitiaCtaTag: string;
  adminVeitiaCtaTitle: string;
  adminVeitiaCtaDesc: string;

  // Veitia Modal & Demo Badge & Splash
  demoBadgeText: string;
  demoBadgeDrivenBy: string;
  veitiaProposalTag: string;
  veitiaTitle: string;
  veitiaDesc: string;
  veitiaModulesTitle: string;
  veitiaCommitmentTag: string;
  veitiaCommitmentDesc: string;
  splashTagline: string;
  splashTag: string;
  splashPressToContinue: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  es: {
    // Navigation & Header
    searchPlaceholder: '¿Qué estás buscando? (Ej: Biofresh, NexGard)...',
    listening: 'Escuchando tu voz...',
    voiceSearch: 'Búsqueda por voz',
    speechNotSupported: 'Búsqueda por voz no soportada en este navegador',
    speechError: 'No se reconoció la voz. Intenta de nuevo.',
    adminPanel: 'Panel Comercial',
    cart: 'Carrito',
    borderLocation: 'Chuy / Chuí',
    countrySub: 'Frontera Uruguay - Brasil',
    home: 'Inicio',
    catalog: 'Comprar',
    assistant: 'Asistente IA',
    orders: 'Mis Pedidos',
    repurchase: 'Recompra',
    account: 'Mi Cuenta',
    store: 'Tienda Física',
    offlineTitle: 'Modo Sin Conexión (Offline)',
    offlineDesc: 'Interfaz cargada desde la caché del Service Worker PWA.',
    welcomeTitle: 'Agroveterinaria Campo Verde',
    welcomeSubtitle: 'Soluciones agropecuarias y veterinarias en la frontera Chuy / Chuí',
    languageName: 'Español (UY)',

    // Categories
    categories: {
      all: 'Todos',
      mascotas: 'Mascotas',
      agro: 'Agro',
      equinos: 'Equinos',
      jardineria: 'Jardinería',
      herramientas: 'Herramientas',
      farmacia: 'Farmacia',
      viewCatalog: 'Ver catálogo',
      prodsCount: 'prods',
    },

    // Common Actions
    addToCart: 'Agregar al Carrito',
    consultWhatsApp: 'Consultar por WhatsApp',
    viewDetails: 'Ver detalles',
    repeatOrder: 'Repetir pedido',
    repeatOrderNow: 'Repetir pedido ahora',
    buyNow: 'Comprar ahora',
    needHelp: 'Necesito ayuda',
    seeAll: 'Ver todos',
    howToGet: 'Cómo llegar',
    stop: 'Detener',
    close: 'Cerrar',
    confirmWhatsApp: 'Confirmar por WhatsApp',
    emptyCartTitle: 'Tu carrito está vacío',
    emptyCartDesc: 'Explorá el catálogo de mascotas, agro, equinos o consultá con el Asistente IA.',
    goToProducts: 'Ir a Productos',

    // Home Page
    homeHeroTag: 'Ecosistema Digital Campo Verde',
    homeHeroTitle: 'Todo para tus animales, tu campo y tu hogar.',
    homeHeroDesc: 'Encontrá productos, consultá con nuestro asistente o equipo veterinario y realizá tu pedido fácilmente desde Chuy / Chuí.',
    homeSmartReminderTag: 'Recordatorio Inteligente',
    homeSmartReminderTitle: '¿Por quedarse sin ración Biofresh o antiparasitario?',
    homeSmartReminderDesc: 'Tu última compra fue hace 28 días. Repetir pedido en 1 Clic.',
    homeMainCategories: 'Categorías Principales',
    homeAssistantTitle: 'Asistente Virtual Campo Verde',
    homeAssistantSub: 'Orientación para raciones por peso, antiparasitarios y equipamiento rural en Chuy.',
    homeAssistantBtn: 'Consultar al Asistente',
    homeFeaturedTitle: 'Productos Destacados & Recomendados',
    homeFeaturedSub: 'Mascotas, Ganadería, Equinos y Herramientas',
    homeStoreTag: 'Sucursal Chuy / Chuí',
    homeStoreTitle: 'Agroveterinaria Campo Verde',
    homeStoreAddress: 'Avenida Brasil - Zona de Frontera',

    // Assistant Page
    aiTitle: 'Campo Verde IA',
    aiSub: 'Asistente comercial y de recomendaciones Chuy',
    aiRestart: 'Reiniciar',
    aiVetAlertTag: 'Aviso de Seguridad Profesional:',
    aiVetAlertDesc: 'Para situaciones clínicas, tratamientos o medicamentos que requieran evaluación profesional, consultá directamente con un veterinario calificado.',
    aiGreeting: 'Hola 👋 Soy el asistente de Campo Verde.\n\nPuedo ayudarte a encontrar productos, preparar tu pedido o conectarte con nuestro equipo en Chuy.\n\n¿Qué necesitás hoy?',
    aiCatPet: '🐶 Mascota',
    aiCatCattle: '🐄 Ganado',
    aiCatHorse: '🐴 Equino',
    aiCatField: '🌱 Campo',
    aiCatOrder: '🛒 Pedido',
    aiSuggestionsTag: 'Sugerencias encontradas en la Demo:',
    aiTyping: 'Campo Verde IA está escribiendo...',
    aiInputPlaceholder: 'Escribí tu consulta (Ej: algo para las pulgas de mi perro)...',

    // Orders Page
    ordersTitle: 'Mis Pedidos',
    ordersSub: 'Revisá el estado de tus compras en Campo Verde Chuy o repetí un pedido en 1 clic.',
    ordersHistoryTag: 'Historial & Recompra',
    ordersNewOrderBtn: 'Hacer nuevo pedido',
    ordersDelivered: 'Entregado',
    ordersInTransit: 'En Proceso',
    ordersTotal: 'Total del pedido',
    ordersQuantity: 'Cantidad',

    // Repurchase & Loyalty Page
    repurchaseTitle: 'Recompra & Beneficios',
    repurchaseSub: 'Avisos automáticos para que nunca te quedes sin ración ni insumos en tu establecimiento.',
    repurchaseFastTitle: 'Repetir Pedido',
    repurchaseFastSub: 'Hola 👋 ¿Querés repetir alguna de tus compras frecuentes?',
    repurchaseRemindersTitle: 'Mis Recordatorios',
    repurchaseRemindersSub: 'Alertas automáticas configuradas para tus animales',
    repurchaseLoyaltyTag: 'Programa de Fidelidad Campo Verde',
    repurchaseLoyaltySub: 'compras registradas',
    repurchasePoints: 'Puntos Acumulados',
    repurchaseBenefitsTitle: 'Beneficios Disponibles',
    repurchaseCode: 'CÓDIGO',
    repurchaseUseNow: 'Usar ahora →',
    repurchaseOffersTitle: 'Ofertas para Vos',

    // Account Page
    accountActivityTitle: 'Mi Actividad Comercial',
    accountBenefitsDesc: 'PTS acumulados',
    accountRemindersDesc: 'Avisos de ración y sanitario',
    accountPhysicalStoreTitle: 'Tienda Física Chuy / Chuí',
    accountAdminDesc: 'Vista previa del Dashboard SaaS',
    accountVeitiaTitle: 'Propuesta Comercial Veitia Studios',
    accountVeitiaDesc: '¿Querés implementar este ecosistema digital para Campo Verde Chuy?',
    accountVeitiaBtn: 'Ver detalles de propuesta',

    // Store Page
    storeTitle: 'Encontranos en Campo Verde',
    storeSub: 'Atención personalizada para el productor rural y el cuidado de tus mascotas en la frontera.',
    storeMapTag: 'Tienda Física Chuy / Chuí',
    storeCoordinates: 'Coordenadas de Frontera',
    storeAddressLabel: 'Dirección',
    storeHoursLabel: 'Horarios de Atención',
    storeHoursVal: 'Lunes a Sábado: 08:00 a 19:00 hs',
    storeHoursSun: 'Domingos: 08:30 a 12:30 hs',
    storeContactLabel: 'Contacto Directo',
    storeServicesTitle: 'Servicios Disponibles en Sucursal',
    storeService1Title: 'Retiro de Pedidos Online',
    storeService1Desc: 'Comprá por la app/web y retirá sin esperas en el mostrador.',
    storeService2Title: 'Asesoramiento Veterinario',
    storeService2Desc: 'Orientación en vacunación, antiparasitarios y nutrición animal.',
    storeService3Title: 'Despacho Rural y Urbano',
    storeService3Desc: 'Coordinación de entregas de raciones y equipamiento en Chuy.',

    // Cart & Modals
    cartTitle: 'Tu Pedido Campo Verde',
    cartOrderSuccessTitle: '¡Pedido Generado!',
    cartOrderSuccessDesc: 'Tu pedido fue ingresado exitosamente en el sistema DEMO de Campo Verde Chuy. Podés consultar el estado en mis pedidos.',
    cartViewOrders: 'Ver Mis Pedidos',
    cartClear: 'Vaciar carrito',
    cartDeliveryMode: 'Modo de Entrega en Chuy / Chuí',
    cartStorePickup: 'Retiro en Tienda',
    cartHomeDelivery: 'Envío a Domicilio',
    cartFree: 'Gratis',
    cartToCoordinate: 'A coordinar',
    cartSubtotal: 'Subtotal DEMO',
    cartTotalEstimated: 'Total Estimado',
    cartFinishWhatsApp: 'Finalizar por WhatsApp',
    cartRegisterOrder: 'Registrar Pedido (Simulación)',

    // Product Detail Modal
    modalPriceDemo: 'Precio DEMO',
    modalAvailableStock: 'Stock disponible (DEMO)',
    modalVetNoticeTag: 'Aviso Veterinario:',
    modalVetNoticeDefault: 'Para medicamentos o tratamientos que requieran evaluación profesional, consultá previamente con tu médico veterinario de confianza.',
    modalDetailsTitle: 'Detalles del Producto',
    modalRecommendedFor: 'Recomendado para:',

    // Commercial Admin Panel
    adminTitle: 'Campo Verde — Control de Ventas & Automatizaciones',
    adminSub: 'Vista unificada de métricas comerciales, alertas de recompra y flujos de WhatsApp en Chuy.',
    adminCrmTag: 'Panel Comercial & CRM',
    adminDemoBadge: 'DEMO SAAS',
    adminTalkVeitia: 'Hablar con Veitia Studios',
    adminMetricSalesMonth: 'Ventas del Mes (DEMO)',
    adminMetricOrdersProcessed: 'Pedidos Procesados',
    adminMetricRepurchaseRate: 'Tasa de Recompra',
    adminMetricWhatsappLeads: 'Leads por WhatsApp',
    adminSales30DaysTitle: 'Ventas Últimos 30 Días',
    adminSales30DaysSub: 'Comportamiento comercial en Chuy / Chuí (DEMO)',
    adminSalesVsLastMonth: '+18.4% vs mes anterior',
    adminTopProductsTitle: 'Productos Más Vendidos',
    adminTopProductsSub: 'Participación por categoría',
    adminAlertsTitle: 'Alertas Comerciales Inteligentes',
    adminAlertsSub: 'Oportunidades inmediatas de venta detectadas por el sistema',
    adminAlertImpact: 'Impacto:',
    adminAutomationsTitle: 'Flujos y Automatizaciones',
    adminAutomationsSub: 'Disparadores automáticos de mensajes por WhatsApp e IA',
    adminAutoTrigger: 'Gatillo:',
    adminAutoAction: 'Acción:',
    adminAutoExecutions: 'Ejecuciones mes:',
    adminAutoConversion: 'Conversión:',
    adminGrowthTitle: '¿Dónde está creciendo Campo Verde?',
    adminVeitiaCtaTag: 'El Próximo Paso',
    adminVeitiaCtaTitle: 'Convertir esta experiencia en una herramienta real para Campo Verde.',
    adminVeitiaCtaDesc: 'Un ecosistema listo para integrar con tu catálogo existente, base de datos de clientes, canal de WhatsApp y automatizaciones n8n.',

    // Veitia Modal & Demo Badge & Splash
    demoBadgeText: 'Propuesta digital para Campo Verde Chuy / Chuí',
    demoBadgeDrivenBy: 'Impulsado por Veitia Studios',
    veitiaProposalTag: 'Propuesta Comercial',
    veitiaTitle: 'El Próximo Paso para Campo Verde',
    veitiaDesc: 'Convertir esta demo comercial en una herramienta tecnológica real, conectada a la operativa y ventas de la agroveterinaria en Chuy.',
    veitiaModulesTitle: 'Módulos e Integraciones Listos para Desplegar:',
    veitiaCommitmentTag: 'Compromiso de Proyecto',
    veitiaCommitmentDesc: 'No reemplazamos la presencia ni el ecommerce existente de Campo Verde. Potenciamos sus canales digitales actuales unificándolos en una experiencia propia para sus clientes de frontera.',
    splashTagline: 'Todo para tus animales, tu campo y tu hogar.',
    splashTag: 'Chuy / Chuí — Experiencia Digital',
    splashPressToContinue: 'Presioná para continuar o esperá un segundo...',
  },
  pt: {
    // Navigation & Header
    searchPlaceholder: 'O que você procura? (Ex: Biofresh, NexGard)...',
    listening: 'Ouvindo sua voz...',
    voiceSearch: 'Pesquisa por voz',
    speechNotSupported: 'Pesquisa por voz não suportada neste navegador',
    speechError: 'Voz não reconhecida. Tente novamente.',
    adminPanel: 'Painel Comercial',
    cart: 'Carrinho',
    borderLocation: 'Chuí / Chuy',
    countrySub: 'Fronteira Brasil - Uruguai',
    home: 'Início',
    catalog: 'Comprar',
    assistant: 'Assistente IA',
    orders: 'Meus Pedidos',
    repurchase: 'Recompra',
    account: 'Minha Conta',
    store: 'Loja Física',
    offlineTitle: 'Modo Sem Conexão (Offline)',
    offlineDesc: 'Interface carregada do cache do Service Worker PWA.',
    welcomeTitle: 'Agroveterinária Campo Verde',
    welcomeSubtitle: 'Soluções agropecuárias e veterinárias na fronteira Chuí / Chuy',
    languageName: 'Português (BR)',

    // Categories
    categories: {
      all: 'Todos',
      mascotas: 'Mascotes',
      agro: 'Agro',
      equinos: 'Equinos',
      jardineria: 'Jardinagem',
      herramientas: 'Ferramentas',
      farmacia: 'Farmácia',
      viewCatalog: 'Ver catálogo',
      prodsCount: 'prods',
    },

    // Common Actions
    addToCart: 'Adicionar ao Carrinho',
    consultWhatsApp: 'Consultar via WhatsApp',
    viewDetails: 'Ver detalhes',
    repeatOrder: 'Repetir pedido',
    repeatOrderNow: 'Repetir pedido agora',
    buyNow: 'Comprar agora',
    needHelp: 'Preciso de ajuda',
    seeAll: 'Ver todos',
    howToGet: 'Como chegar',
    stop: 'Parar',
    close: 'Fechar',
    confirmWhatsApp: 'Confirmar pelo WhatsApp',
    emptyCartTitle: 'Seu carrinho está vazio',
    emptyCartDesc: 'Explore o catálogo de mascotes, agro, equinos ou consulte o Assistente IA.',
    goToProducts: 'Ir para Produtos',

    // Home Page
    homeHeroTag: 'Ecossistema Digital Campo Verde',
    homeHeroTitle: 'Tudo para seus animais, seu campo e sua casa.',
    homeHeroDesc: 'Encontre produtos, consulte nosso assistente ou equipe veterinária e faça seu pedido facilmente do Chuí / Chuy.',
    homeSmartReminderTag: 'Lembrete Inteligente',
    homeSmartReminderTitle: 'Ficando sem ração Biofresh ou antiparasitário?',
    homeSmartReminderDesc: 'Sua última compra foi há 28 dias. Repita o pedido em 1 Clique.',
    homeMainCategories: 'Categorias Principais',
    homeAssistantTitle: 'Assistente Virtual Campo Verde',
    homeAssistantSub: 'Orientação de rações por peso, antiparasitários e equipamentos rurais no Chuí.',
    homeAssistantBtn: 'Consultar Assistente',
    homeFeaturedTitle: 'Produtos Destaque & Recomendados',
    homeFeaturedSub: 'Mascotes, Pecuária, Equinos e Ferramentas',
    homeStoreTag: 'Filial Chuí / Chuy',
    homeStoreTitle: 'Agroveterinária Campo Verde',
    homeStoreAddress: 'Avenida Brasil - Zona de Fronteira',

    // Assistant Page
    aiTitle: 'Campo Verde IA',
    aiSub: 'Assistente comercial e de recomendações Chuí',
    aiRestart: 'Reiniciar',
    aiVetAlertTag: 'Aviso de Segurança Profissional:',
    aiVetAlertDesc: 'Para situações clínicas, tratamentos ou medicamentos que necessitem de avaliação profissional, consulte diretamente um médico veterinário qualificado.',
    aiGreeting: 'Olá 👋 Sou o assistente da Campo Verde.\n\nPosso ajudar você a encontrar produtos, preparar seu pedido ou conectar com nossa equipe no Chuí.\n\nComo posso ajudar hoje?',
    aiCatPet: '🐶 Mascote',
    aiCatCattle: '🐄 Gado',
    aiCatHorse: '🐴 Equino',
    aiCatField: '🌱 Campo',
    aiCatOrder: '🛒 Pedido',
    aiSuggestionsTag: 'Sugestões encontradas na Demonstração:',
    aiTyping: 'Campo Verde IA está digitando...',
    aiInputPlaceholder: 'Digite sua dúvida (Ex: algo para pulgas no meu cachorro)...',

    // Orders Page
    ordersTitle: 'Meus Pedidos',
    ordersSub: 'Verifique o status das suas compras na Campo Verde Chuí ou repita um pedido em 1 clique.',
    ordersHistoryTag: 'Histórico & Recompra',
    ordersNewOrderBtn: 'Fazer novo pedido',
    ordersDelivered: 'Entregue',
    ordersInTransit: 'Em Processamento',
    ordersTotal: 'Total do pedido',
    ordersQuantity: 'Quantidade',

    // Repurchase & Loyalty Page
    repurchaseTitle: 'Recompra & Benefícios',
    repurchaseSub: 'Avisos automáticos para você nunca ficar sem ração nem insumos na sua propriedade.',
    repurchaseFastTitle: 'Repetir Pedido',
    repurchaseFastSub: 'Olá 👋 Quer repetir alguma de suas compras frequentes?',
    repurchaseRemindersTitle: 'Meus Lembretes',
    repurchaseRemindersSub: 'Alertas automáticos configurados para seus animais',
    repurchaseLoyaltyTag: 'Programa de Fidelidade Campo Verde',
    repurchaseLoyaltySub: 'compras registradas',
    repurchasePoints: 'Pontos Acumulados',
    repurchaseBenefitsTitle: 'Benefícios Disponíveis',
    repurchaseCode: 'CÓDIGO',
    repurchaseUseNow: 'Usar agora →',
    repurchaseOffersTitle: 'Ofertas para Você',

    // Account Page
    accountActivityTitle: 'Minha Atividade Comercial',
    accountBenefitsDesc: 'PTS acumulados',
    accountRemindersDesc: 'Avisos de ração e sanitário',
    accountPhysicalStoreTitle: 'Loja Física Chuí / Chuy',
    accountAdminDesc: 'Visualização do Painel SaaS',
    accountVeitiaTitle: 'Proposta Comercial Veitia Studios',
    accountVeitiaDesc: 'Quer implementar este ecossistema digital para a Campo Verde Chuí?',
    accountVeitiaBtn: 'Ver detalhes da proposta',

    // Store Page
    storeTitle: 'Encontre-nos na Campo Verde',
    storeSub: 'Atendimento personalizado para o produtor rural e o cuidado dos seus mascotes na fronteira.',
    storeMapTag: 'Loja Física Chuí / Chuy',
    storeCoordinates: 'Coordenadas da Fronteira',
    storeAddressLabel: 'Endereço',
    storeHoursLabel: 'Horário de Atendimento',
    storeHoursVal: 'Segunda a Sábado: 08:00 às 19:00 hs',
    storeHoursSun: 'Domingos: 08:30 às 12:30 hs',
    storeContactLabel: 'Contato Direto',
    storeServicesTitle: 'Serviços Disponíveis na Loja',
    storeService1Title: 'Retirada de Pedidos Online',
    storeService1Desc: 'Compre pelo app/web e retire no balcão sem filas.',
    storeService2Title: 'Assessoria Veterinária',
    storeService2Desc: 'Orientação em vacinação, antiparasitários e nutrição animal.',
    storeService3Title: 'Entrega Rural e Urbana',
    storeService3Desc: 'Coordenação de entregas de rações e equipamentos no Chuí.',

    // Cart & Modals
    cartTitle: 'Seu Pedido Campo Verde',
    cartOrderSuccessTitle: 'Pedido Gerado!',
    cartOrderSuccessDesc: 'Seu pedido foi registrado com sucesso no sistema DEMO da Campo Verde Chuí. Você pode consultar o status em meus pedidos.',
    cartViewOrders: 'Ver Meus Pedidos',
    cartClear: 'Esvaziar carrinho',
    cartDeliveryMode: 'Modo de Entrega no Chuí / Chuy',
    cartStorePickup: 'Retirada na Loja',
    cartHomeDelivery: 'Entrega em Domicílio',
    cartFree: 'Grátis',
    cartToCoordinate: 'A combinar',
    cartSubtotal: 'Subtotal DEMO',
    cartTotalEstimated: 'Total Estimado',
    cartFinishWhatsApp: 'Finalizar pelo WhatsApp',
    cartRegisterOrder: 'Registrar Pedido (Simulação)',

    // Product Detail Modal
    modalPriceDemo: 'Preço DEMO',
    modalAvailableStock: 'Estoque disponível (DEMO)',
    modalVetNoticeTag: 'Aviso Veterinário:',
    modalVetNoticeDefault: 'Para medicamentos ou tratamentos que exijam avaliação profissional, consulte previamente seu médico veterinário de confiança.',
    modalDetailsTitle: 'Detalhes do Produto',
    modalRecommendedFor: 'Recomendado para:',

    // Commercial Admin Panel
    adminTitle: 'Campo Verde — Controle de Vendas & Automações',
    adminSub: 'Visão unificada de métricas comerciais, alertas de recompra e fluxos de WhatsApp no Chuí.',
    adminCrmTag: 'Painel Comercial & CRM',
    adminDemoBadge: 'DEMO SAAS',
    adminTalkVeitia: 'Falar com Veitia Studios',
    adminMetricSalesMonth: 'Vendas do Mês (DEMO)',
    adminMetricOrdersProcessed: 'Pedidos Processados',
    adminMetricRepurchaseRate: 'Taxa de Recompra',
    adminMetricWhatsappLeads: 'Leads por WhatsApp',
    adminSales30DaysTitle: 'Vendas Últimos 30 Dias',
    adminSales30DaysSub: 'Comportamento comercial no Chuí / Chuy (DEMO)',
    adminSalesVsLastMonth: '+18.4% vs mês anterior',
    adminTopProductsTitle: 'Produtos Mais Vendidos',
    adminTopProductsSub: 'Participação por categoria',
    adminAlertsTitle: 'Alertas Comerciais Inteligentes',
    adminAlertsSub: 'Oportunidades imediatas de venda detectadas pelo sistema',
    adminAlertImpact: 'Impacto:',
    adminAutomationsTitle: 'Fluxos e Automações',
    adminAutomationsSub: 'Disparadores automáticos de mensagens por WhatsApp e IA',
    adminAutoTrigger: 'Gatilho:',
    adminAutoAction: 'Ação:',
    adminAutoExecutions: 'Execuções mês:',
    adminAutoConversion: 'Conversão:',
    adminGrowthTitle: 'Onde a Campo Verde está crescendo?',
    adminVeitiaCtaTag: 'O Próximo Passo',
    adminVeitiaCtaTitle: 'Converter esta experiência em uma ferramenta real para a Campo Verde.',
    adminVeitiaCtaDesc: 'Um ecossistema pronto para integrar com seu catálogo existente, banco de dados de clientes, canal do WhatsApp e automações n8n.',

    // Veitia Modal & Demo Badge & Splash
    demoBadgeText: 'Proposta digital para Campo Verde Chuí / Chuy',
    demoBadgeDrivenBy: 'Desenvolvido por Veitia Studios',
    veitiaProposalTag: 'Proposta Comercial',
    veitiaTitle: 'O Próximo Passo para a Campo Verde',
    veitiaDesc: 'Converter esta demonstração comercial em uma ferramenta tecnológica real, conectada à operação e vendas da agroveterinária no Chuí.',
    veitiaModulesTitle: 'Módulos e Integrações Prontos para Lançamento:',
    veitiaCommitmentTag: 'Compromisso de Projeto',
    veitiaCommitmentDesc: 'Não substituímos a presença nem o e-commerce existente da Campo Verde. Potencializamos seus canais digitais atuais unificando-os em uma experiência própria para seus clientes de fronteira.',
    splashTagline: 'Tudo para seus animais, seu campo e sua casa.',
    splashTag: 'Chuí / Chuy — Experiência Digital',
    splashPressToContinue: 'Pressione para continuar ou aguarde um segundo...',
  },
};
