import React, { useState } from "react";
import { Calculator, MessageCircle, Check, Send } from "lucide-react";
import { CONTACT_INFO } from "../data/portfolioData";

export const InteractiveSimulator: React.FC = () => {
	const [siteType, setSiteType] = useState<string>("Landing Page");
	const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
		"Layout Responsivo",
		"Integração WhatsApp Direta",
		"Otimização Google (SEO)",
	]);

	const siteTypes = [
		{
			id: "Landing Page",
			title: "Landing Page",
			desc: "Focada em conversão rápida de anúncios",
		},
		{
			id: "Site Institucional",
			title: "Site Institucional",
			desc: "Presença corporativa completa para sua empresa",
		},
		{
			id: "Loja Virtual / E-Commerce",
			title: "E-Commerce",
			desc: "Venda de produtos online com PIX e Cartão",
		},
		{
			id: "Sistema Web / SaaS",
			title: "Sistema Web",
			desc: "Plataforma sob medida com painel administrativo",
		},
	];

	const availableFeatures = [
		"Layout Responsivo (Celulares e Tablets)",
		"Integração WhatsApp Direta",
		"Otimização Google (SEO)",
		"Design Exclusivo em Figma",
		"Formulários de Contato com E-mail",
		"Catálogo / Cardápio Digital",
		"Painel Administrativo para Edição",
		"Domínio e Hospedagem Configurados",
	];

	const toggleFeature = (feature: string) => {
		if (selectedFeatures.includes(feature)) {
			setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
		} else {
			setSelectedFeatures([...selectedFeatures, feature]);
		}
	};

	const generateWhatsAppMessage = () => {
		const text =
			`Olá Tiago! Montei uma simulação de projeto pelo seu site e gostaria de um orçamento:\n\n` +
			`📌 *Tipo de Projeto:* ${siteType}\n` +
			`⚡ *Recursos Desejados:*\n${selectedFeatures.map((f) => `  • ${f}`).join("\n")}\n\n` +
			`Pode me passar uma estimativa de prazos e investimento?`;
		return `https://wa.me/5567981233340?text=${encodeURIComponent(text)}`;
	};

	return (
		<section className="py-16 relative">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-10 relative overflow-hidden">
					{/* Cabeçalho */}
					<div className="text-center max-w-2xl mx-auto mb-10">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] text-xs font-semibold mb-4">
							<Calculator className="w-4 h-4" />
							<span>Simulador de Projeto</span>
						</div>
						<h3 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-3">
							Monte o Seu Projeto & Receba a Estimativa
						</h3>
						<p className="text-sm text-[#737373]">
							Selecione as opções abaixo para gerar uma mensagem pronta para
							envio direto no WhatsApp.
						</p>
					</div>

					<div className="space-y-10">
						{/* 1. Escolha do Tipo de Site */}
						<div>
							<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-4">
								1. Qual é o tipo de site que sua empresa precisa?
							</label>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								{siteTypes.map((type) => (
									<button
										key={type.id}
										type="button"
										onClick={() => setSiteType(type.id)}
										className={`p-5 rounded-xl border text-left transition-colors flex flex-col justify-between ${
											siteType === type.id
												? "bg-white border-white text-black"
												: "bg-[#1A1A1A] border-[#262626] text-[#A1A1A1] hover:border-[#404040]"
										}`}
									>
										<div>
											<span
												className={`font-bold text-sm block mb-1.5 ${siteType === type.id ? "text-black" : "text-[#EDEDED]"}`}
											>
												{type.title}
											</span>
											<span
												className={`text-xs leading-relaxed block ${siteType === type.id ? "text-gray-800" : "text-[#737373]"}`}
											>
												{type.desc}
											</span>
										</div>
										{siteType === type.id && (
											<Check className="w-5 h-5 text-black mt-4 self-end" />
										)}
									</button>
								))}
							</div>
						</div>

						{/* 2. Escolha dos Recursos */}
						<div>
							<label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1A1] mb-4">
								2. Quais diferenciais e recursos você deseja incluir?
							</label>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
								{availableFeatures.map((feat, idx) => {
									const isChecked = selectedFeatures.includes(feat);
									return (
										<button
											key={idx}
											type="button"
											onClick={() => toggleFeature(feat)}
											className={`p-4 rounded-lg border text-sm font-medium text-left transition-colors flex items-center justify-between ${
												isChecked
													? "bg-[#1A1A1A] border-[#EDEDED] text-[#EDEDED]"
													: "bg-[#141414] border-[#262626] text-[#737373] hover:border-[#404040]"
											}`}
										>
											<span className="pr-3 leading-snug">{feat}</span>
											<div
												className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-colors ${
													isChecked
														? "bg-white border-white text-black"
														: "border-[#404040] bg-[#141414]"
												}`}
											>
												{isChecked && (
													<Check className="w-3.5 h-3.5 stroke-[3]" />
												)}
											</div>
										</button>
									);
								})}
							</div>
						</div>

						{/* 3. Botão de Envio */}
						<div className="pt-8 border-t border-[#262626] text-center flex flex-col items-center">
							<a
								href={generateWhatsAppMessage()}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-white hover:bg-[#EDEDED] text-black font-bold text-sm transition-colors"
							>
								<MessageCircle className="w-5 h-5" />
								<span>Enviar Simulação no WhatsApp</span>
								<Send className="w-4 h-4 ml-1" />
							</a>
							<p className="text-xs text-[#737373] mt-4">
								Você será redirecionado para o WhatsApp com a mensagem
								pré-formatada do seu projeto. Resposta rápida garantida!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
