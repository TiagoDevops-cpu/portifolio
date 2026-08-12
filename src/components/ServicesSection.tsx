import React from 'react';
import { SERVICES_PACKAGES, CONTACT_INFO } from '../data/portfolioData';
import { Building2, Target, ShoppingBag, LayoutDashboard, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'Target':
        return Target;
      case 'ShoppingBag':
        return ShoppingBag;
      default:
        return LayoutDashboard;
    }
  };

  return (
    <section id="servicos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="skill-tag uppercase tracking-widest inline-block mb-3">
            O Que Posso Fazer Pela Sua Empresa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Soluções Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">Sob Medida</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Atendimento especializado para pequenas empresas em fase de aceleração até corporações estabelecidas que necessitam de máxima performance digital.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_PACKAGES.map((service) => {
            const IconComp = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="glass rounded-2xl p-8 border border-white/5 hover:border-violet-500/50 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl glass border border-violet-500/30 flex items-center justify-center text-violet-400">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="skill-tag text-emerald-300 border-emerald-500/30 bg-emerald-500/10">
                      {service.targetAudience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {service.subtitle}
                  </p>

                  {/* Entregáveis */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono font-bold uppercase text-gray-400 block mb-2">
                      O que está incluído:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Solicitação no WhatsApp */}
                <div className="pt-6 border-t border-white/5">
                  <a
                    href={`https://wa.me/5567981233340?text=${encodeURIComponent(`Olá Tiago! Vi seu portfólio e gostaria de um orçamento para: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-all shadow-lg shadow-violet-900/30 group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-violet-600" />
                    <span>Pedir Orçamento para {service.title}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
