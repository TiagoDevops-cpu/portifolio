import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Linkedin, ExternalLink, ArrowUpRight, Briefcase, Award, CheckCircle2, Sparkles, Globe, ShieldCheck } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="skill-tag uppercase tracking-widest inline-block mb-3">
            Portfólio & Trabalhos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">Destaque no LinkedIn</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Confira os cases de sucesso, artigos técnicos, demonstrações e publicações dos projetos mais recentes desenvolvidos por Tiago Santos da Silva diretamente em seu perfil profissional.
          </p>
        </div>

        {/* Interface de Destaque do LinkedIn */}
        <div className="glass rounded-3xl border border-violet-500/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden max-w-4xl mx-auto">
          
          {/* Efeitos de Luz em Segundo Plano */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Ícone e Badge do LinkedIn */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl glass border border-violet-500/40 flex items-center justify-center bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-violet-900/30 shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                <Linkedin className="w-12 h-12 text-violet-400 fill-violet-400/20" />
                <div className="absolute -bottom-2 -right-2 bg-[#0077B5] text-white p-2 rounded-xl shadow-lg border-2 border-[#050505]">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Perfil Profissional Ativo</span>
              </span>
            </div>

            {/* Informações e Detalhes */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skill-tag text-xs font-mono mb-2">
                  <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                  <span>Portfólio Oficial & Cases de Sucesso</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {CONTACT_INFO.name}
                </h3>
                <p className="text-sm text-violet-300 font-medium mt-1">
                  {CONTACT_INFO.role}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {CONTACT_INFO.location}
                </p>
              </div>

              {/* Lista de Recursos e Projetos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl glass border border-white/5 flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Sites Institucionais & E-Commerce</h4>
                    <p className="text-[11px] text-gray-400">Projetos com React, TypeScript e Tailwind CSS.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl glass border border-white/5 flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Landing Pages de Alta Conversão</h4>
                    <p className="text-[11px] text-gray-400">Focadas em velocidade, SEO e resultados de vendas.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl glass border border-white/5 flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Sistemas Web & APIs REST</h4>
                    <p className="text-[11px] text-gray-400">Desenvolvimento Full-Stack completo e personalizado.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl glass border border-white/5 flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Publicações & Demonstrações</h4>
                    <p className="text-[11px] text-gray-400">Vídeos, imagens e artigos detalhados no LinkedIn.</p>
                  </div>
                </div>
              </div>

              {/* Botão Principal de Ação - Link Direto para o LinkedIn */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white font-extrabold text-sm shadow-xl shadow-violet-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <Linkedin className="w-5 h-5 fill-current" />
                  <span>Acessar Portfólio Completo no LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass border border-white/10 text-gray-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-violet-400" />
                  <span>Ver Perfil Oficial</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
