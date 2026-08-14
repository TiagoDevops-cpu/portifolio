import React from "react";
import { SERVICES_PACKAGES } from "../data/portfolioData";
import {
	Building2,
	Target,
	ShoppingBag,
	LayoutDashboard,
	CheckCircle2,
	MessageCircle,
	ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export const ServicesSection: React.FC = () => {
	const getServiceIcon = (iconName: string) => {
		switch (iconName) {
			case "Building2":
				return Building2;
			case "Target":
				return Target;
			case "ShoppingBag":
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
					<span className="text-[#A1A1A1] uppercase tracking-widest text-xs font-semibold mb-3 block">
						O Que Posso Fazer Pela Sua Empresa
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mt-1 mb-4">
						Soluções Web Sob Medida
					</h2>
					<p className="text-[#737373] text-base leading-relaxed">
						Atendimento especializado para pequenas empresas em fase de
						aceleração até corporações estabelecidas que necessitam de máxima
						performance digital.
					</p>
				</div>

				{/* Grid de Serviços */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{SERVICES_PACKAGES.map((service, index) => {
						const IconComp = getServiceIcon(service.icon);
						return (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-10% 0px" }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
									ease: "easeOut",
								}}
								whileHover={{ y: -5 }}
								className="bg-[#141414] rounded-2xl p-8 border border-[#262626] hover:border-[#404040] flex flex-col justify-between transition-colors"
							>
								<div>
									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
										<div className="w-12 h-12 rounded-lg bg-[#262626] flex items-center justify-center text-[#EDEDED]">
											<IconComp className="w-6 h-6" />
										</div>
										<span className="bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] px-3 py-1.5 rounded-md text-xs font-medium self-start sm:self-auto">
											{service.targetAudience}
										</span>
									</div>

									<h3 className="text-xl font-bold text-[#EDEDED] mb-3">
										{service.title}
									</h3>
									<p className="text-sm text-[#A1A1A1] leading-relaxed mb-8">
										{service.subtitle}
									</p>

									{/* Entregáveis */}
									<div className="space-y-4 mb-10">
										<span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-4">
											O que está incluído:
										</span>
										{service.deliverables.map((item, idx) => (
											<div
												key={idx}
												className="flex items-start gap-3 text-sm text-[#A1A1A1] group"
											>
												<CheckCircle2 className="w-4 h-4 text-[#EDEDED] shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
												<span>{item}</span>
											</div>
										))}
									</div>
								</div>

								{/* Botão de Solicitação no WhatsApp */}
								<div className="pt-6 border-t border-[#262626]">
									<motion.a
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										href={`https://wa.me/5567981233340?text=${encodeURIComponent(`Olá Tiago! Vi seu portfólio e gostaria de um orçamento para: ${service.title}`)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-white hover:bg-[#EDEDED] text-black font-semibold text-sm transition-colors group"
									>
										<MessageCircle className="w-4 h-4" />
										<span>Pedir Orçamento</span>
										<ArrowRight className="w-4 h-4 ml-1" />
									</motion.a>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
