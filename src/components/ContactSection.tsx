import React, { useState } from "react";
import { CONTACT_INFO, getWhatsAppUrl } from "../data/portfolioData";
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	MessageCircle,
	Send,
	CheckCircle2,
	Clock,
	Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ContactSection: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		company: "",
		service: "Site Institucional",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();

		setSubmitted(true);

		// Constrói a mensagem a partir do formulário
		const whatsappMessage = `
Olá Tiago! Venho através do seu portfólio. Gostaria de conversar sobre um projeto.
*Nome:* ${formData.name || "Não informado"}
*Telefone/Contato:* ${formData.phone || "Não informado"}
*Empresa/Projeto:* ${formData.company || "Não informado"}
*Serviço de Interesse:* ${formData.service}

*Detalhes/Mensagem:*
${formData.message || "Gostaria de mais informações sobre seus serviços."}
    `.trim();

		// Redireciona para o WhatsApp após um breve delay
		setTimeout(() => {
			window.open(getWhatsAppUrl(whatsappMessage), "_blank");
			setSubmitted(false);
			setFormData({
				name: "",
				phone: "",
				company: "",
				service: "Site Institucional",
				message: "",
			});
		}, 1200);
	};

	return (
		<section id="contato" className="py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#A1A1A1] uppercase tracking-widest text-xs font-semibold mb-3 block">
						Próximo Passo
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mt-1 mb-4">
						Vamos Iniciar Seu Projeto
					</h2>
					<p className="text-[#737373] text-base leading-relaxed">
						Seja para um novo site, reformulação de sistema, ou tirar uma ideia
						do papel. Entre em contato diretamente.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Coluna Esquerda: Formas de Contato Direto */}
					<div className="lg:col-span-5 space-y-6">
						{/* Box Principal de Contato (WhatsApp) */}
						<motion.div
							whileHover={{ scale: 1.02 }}
							className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#404040] transition-colors relative overflow-hidden group"
						>
							<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
								<MessageCircle className="w-32 h-32 text-emerald-500" />
							</div>

							<h3 className="text-2xl font-bold text-[#EDEDED] mb-2">
								WhatsApp Direto
							</h3>
							<p className="text-[#A1A1A1] text-sm mb-8 max-w-[80%]">
								Resposta mais rápida. Clique abaixo para iniciar uma conversa
								imediatamente com Tiago.
							</p>

							<motion.a
								whileTap={{ scale: 0.95 }}
								href={getWhatsAppUrl(
									"Olá Tiago! Vi o seu portfólio e gostaria de falar sobre um projeto.",
								)}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-white text-black hover:bg-[#EDEDED] font-bold text-sm transition-colors"
							>
								<MessageCircle className="w-5 h-5" />
								<span>Conversar no WhatsApp</span>
							</motion.a>
						</motion.div>

						{/* Grid de Redes e Extras */}
						<div className="grid grid-cols-2 gap-4">
							{/* GitHub */}
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href={CONTACT_INFO.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-5 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#404040] transition-colors flex flex-col justify-between group"
							>
								<div className="flex items-center justify-between mb-3">
									<div className="w-10 h-10 rounded-xl bg-[#262626] flex items-center justify-center text-[#EDEDED] group-hover:bg-[#404040] transition-colors">
										<Github className="w-5 h-5" />
									</div>
								</div>
								<div>
									<span className="text-sm font-bold text-[#EDEDED] block group-hover:text-white">
										GitHub Oficial
									</span>
									<span className="text-[11px] text-[#737373] block truncate mt-0.5">
										@TiagoDevops-cpu
									</span>
								</div>
							</motion.a>

							{/* LinkedIn */}
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href={CONTACT_INFO.linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-5 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#404040] transition-colors flex flex-col justify-between group"
							>
								<div className="flex items-center justify-between mb-3">
									<div className="w-10 h-10 rounded-xl bg-[#262626] flex items-center justify-center text-[#EDEDED] group-hover:bg-[#404040] transition-colors">
										<Linkedin className="w-5 h-5" />
									</div>
								</div>
								<div>
									<span className="text-sm font-bold text-[#EDEDED] block group-hover:text-white">
										LinkedIn
									</span>
									<span className="text-[11px] text-[#737373] block truncate mt-0.5">
										Tiago Santos da Silva
									</span>
								</div>
							</motion.a>
						</div>

						{/* Informações Complementares */}
						<div className="p-5 rounded-2xl bg-[#141414] border border-[#262626] space-y-4 text-xs text-[#A1A1A1]">
							<div className="flex items-center gap-3">
								<MapPin className="w-4 h-4 text-[#EDEDED] shrink-0" />
								<span>{CONTACT_INFO.location}</span>
							</div>
							<div className="flex items-center gap-3">
								<Clock className="w-4 h-4 text-[#EDEDED] shrink-0" />
								<span>Atendimento: Segunda a Sábado</span>
							</div>
							<a
								href={`mailto:${CONTACT_INFO.email}`}
								className="flex items-center gap-3 hover:text-white transition-colors"
							>
								<Mail className="w-4 h-4 text-[#EDEDED] shrink-0" />
								<span>{CONTACT_INFO.email}</span>
							</a>
						</div>
					</div>

					{/* Coluna Direita: Formulário Direto */}
					<div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative">
						<div className="mb-8 border-b border-[#262626] pb-6">
							<h3 className="text-xl font-bold text-[#EDEDED] mb-2 flex items-center gap-2">
								<Sparkles className="w-5 h-5 text-[#EDEDED]" />
								Enviar Mensagem Rápida
							</h3>
							<p className="text-sm text-[#737373]">
								Preencha os campos abaixo para conversar diretamente com o Tiago
								sobre a demanda do seu site.
							</p>
						</div>

						<form onSubmit={handleSubmitForm} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-2">
										Seu Nome Completo *
									</label>
									<input
										type="text"
										required
										placeholder="Ex: Roberto Andrade"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="w-full bg-[#050505] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#EDEDED] placeholder-[#737373] focus:outline-none focus:border-[#EDEDED] transition-colors"
									/>
								</div>
								<div>
									<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-2">
										WhatsApp ou Telefone
									</label>
									<input
										type="text"
										placeholder="Ex: (11) 99999-9999"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
										className="w-full bg-[#050505] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#EDEDED] placeholder-[#737373] focus:outline-none focus:border-[#EDEDED] transition-colors"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-2">
										Nome da Empresa / Projeto
									</label>
									<input
										type="text"
										placeholder="Ex: Minha Empresa Corp"
										value={formData.company}
										onChange={(e) =>
											setFormData({ ...formData, company: e.target.value })
										}
										className="w-full bg-[#050505] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#EDEDED] placeholder-[#737373] focus:outline-none focus:border-[#EDEDED] transition-colors"
									/>
								</div>
								<div>
									<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-2">
										Tipo de Serviço Desejado
									</label>
									<select
										value={formData.service}
										onChange={(e) =>
											setFormData({ ...formData, service: e.target.value })
										}
										className="w-full bg-[#050505] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#EDEDED] transition-colors cursor-pointer"
									>
										<option value="Site Institucional">
											Site Institucional
										</option>
										<option value="Landing Page de Alta Conversão">
											Landing Page de Alta Conversão
										</option>
										<option value="Loja Virtual / E-Commerce">
											Loja Virtual / E-Commerce
										</option>
										<option value="Sistema Web Sob Medida">
											Sistema Web Sob Medida
										</option>
										<option value="Redesign / Otimização de Site Existente">
											Redesign / Otimização de Site Existente
										</option>
									</select>
								</div>
							</div>

							<div>
								<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-2">
									Detalhes do Projeto ou Dúvidas
								</label>
								<textarea
									rows={4}
									placeholder="Conte um pouco sobre o objetivo do seu site e como prefere que o projeto seja conduzido..."
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									className="w-full bg-[#050505] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#EDEDED] placeholder-[#737373] focus:outline-none focus:border-[#EDEDED] transition-colors resize-none"
								></textarea>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								disabled={submitted}
								className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-white hover:bg-[#EDEDED] text-black font-bold text-sm transition-colors relative"
							>
								<AnimatePresence mode="wait">
									{submitted ? (
										<motion.div
											key="submitted"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											className="flex items-center gap-2 text-emerald-600"
										>
											<CheckCircle2 className="w-5 h-5" />
											<span>Redirecionando para o WhatsApp...</span>
										</motion.div>
									) : (
										<motion.div
											key="idle"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											className="flex items-center gap-2"
										>
											<Send className="w-4 h-4" />
											<span>Enviar Orçamento para o WhatsApp de Tiago</span>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
