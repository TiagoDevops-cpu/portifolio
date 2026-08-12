import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Github, Linkedin, Code2 } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-violet-900/30 shadow-[0_4px_20px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo e Nome Tiago Santos da Silva */}
        <a
          href="#hero"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:bg-violet-500 transition-all duration-300">
            TS
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              Tiago Santos <span className="text-violet-400 group-hover:text-fuchsia-400 transition-colors">da Silva</span>
            </span>
            <span className="text-[10px] text-violet-400/90 font-mono tracking-widest uppercase font-semibold">
              Full-Stack Web Designer
            </span>
          </div>
        </a>

        {/* Links de Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-5 py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs lg:text-sm font-medium text-gray-300 hover:text-violet-400 rounded-full hover:bg-violet-900/20 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Redes Sociais & Botão CTA Fale Comigo */}
        <div className="hidden md:flex items-center gap-3">
          {/* GitHub */}
          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub de Tiago Santos"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-900/20 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn de Tiago Santos"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-900/20 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Botão de Destaque Fale Comigo (WhatsApp) */}
          <a
            href={getWhatsAppUrl("Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para meu projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 text-white px-5 py-2 rounded-full hover:bg-violet-500 font-medium text-xs lg:text-sm transition-all shadow-lg shadow-violet-900/30 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale Comigo</span>
          </a>
        </div>

        {/* Botão do Menu Mobile (Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para meu projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-violet-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-violet-900/40"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Whats</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass text-gray-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-violet-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 border-b border-violet-900/40 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-gray-200 hover:bg-violet-900/20 hover:text-violet-400 font-medium text-sm transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-violet-500/50 text-xs font-mono">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass text-gray-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass text-gray-300 hover:text-violet-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href={getWhatsAppUrl("Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para meu projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 ml-4 py-2.5 px-4 rounded-xl bg-violet-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-900/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
