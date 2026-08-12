import React from 'react';
import { Github, Linkedin, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/5 pt-12 pb-8 text-gray-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="text-lg font-extrabold text-white mb-1 tracking-tight">
              Tiago Santos da Silva
            </a>
            <p className="text-xs text-violet-400 font-mono">
              Web Designer Full-Stack • Soluções Digitais para Empresas
            </p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-[11px] text-gray-400 hover:text-amber-300 font-mono transition-colors mt-0.5">
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Olá Tiago! Vi seu portfólio e gostaria de entrar em contato para um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Comercial"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              title="Ligação Direta"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-violet-400 hover:border-violet-500/50 transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-500/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-violet-400 hover:border-violet-500/50 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Botão Voltar ao Topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/40 transition-all text-xs font-semibold cursor-pointer"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
          </button>

        </div>

        {/* Direitos Autorais & Nota Técnica */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-gray-500">
          <p>
            © {new Date().getFullYear()} <strong>Tiago Santos da Silva</strong>. Todos os direitos reservados.
          </p>
          <p className="font-mono text-gray-500">
            Desenvolvido com React, TypeScript & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
