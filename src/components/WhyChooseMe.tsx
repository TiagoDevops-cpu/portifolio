import React from 'react';
import { ShieldCheck, Zap, Smartphone, Sparkles, UserCheck, Clock } from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const reasons = [
    {
      icon: UserCheck,
      title: "Atendimento 100% Direto com o Dev",
      description: "Você se comunica diretamente com quem desenvolve seu site. Sem ruídos de comunicação, gerentes de conta intermediários ou atrasos desnecessários."
    },
    {
      icon: Zap,
      title: "Performance Extrema (Google PageSpeed 90+)",
      description: "Sites construídos com tecnologia de ponta (React/Tailwind) para carregar de forma instantânea no celular e no computador, reduzindo desistências."
    },
    {
      icon: Smartphone,
      title: "Design Responsivo & Mobile First",
      description: "Mais de 80% dos seus clientes acessarão seu site pelo smartphone. Garanto uma navegação perfeita, rápida e intuitiva em telas pequenas."
    },
    {
      icon: Sparkles,
      title: "Visual Moderno & Identidade Única",
      description: "Design limpo, profissional e alinhado com as maiores tendências tecnológicas globais para transmitir máxima credibilidade à sua marca."
    },
    {
      icon: Clock,
      title: "Cumprimento Rigoroso de Prazos",
      description: "Cronograma transparente com entregas pontuais. Você acompanha o progresso do desenvolvimento passo a passo até o lançamento final."
    },
    {
      icon: ShieldCheck,
      title: "Suporte e Segurança Garantidos",
      description: "Acompanhamento pós-lançamento para ajustes finos, garantia contra falhas técnicas e orientações práticas para você operar seu site."
    }
  ];

  return (
    <section className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="skill-tag uppercase tracking-widest inline-block mb-3">
            Diferenciais Competitivos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Por Que Escolher <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">Tiago Santos</span>?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            A união perfeita entre estética moderna, engenharia de software sólida e visão estratégica de negócios para impulsionar seus resultados.
          </p>
        </div>

        {/* Grid dos Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass border border-white/5 hover:border-violet-500/50 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl glass border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
