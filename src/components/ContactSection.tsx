import React, { useState } from 'react';
import { MessageCircle, Phone, Github, Linkedin, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: 'Site Institucional',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Constrói a mensagem formatada para envio no WhatsApp
    const messageText = `Olá Tiago! Meu nome é *${formData.name}*${formData.company ? ` (Empresa: ${formData.company})` : ''}.\n\n` +
      `📞 *Telefone:* ${formData.phone || 'Não informado'}\n` +
      `💼 *Interesse:* ${formData.service}\n\n` +
      `💬 *Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/5567981233340?text=${encodeURIComponent(messageText)}`;
    
    // Abre no WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="skill-tag uppercase tracking-widest inline-block mb-3">
            Vamos Tirar Seu Projeto do Papel?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">Contato Comercial</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Estou à disposição para analisar as necessidades da sua empresa e propor a melhor solução em desenvolvimento web. Atendimento ágil e personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Coluna Esquerda: Canais Diretos & Redes Sociais */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card WhatsApp Principal */}
            <a
              href={getWhatsAppUrl("Olá Tiago! Vi a seção de contato do seu portfólio e gostaria de solicitar um orçamento para meu projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/80 via-fuchsia-950/60 to-black/60 border border-violet-500/40 hover:border-violet-400 transition-all duration-300 shadow-xl flex items-center justify-between group cursor-pointer glass"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 fill-emerald-400 stroke-black" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider block">
                    Canal Principal (Atendimento Rápido)
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Falar no WhatsApp
                  </h3>
                  <p className="text-xs text-gray-300 font-mono mt-0.5">
                    {CONTACT_INFO.phoneDisplay}
                  </p>
                </div>
              </div>
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Card Ligação Telefônica Direct (tel:) */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="p-6 rounded-2xl glass border border-white/5 hover:border-violet-500/40 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl glass border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-gray-400 tracking-wider block">
                    Ligação Direta
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                    {CONTACT_INFO.phoneDisplay}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Clique para ligar agora
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-violet-400 font-bold group-hover:translate-x-1 transition-transform">
                Ligar
              </span>
            </a>

            {/* Links Sociais: GitHub & LinkedIn */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* GitHub */}
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass border border-white/5 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-200 group-hover:text-violet-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">github.com</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-violet-300">
                    GitHub Oficial
                  </span>
                  <span className="text-[11px] text-gray-400 block truncate">
                    @TiagoDevops-cpu
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass border border-white/5 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-violet-400 group-hover:text-fuchsia-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">linkedin.com</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-violet-300">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-gray-400 block truncate">
                    Tiago Santos da Silva
                  </span>
                </div>
              </a>

            </div>

            {/* Informações Complementares */}
            <div className="p-5 rounded-2xl glass border border-white/5 space-y-3 text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento: Segunda a Sábado (Respostas em até 1h)</span>
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Coluna Direita: Formulário Direto com Redirecionamento WhatsApp */}
          <div className="lg:col-span-7 glass border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                Enviar Mensagem Rápida
              </h3>
              <p className="text-xs text-gray-300">
                Preencha os campos abaixo para conversar diretamente com o Tiago sobre a demanda do seu site.
              </p>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Roberto Andrade"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Seu WhatsApp ou Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: (11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Nome da Empresa / Projeto
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Minha Empresa Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Tipo de Serviço Desejado
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                  >
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                    <option value="Loja Virtual / E-Commerce">Loja Virtual / E-Commerce</option>
                    <option value="Sistema Web Sob Medida">Sistema Web Sob Medida</option>
                    <option value="Redesign / Otimização de Site Existente">Redesign / Otimização de Site Existente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Detalhes do Projeto ou Dúvidas
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre o objetivo do seu site e como prefere que o projeto seja conduzido..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-violet-900/40 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Orçamento para o WhatsApp de Tiago</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Redirecionando para o WhatsApp... Caso a janela não abra, utilize o botão acima!</span>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
