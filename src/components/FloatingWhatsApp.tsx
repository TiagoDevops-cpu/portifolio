import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const floatingWhatsappMessage = getWhatsAppUrl("Olá Tiago! Vi seu portfólio e gostaria de tirar dúvidas sobre o desenvolvimento de um site para minha empresa.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip de Notificação Interativa */}
      {showTooltip && (
        <div className="relative bg-slate-900 border border-emerald-500/40 text-slate-100 p-3 rounded-2xl shadow-2xl max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 rounded-full text-slate-400 hover:text-white"
            title="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold text-emerald-400">Tiago Santos Online</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Olá! Precisa de um site moderno para sua empresa? Fale comigo no WhatsApp!
          </p>
        </div>
      )}

      {/* Botão Flutuante Principal do WhatsApp */}
      <a
        href={floatingWhatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 animate-pulse-glow cursor-pointer relative"
        title="Falar com Tiago Santos da Silva no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-slate-950 stroke-emerald-500" />
        <span className="sr-only">Falar no WhatsApp</span>

        {/* Badge "1" de mensagem não lida */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white font-extrabold text-[10px] rounded-full flex items-center justify-center border-2 border-slate-950">
          1
        </span>
      </a>

    </div>
  );
};
