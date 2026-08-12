import React from 'react';
import { CheckCircle2, MessageCircle, Code, Layers, Rocket, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Design Exclusivo & Atraente",
      description: "Nada de templates genéricos ou ultrapassados. Cada projeto é construído com identidade visual própria, pensada para encantar o seu cliente e destacar sua marca da concorrência."
    },
    {
      icon: Code,
      title: "Desenvolvimento Full-Stack",
      description: "Domínio do processo do início ao fim: do protótipo no Figma até o servidor, integração de banco de dados, APIs e otimização para carregamento em milissegundos."
    },
    {
      icon: Rocket,
      title: "Foco Total em Resultados & Vendas",
      description: "Um site bonito não basta; ele precisa converter visitantes em clientes reais. Estruturo cada página com gatilhos de conversão e chamadas estratégicas para o seu WhatsApp."
    },
    {
      icon: ShieldCheck,
      title: "Suporte Próximo & Direto",
      description: "Você fala diretamente comigo, o desenvolvedor do seu site. Sem atendentes intermediários ou demoras no suporte. Transparência total do primeiro ao último passo."
    }
  ];

  return (
    <section id="sobre" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="skill-tag uppercase tracking-widest inline-block mb-3">
            Conheça Quem Constrói o Seu Projeto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">Tiago Santos da Silva</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Desenvolvedor Full-Stack e Web Designer apaixonado por tecnologia, dedicado a criar experiências digitais marcantes para empresas de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Foto de Perfil em Destaque */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="p-6 glass rounded-2xl border border-white/10 shadow-2xl relative w-full max-w-md text-center">
              
              {/* Contêiner da foto com identificadores solicitados */}
              <div className="mb-6 flex justify-center">
                {/* id="foto-perfil" */}
                {/* SUBSTITUIR PELA FOTO REAL */}
                <ProfilePhoto size="lg" showBadge={false} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Tiago Santos da Silva
              </h3>
              <p className="text-xs font-mono text-violet-400 mb-4">
                Web Designer & Desenvolvedor Full-Stack
              </p>

              <div className="flex flex-col gap-2.5 text-xs text-gray-300 text-left glass p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Atendimento:</span>
                  <span className="text-white font-semibold">Nacional e Internacional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Especialidade:</span>
                  <span className="text-violet-400 font-semibold">Sites Corporativos & Landing Pages</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">WhatsApp:</span>
                  <span className="text-[#25D366] font-semibold">{CONTACT_INFO.phoneDisplay}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito: História & Proposta de Valor */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Minha missão é simples: <strong className="text-white">transformar a presença digital da sua empresa em uma poderosa máquina de atração de clientes.</strong>
              </p>
              <p>
                Atuo no desenvolvimento web combinando o melhor do <strong className="text-violet-400">UI/UX Design moderno</strong> com a robustez do <strong className="text-violet-400">Desenvolvimento Full-Stack</strong>. Seja para uma pequena empresa local que precisa se posicionar profissionalmente na internet, ou para uma grande corporação buscando portais e sistemas complexos, entrego soluções sob medida.
              </p>
              <p>
                Acredito que um site de sucesso deve ser <strong className="text-white">bonito no celular</strong>, <strong className="text-white">rápido no Google</strong> e <strong className="text-white">direto ao ponto na conversão</strong>. Cada linha de código que escrevo e cada pixel que meço têm um objetivo claro: trazer retorno real para o seu investimento.
              </p>
            </div>

            {/* Grid dos 4 Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 glass rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/25 flex items-center justify-center text-violet-400 mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Chamada para conversa no WhatsApp */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl("Olá Tiago! Vi sua apresentação no site e gostaria de conversar com você sobre um novo projeto.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-lg shadow-violet-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Iniciar Conversa com Tiago</span>
              </a>

              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg glass text-gray-300 hover:text-white font-medium text-sm transition-all"
              >
                <span>Ver Perfil no GitHub</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
