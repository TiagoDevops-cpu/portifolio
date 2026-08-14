import React, { useState } from "react";
import { SKILLS_LIST } from "../data/portfolioData";
import { Code2, Server, Palette, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const SkillsSection: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<string>("todos");

	const categories = [
		{ id: "todos", label: "Todas as Habilidades" },
		{ id: "frontend", label: "Frontend & UI" },
		{ id: "backend", label: "Backend & APIs" },
		{ id: "design", label: "Design & UX" },
		{ id: "outros", label: "Otimização & Ferramentas" },
	];

	const filteredSkills =
		activeCategory === "todos"
			? SKILLS_LIST
			: SKILLS_LIST.filter((skill) => skill.category === activeCategory);

	const getCategoryIcon = (category: string) => {
		switch (category) {
			case "frontend":
				return Code2;
			case "backend":
				return Server;
			case "design":
				return Palette;
			default:
				return Zap;
		}
	};

	return (
		<section id="habilidades" className="py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#A1A1A1] uppercase tracking-widest text-xs font-semibold mb-3 block">
						Stack Tecnológica
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mt-1 mb-4">
						Tecnologias & Habilidades
					</h2>
					<p className="text-[#737373] text-base leading-relaxed">
						Ferramentas e linguagens utilizadas para criar soluções web
						completas, modernas e preparadas para crescer com a sua empresa.
					</p>
				</div>

				{/* Filtros de Categoria */}
				<div className="flex flex-wrap items-center justify-center gap-3 mb-12">
					{categories.map((cat) => (
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							key={cat.id}
							onClick={() => setActiveCategory(cat.id)}
							className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
								activeCategory === cat.id
									? "bg-white text-black"
									: "bg-[#141414] text-[#A1A1A1] border border-[#262626] hover:text-[#EDEDED] hover:bg-[#1A1A1A]"
							}`}
						>
							{cat.label}
						</motion.button>
					))}
				</div>

				{/* Grid Visual de Habilidades */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					<AnimatePresence mode="popLayout">
						{filteredSkills.map((skill) => {
							const IconComp = getCategoryIcon(skill.category);
							return (
								<motion.div
									key={skill.id}
									layout
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.3 }}
									whileHover={{ y: -5 }}
									className="bg-[#141414] rounded-xl p-6 border border-[#262626] transition-colors hover:border-[#404040]"
								>
									<div className="flex items-start justify-between mb-5">
										<div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-[#EDEDED]">
											<IconComp className="w-5 h-5" />
										</div>
										<span className="bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] px-3 py-1 rounded-full text-xs font-medium">
											{skill.categoryLabel}
										</span>
									</div>

									<h3 className="text-lg font-bold text-[#EDEDED] mb-2">
										{skill.name}
									</h3>

									<p className="text-sm text-[#737373] leading-relaxed mb-6 min-h-[40px]">
										{skill.description}
									</p>

									{/* Barra de Nível Visual */}
									<div className="space-y-2 pt-4 border-t border-[#262626]">
										<div className="flex justify-between items-center text-xs font-medium">
											<span className="text-[#A1A1A1]">Domínio Prático</span>
											<span className="text-[#EDEDED]">{skill.level}%</span>
										</div>
										<div className="w-full h-1 bg-[#262626] rounded-full overflow-hidden relative">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												viewport={{ once: true }}
												transition={{
													duration: 1,
													delay: 0.2,
													ease: "easeOut",
												}}
												className="absolute left-0 top-0 h-full bg-white rounded-full"
											/>
										</div>
									</div>
								</motion.div>
							);
						})}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
};
