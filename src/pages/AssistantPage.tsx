import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, ShieldAlert, Sparkles, ShoppingBag, ArrowRight, RefreshCw, Dog, Wheat, PawPrint, Sprout, ShoppingCart, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ChatMessage, Product } from '../types';

export const AssistantPage: React.FC = () => {
  const { products, addToCart, setSelectedProduct, generateWhatsAppLink, setActiveTab, formatPrice, language, t } = useApp();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: t.aiGreeting,
      timestamp: language === 'pt' ? 'Agora' : 'Ahora',
      actionButtons: [
        { label: t.aiCatPet, action: 'mascota' },
        { label: t.aiCatCattle, action: 'ganado' },
        { label: t.aiCatHorse, action: 'equino' },
        { label: t.aiCatField, action: 'campo' },
        { label: t.aiCatOrder, action: 'pedido' },
      ],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: language === 'pt' ? 'Agora' : 'Ahora',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Process intelligence rules
    setTimeout(() => {
      const lower = text.toLowerCase();
      let responseText = '';
      let suggestedProducts: Product[] = [];
      let isWarning = false;
      let actionButtons: { label: string; action: string; categoryId?: any }[] = [];

      if (language === 'pt') {
        if (
          lower.includes('pulga') ||
          lower.includes('carrapato') ||
          lower.includes('nexgard') ||
          lower.includes('mascota') ||
          lower.includes('pet') ||
          lower.includes('cão') ||
          lower.includes('cachorro') ||
          lower.includes('gato')
        ) {
          responseText =
            'Perfeito. Para pulgas e carrapatos em cães, a recomendação depende do peso do seu mascote.\n\nPara cães médios e grandes (15,1 a 30 kg), a opção líder é NexGard Spectra, que também desparasita internamente.';
          suggestedProducts = products.filter((p) => p.id === 'prod-nexgard-15-30' || p.id === 'prod-biofresh-15');
        } else if (
          lower.includes('ração') ||
          lower.includes('alimento') ||
          lower.includes('comida') ||
          lower.includes('biofresh') ||
          lower.includes('racao')
        ) {
          responseText =
            'Excelente escolha. Biofresh Adultos é um alimento 100% natural livre de transgênicos com ingredientes frescos.\n\nDispomos de apresentações de 15 kg com benefício de recompra programada na Campo Verde Chuí.';
          suggestedProducts = products.filter((p) => p.id === 'prod-biofresh-15');
        } else if (
          lower.includes('gado') ||
          lower.includes('vacina') ||
          lower.includes('ivermectina') ||
          lower.includes('bovino') ||
          lower.includes('vaca')
        ) {
          responseText =
            'Para manejo sanitário e injetáveis para gado bovino, dispomos de Ivermectina 1% e suplementação mineralizada NutriCampo.';
          suggestedProducts = products.filter((p) => p.id === 'prod-ivermectina-500' || p.id === 'prod-sal-mineral-25');
          isWarning = true;
        } else if (lower.includes('equino') || lower.includes('cavalo') || lower.includes('cavalos')) {
          responseText =
            'Para equinos de trabalho ou esporte, recomendamos a ração extrusada EquiPlus enriquecida com aminoácidos e ômega 3.';
          suggestedProducts = products.filter((p) => p.id === 'prod-equinos-alto-rendimiento');
        } else if (
          lower.includes('doente') ||
          lower.includes('dose') ||
          lower.includes('sintoma') ||
          lower.includes('infecção') ||
          lower.includes('sintomas')
        ) {
          responseText =
            'Entendemos a preocupação com a saúde do seu animal.\n\n⚠️ Por razões de segurança veterinária, nosso assistente não diagnostica nem receita doses clínicas. Recomendamos consultar diretamente um médico veterinário qualificado.';
          isWarning = true;
        } else {
          responseText =
            'Entendido. Analisei sua solicitação no catálogo da Campo Verde Chuí. Aqui estão algumas opções destacadas ou você pode nos contatar pelo WhatsApp para atendimento direto.';
          suggestedProducts = products.slice(0, 2);
          actionButtons = [
            { label: 'Ver todo o catálogo', action: 'catalog' },
            { label: 'Consultar pelo WhatsApp', action: 'whatsapp' },
          ];
        }
      } else {
        if (
          lower.includes('pulga') ||
          lower.includes('garrapata') ||
          lower.includes('nexgard') ||
          lower.includes('mascota') ||
          lower.includes('perro') ||
          lower.includes('gato')
        ) {
          responseText =
            'Perfecto. Para pulgas y garrapatas en perros, la recomendación dependerá del peso de tu mascota.\n\nPara un perro mediano-grande (15.1 a 30 kg), la opción líder es NexGard Spectra, que también desparasita internamente.';
          suggestedProducts = products.filter((p) => p.id === 'prod-nexgard-15-30' || p.id === 'prod-biofresh-15');
        } else if (
          lower.includes('ración') ||
          lower.includes('racion') ||
          lower.includes('alimento') ||
          lower.includes('comida') ||
          lower.includes('biofresh')
        ) {
          responseText =
            'Excelente elección. Biofresh Adultos es un alimento 100% natural libre de transgénicos con ingredientes frescos.\n\nDisponemos de presentaciones de 15 kg con beneficio de recompra programada en Campo Verde Chuy.';
          suggestedProducts = products.filter((p) => p.id === 'prod-biofresh-15');
        } else if (
          lower.includes('ganado') ||
          lower.includes('vacuna') ||
          lower.includes('ivermectina') ||
          lower.includes('bovino') ||
          lower.includes('vaca')
        ) {
          responseText =
            'Para manejo sanitario de rodeo de cría e inyectables, disponemos de Ivermectina 1% y suplementación mineralizada NutriCampo.';
          suggestedProducts = products.filter((p) => p.id === 'prod-ivermectina-500' || p.id === 'prod-sal-mineral-25');
          isWarning = true;
        } else if (lower.includes('equino') || lower.includes('caballo')) {
          responseText =
            'Para equinos de trabajo o deporte, recomendamos la ración extruida EquiPlus enriquecida con aminoácidos y omega 3.';
          suggestedProducts = products.filter((p) => p.id === 'prod-equinos-alto-rendimiento');
        } else if (
          lower.includes('enfermo') ||
          lower.includes('dosis') ||
          lower.includes('síntomas') ||
          lower.includes('sintomas') ||
          lower.includes('infección') ||
          lower.includes('infeccion')
        ) {
          responseText =
            'Entendemos la inquietud sobre la salud de tu animal.\n\n⚠️ Por razones de seguridad veterinaria, nuestro asistente no diagnostica ni receta dosis clínicas. Te recomendamos consultar directamente con un profesional veterinario.';
          isWarning = true;
        } else {
          responseText =
            'Entendido. He analizado tu solicitud dentro del catálogo de Campo Verde Chuy. Aquí tenés algunas opciones destacadas o podés escribirnos por WhatsApp para atención directa.';
          suggestedProducts = products.slice(0, 2);
          actionButtons = [
            { label: 'Ver todo el catálogo', action: 'catalog' },
            { label: 'Consultar por WhatsApp', action: 'whatsapp' },
          ];
        }
      }

      const assistantMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: responseText,
        timestamp: language === 'pt' ? 'Agora' : 'Ahora',
        suggestedProducts: suggestedProducts.length > 0 ? suggestedProducts : undefined,
        actionButtons: actionButtons.length > 0 ? actionButtons : undefined,
        isWarning,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleActionClick = (action: string) => {
    if (action === 'mascota') {
      handleSendMessage(
        language === 'pt'
          ? 'Preciso de opções para o cuidado do meu cão ou gato'
          : 'Necesito opciones para el cuidado de mi perro o gato'
      );
    } else if (action === 'ganado') {
      handleSendMessage(
        language === 'pt'
          ? 'Quero consultar sobre antiparasitários ou suplementos para gado bovino'
          : 'Quiero consultar por antiparasitarios o suplementos para ganado bovino'
      );
    } else if (action === 'equino') {
      handleSendMessage(
        language === 'pt'
          ? 'Procuro ração de alto rendimento para cavalos'
          : 'Busco ración de alto rendimiento para caballos'
      );
    } else if (action === 'campo') {
      handleSendMessage(
        language === 'pt'
          ? 'Quero ver ferramentas ou cerca elétrica solar'
          : 'Quiero ver herramientas o cerco eléctrico solar'
      );
    } else if (action === 'pedido') {
      handleSendMessage(
        language === 'pt'
          ? 'Como faço um pedido ou retiro na loja do Chuí?'
          : '¿Cómo realizo un pedido o retiro en la tienda de Chuy?'
      );
    } else if (action === 'catalog') {
      setActiveTab('comprar');
    } else if (action === 'whatsapp') {
      const msg =
        language === 'pt'
          ? 'Olá Campo Verde Chuí 👋 Venho de consultar o Assistente IA.'
          : 'Hola Campo Verde Chuy 👋 Vengo de consultar al Asistente IA.';
      window.open(generateWhatsAppLink(undefined, msg), '_blank');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-20 md:pb-8 animate-fade-in flex flex-col h-[82vh]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#173F2A] via-[#2F6B45] to-[#173F2A] text-white p-4 sm:p-5 rounded-3xl shadow-md flex items-center justify-between border border-emerald-900/30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#82C328] text-[#173F2A] flex items-center justify-center font-extrabold shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-extrabold text-base sm:text-lg tracking-tight">{t.aiTitle}</h1>
              <span className="bg-[#82C328] text-[#173F2A] text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                DEMO
              </span>
            </div>
            <p className="text-xs text-emerald-200">{t.aiSub}</p>
          </div>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                id: 'msg-1',
                sender: 'assistant',
                text: t.aiGreeting,
                timestamp: 'Ahora',
              },
            ])
          }
          className="text-xs text-emerald-200 hover:text-white flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> {t.aiRestart}
        </button>
      </div>

      {/* Mandatory Veterinary Safety Alert */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900 flex items-start gap-2.5 shrink-0 shadow-2xs">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed">
          <strong>{t.aiVetAlertTag}</strong> {t.aiVetAlertDesc}
        </p>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 overflow-y-auto bg-white rounded-3xl p-4 border border-emerald-900/10 shadow-2xs space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.sender === 'user'
                  ? 'bg-gray-800 text-white'
                  : 'bg-[#173F2A] text-[#82C328]'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm space-y-3 leading-relaxed shadow-2xs ${
                msg.sender === 'user'
                  ? 'bg-[#173F2A] text-white rounded-tr-none'
                  : 'bg-[#F7F6F1] text-[#1D2922] border border-emerald-900/10 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {/* Action Chip Buttons if provided */}
              {msg.actionButtons && msg.actionButtons.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {msg.actionButtons.map((btn, i) => (
                    <button
                      key={i}
                      onClick={() => handleActionClick(btn.action)}
                      className="bg-white hover:bg-emerald-50 text-[#173F2A] border border-emerald-900/15 font-bold px-3 py-1.5 rounded-xl text-xs transition-colors shadow-2xs"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Suggested Product Cards inside chat */}
              {msg.suggestedProducts && (
                <div className="space-y-2 pt-2 border-t border-emerald-900/10">
                  <span className="text-[10px] font-extrabold uppercase text-[#2F6B45] tracking-wider block">
                    {t.aiSuggestionsTag}
                  </span>

                  <div className="grid gap-2">
                    {msg.suggestedProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="bg-white p-3 rounded-xl border border-emerald-900/15 flex items-center justify-between gap-3 shadow-2xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-12 h-12 object-cover rounded-lg shrink-0"
                          />
                          <div>
                            <h5 className="font-bold text-xs text-[#1D2922] line-clamp-1">
                              {prod.name}
                            </h5>
                            <span className="text-xs font-black text-[#173F2A]">
                              {formatPrice(prod.price)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setSelectedProduct(prod)}
                            className="text-[11px] font-bold text-[#2F6B45] hover:underline px-2 py-1"
                          >
                            {t.viewDetails}
                          </button>
                          <button
                            onClick={() => addToCart(prod, 1)}
                            className="bg-[#173F2A] text-white p-1.5 rounded-lg text-xs hover:bg-[#2F6B45]"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 text-[#82C328]" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-gray-500 italic">
            <Bot className="w-4 h-4 text-[#2F6B45] animate-pulse" />
            <span>{t.aiTyping}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-emerald-900/15 shadow-md shrink-0">
        <input
          type="text"
          placeholder={t.aiInputPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 text-xs sm:text-sm px-3 py-2 bg-transparent focus:outline-none text-[#1D2922]"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!input.trim()}
          className="bg-[#173F2A] hover:bg-[#2F6B45] disabled:opacity-40 text-white p-3 rounded-xl transition-all shadow-2xs"
        >
          <Send className="w-4 h-4 text-[#82C328]" />
        </button>
      </div>
    </div>
  );
};
