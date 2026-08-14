import React, { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getWhatsAppUrl } from "../data/portfolioData";

interface QuickMessageModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const QuickMessageModal: React.FC<QuickMessageModalProps> = ({
	isOpen,
	onClose,
}) => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		company: "",
		service: "Site Institucional",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	// Prevent scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);

		const text = `Olá Tiago! Vi seu portfólio e gostaria de falar sobre um projeto.
    
*Nome:* ${formData.name}
*Empresa:* ${formData.company || "Não informado"}
*Telefone:* ${formData.phone || "Não informado"}
*Serviço de Interesse:* ${formData.service}

*Detalhes da Demanda:*
${formData.message || "Sem detalhes adicionais."}`;

		setTimeout(() => {
			window.open(getWhatsAppUrl(text), "_blank");
			setSubmitted(false);
			onClose();
		}, 1500);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl z-10"
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#262626] rounded-full p-2 text-[#A1A1A1] hover:text-white transition-colors"
						>
							<X className="w-5 h-5" />
						</button>

						<div className="mb-8 border-b border-[#262626] pb-6 pr-8">
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
											<span>Enviar Orçamento para o WhatsApp</span>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</form>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
