import React from "react";
import {
	ShieldCheck,
	Zap,
	Smartphone,
	Sparkles,
	UserCheck,
	Clock,
} from "lucide-react";

export const WhyChooseMe: React.FC = () => {
	const reasons = [
		{
			icon: UserCheck,
			title: "Atendimento 100% Direto com o Dev",
			description:
				"Você se comunica diretamente com quem desenvolve seu site. Sem ruídos de comunicação, gerentes de conta intermediários ou atrasos desnecessários.",
		},
		{
			icon: Zap,
			title: "Performance Extrema (Google PageSpeed 90+)",
			description:
				"Sites construídos com tecnologia de ponta (React/Tailwind) para carregar de forma instantânea no celular e no computador, reduzindo desistências.",
		},
		{
			icon: Smartphone,
			title: "Design Responsivo & Mobile First",
			description:
				"Mais de 80% dos seus clientes acessarão seu site pelo smartphone. Garanto uma navegação perfeita, rápida e intuitiva em telas pequenas.",
		},
		{
			icon: Sparkles,
			title: "Visual Moderno & Identidade Única",
			description:
				"Design limpo, profissional e alinhado com as maiores tendências tecnológicas globais para transmitir máxima credibilidade à sua marca.",
		},
		{
			icon: Clock,
			title: "Cumprimento Rigoroso de Prazos",
			description:
				"Cronograma transparente com entregas pontuais. Você acompanha o progresso do desenvolvimento passo a passo até o lançamento final.",
		},
		{
			icon: ShieldCheck,
			title: "Suporte e Segurança Garantidos",
			description:
				"Acompanhamento pós-lançamento para ajustes finos, garantia contra falhas técnicas e orientações práticas para você operar seu site.",
		},
	];

	return (
		<section className="py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#A1A1A1] uppercase tracking-widest text-xs font-semibold mb-3 block">
						Diferenciais Competitivos
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mt-1 mb-4">
						Por Que Escolher Tiago Santos?
					</h2>
					<p className="text-[#737373] text-base leading-relaxed">
						A união perfeita entre estética moderna, engenharia de software
						sólida e visão estratégica de negócios para impulsionar seus
						resultados.
					</p>
				</div>

				{/* Grid dos Diferenciais */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{reasons.map((item, idx) => {
						const IconComp = item.icon;
						return (
							<div
								key={idx}
								className="bg-[#141414] border border-[#262626] rounded-xl p-8 hover:border-[#404040] transition-colors group"
							>
								<div className="w-12 h-12 rounded-lg bg-[#262626] flex items-center justify-center text-[#EDEDED] mb-6 transition-colors">
									<IconComp className="w-6 h-6" />
								</div>
								<h3 className="text-lg font-bold text-[#EDEDED] mb-3 group-hover:text-white transition-colors">
									{item.title}
								</h3>
								<p className="text-sm text-[#737373] leading-relaxed">
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
