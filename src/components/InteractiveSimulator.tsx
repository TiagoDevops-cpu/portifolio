import React, { useState } from 'react';
import { Calculator, MessageCircle, Check, Sparkles, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const InteractiveSimulator: React.FC = () => {
  const [siteType, setSiteType] = useState<string>('Landing Page');
  const [pageCount, setPageCount] = useState<string>('Página Única (Landing Page)');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Layout Responsivo',
    'Integração WhatsApp Direta',
    'Otimização Google (SEO)'
  ]);

  const siteTypes = [
    { id: 'Landing Page', title: 'Landing Page', desc: 'Focada em conversão rápida de anúncios' },
    { id: 'Site Institucional', title: 'Site Institucional', desc: 'Presença corporativa completa para sua empresa' },
    { id: 'Loja Virtual / E-Commerce', title: 'E-Commerce', desc: 'Venda de produtos online com PIX e Cartão' },
    { id: 'Sistema Web / SaaS', title: 'Sistema Web', desc: 'Plataforma sob medida com painel administrativo' }
  ];

  const availableFeatures = [
    'Layout Responsivo (Celulares e Tablets)',
    'Integração WhatsApp Direta',
    'Otimização Google (SEO)',
    'Design Exclusivo em Figma',
    'Formulários de Contato com E-mail',
    'Catálogo / Cardápio Digital',
    'Painel Administrativo para Edição',
    'Domínio e Hospedagem Configurados'
  ];

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Olá Tiago! Montei uma simulação de projeto pelo seu site e gostaria de um orçamento:\n\n` +
      `📌 *Tipo de Projeto:* ${siteType}\n` +
      `📄 *Estrutura de Páginas:* ${pageCount}\n` +
      `⚡ *Recursos Desejados:*\n${selectedFeatures.map(f => `  • ${f}`).join('\n')}\n\n` +
      `Pode me passar uma estimativa de prazos e investimento?`;

    return `https://wa.me/5567981233340?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-16 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass border border-violet-500/30 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Cabeçalho */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skill-tag mb-3">
              <Calculator className="w-4 h-4 text-violet-400" />
              <span>Simulador de Projeto em 1 Minuto</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Monte o Seu Projeto & Receba a Estimativa
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Selecione as opções abaixo para gerar uma mensagem pronta para envio direto no WhatsApp do Tiago.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* 1. Escolha do Tipo de Site */}
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-gray-400 mb-3">
                1. Qual é o tipo de site que sua empresa precisa?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {siteTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSiteType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      siteType === type.id
                        ? 'bg-violet-600/20 border-violet-500 text-white shadow-lg'
                        : 'glass border-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm block mb-1 text-white">
                        {type.title}
                      </span>
                      <span className="text-[11px] text-gray-400 leading-tight block">
                        {type.desc}
                      </span>
                    </div>
                    {siteType === type.id && (
                      <Check className="w-4 h-4 text-violet-400 mt-2 self-end" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Escolha dos Recursos */}
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-gray-400 mb-3">
                2. Quais diferenciais e recursos você deseja incluir?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {availableFeatures.map((feat, idx) => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-lg border text-xs font-medium text-left transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-300'
                          : 'glass border-white/5 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <span className="pr-2">{feat}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-fuchsia-500 border-fuchsia-400 text-black' : 'border-gray-700 bg-black/50'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Botão de Envio para WhatsApp com Resumo */}
            <div className="pt-6 border-t border-white/10 text-center flex flex-col items-center">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white font-extrabold text-base shadow-xl shadow-violet-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-violet-600" />
                <span>Enviar Simulação no WhatsApp de Tiago</span>
                <Send className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-gray-400 mt-3">
                Você será redirecionado para o WhatsApp com a mensagem pré-formatada do seu projeto. Resposta rápida garantida!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
