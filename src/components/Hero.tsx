import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap, Code2, PhoneCall } from 'lucide-react';
import { CONTACT_INFO, STATS_LIST, TYPING_ROLES, getWhatsAppUrl } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

export const Hero: React.FC = () => {
  // Typing Effect Logic
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const role = TYPING_ROLES[currentRoleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        // Pausa quando completa o texto antes de apagar
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
      } else {
        setCurrentText(
          role.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] glow-purple pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Textos & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Pill Badge Superior */}
            <div className="inline-block px-3.5 py-1.5 bg-violet-900/30 text-violet-400 text-xs font-bold tracking-widest uppercase rounded-md mb-6 border border-violet-800/50 shadow-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Full-Stack Web Designer</span>
            </div>

            {/* Saudação e Título Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Construindo <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">
                Experiências
              </span> <br className="hidden sm:inline" />
              de Alto Nível
            </h1>

            {/* Efeito de Digitação (Typing Effect) */}
            <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-xl sm:text-3xl font-mono font-bold text-gray-200">
                &gt; {currentText}
                <span className="animate-pulse text-violet-400 font-extrabold">|</span>
              </span>
            </div>

            {/* Subtítulo Pitch */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-normal leading-relaxed mb-8">
              Especialista em transformar ideias em soluções digitais robustas para empresas de todos os portes. Design moderno aliado à tecnologia de ponta para impulsionar a sua presença digital.
            </p>

            {/* Botões de Ação Principais (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              {/* CTA 1: Falar no WhatsApp */}
              <a
                href={getWhatsAppUrl("Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para o meu projeto web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg bg-[#25D366] text-white font-bold text-base shadow-lg shadow-emerald-900/30 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* CTA 2: Ver Projetos */}
              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-black font-bold text-base hover:bg-gray-200 transition-all duration-200 shadow-md"
              >
                <Code2 className="w-5 h-5 text-violet-600" />
                <span>Ver Projetos</span>
              </a>

              {/* CTA 3: Telefone Direto */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg glass text-gray-400 hover:text-violet-400 font-medium text-sm transition-all"
                title="Ligar diretamente"
              >
                <PhoneCall className="w-4 h-4 text-violet-400" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Selos de Garantia Rápida */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-medium border-t border-white/5 pt-6 w-full">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Carregamento Instantâneo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-violet-400" />
                <span>100% Otimizado p/ Mobile</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Atendimento Direto com o Dev</span>
              </div>
            </div>

          </div>

          {/* Lado Direito: Foto de Perfil & Destaque Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Foto de Perfil de Tiago Santos com id="foto-perfil" */}
            <ProfilePhoto size="hero" showBadge={true} />

            {/* Informação e atalho rápido do criador */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white">Tiago Santos da Silva</h3>
              <p className="text-sm text-violet-400 font-mono">Desenvolvedor Full-Stack</p>
            </div>
          </div>

        </div>

        {/* Barra de Estatísticas em Grade (Ticker) */}
        <div className="mt-16 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS_LIST.map((stat, idx) => (
            <div
              key={idx}
              className="glass rounded-xl p-5 text-center hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 mb-1 font-mono neon-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
