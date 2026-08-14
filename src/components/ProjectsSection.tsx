import React from "react";
import { CONTACT_INFO } from "../data/portfolioData";
import {
	Linkedin,
	ArrowUpRight,
	Briefcase,
	CheckCircle2,
	Globe,
	ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

export const ProjectsSection: React.FC = () => {
	return (
		<section id="projetos" className="py-20 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#A1A1A1] uppercase tracking-widest text-xs font-semibold mb-3 block">
						Portfólio & Trabalhos Reais
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mt-1 mb-4">
						Projetos no LinkedIn
					</h2>
					<p className="text-[#737373] text-base leading-relaxed">
						Confira os cases de sucesso, artigos técnicos, demonstrações e
						publicações dos projetos mais recentes desenvolvidos por Tiago
						Santos da Silva diretamente em seu perfil profissional.
					</p>
				</div>

				{/* Interface de Destaque do LinkedIn */}
				<div className="bg-[#141414] rounded-2xl border border-[#262626] p-6 sm:p-10 max-w-4xl mx-auto">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-10">
						{/* Ícone e Badge do LinkedIn */}
						<div className="flex flex-col items-center shrink-0">
							<motion.div
								whileHover={{ rotate: 5, scale: 1.05 }}
								transition={{ type: "spring", stiffness: 300 }}
								className="relative w-28 h-28 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-center cursor-pointer"
							>
								<Linkedin className="w-12 h-12 text-[#EDEDED]" />
								<div className="absolute -bottom-3 -right-3 bg-[#0077B5] p-2.5 rounded-lg border-2 border-[#141414]">
									<Briefcase className="w-4 h-4 text-white" />
								</div>
							</motion.div>
							<span className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1]">
								<ShieldCheck className="w-4 h-4 text-emerald-500" />
								<span>Perfil Ativo</span>
							</span>
						</div>

						{/* Informações e Detalhes */}
						<div className="flex-1 text-center md:text-left space-y-5">
							<div>
								<h3 className="text-2xl sm:text-3xl font-bold text-[#EDEDED]">
									{CONTACT_INFO.name}
								</h3>
								<p className="text-sm text-[#A1A1A1] font-medium mt-1">
									{CONTACT_INFO.role}
								</p>
								<p className="text-sm text-[#737373] mt-1">
									{CONTACT_INFO.location}
								</p>
							</div>

							{/* Lista de Recursos e Projetos */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#262626]">
								<div className="flex items-start gap-3 text-left group">
									<CheckCircle2 className="w-4 h-4 text-[#EDEDED] shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
									<div>
										<h4 className="text-sm font-semibold text-[#EDEDED]">
											Sites Institucionais
										</h4>
										<p className="text-xs text-[#737373] mt-0.5">
											React, TypeScript e Tailwind CSS.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 text-left group">
									<CheckCircle2 className="w-4 h-4 text-[#EDEDED] shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
									<div>
										<h4 className="text-sm font-semibold text-[#EDEDED]">
											Landing Pages
										</h4>
										<p className="text-xs text-[#737373] mt-0.5">
											Velocidade e resultados de vendas.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 text-left group">
									<CheckCircle2 className="w-4 h-4 text-[#EDEDED] shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
									<div>
										<h4 className="text-sm font-semibold text-[#EDEDED]">
											Sistemas Web
										</h4>
										<p className="text-xs text-[#737373] mt-0.5">
											Desenvolvimento Full-Stack personalizado.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 text-left group">
									<CheckCircle2 className="w-4 h-4 text-[#EDEDED] shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
									<div>
										<h4 className="text-sm font-semibold text-[#EDEDED]">
											Demonstrações
										</h4>
										<p className="text-xs text-[#737373] mt-0.5">
											Artigos detalhados no LinkedIn.
										</p>
									</div>
								</div>
							</div>

							{/* Botão Principal de Ação - Link Direto para o LinkedIn */}
							<div className="pt-6 flex flex-col sm:flex-row items-center gap-4 border-t border-[#262626]">
								<motion.a
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									href={CONTACT_INFO.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-md bg-[#0077B5] hover:bg-[#006097] text-white font-semibold text-sm transition-colors group"
								>
									<Linkedin className="w-4 h-4 fill-current" />
									<span>Acessar Portfólio</span>
									<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
								</motion.a>
								<motion.a
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									href={CONTACT_INFO.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-[#EDEDED] font-semibold text-sm transition-colors"
								>
									<Globe className="w-4 h-4 text-[#A1A1A1]" />
									<span>Ver Perfil</span>
								</motion.a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
