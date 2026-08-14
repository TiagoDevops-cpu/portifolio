import React, { useState, useEffect } from "react";
import { ArrowRight, Code2 } from "lucide-react";
import {
	CONTACT_INFO,
	STATS_LIST,
	TYPING_ROLES,
	getWhatsAppUrl,
} from "../data/portfolioData";
import { motion, AnimatePresence } from "motion/react";

export const Hero: React.FC = () => {
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="hero"
			className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
		>
			{/* Text Content */}
			<div className="flex-1 text-left">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] text-xs font-medium mb-8"
				>
					<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
					Disponível para novos projetos
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
					className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#EDEDED] leading-[1.1] mb-6"
				>
					Especialista em <br />
					<div className="grid overflow-hidden relative w-full">
						<AnimatePresence mode="wait">
							<motion.span
								key={currentRoleIndex}
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -40, opacity: 0 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								className="text-[#737373] col-start-1 row-start-1 w-full"
							>
								{TYPING_ROLES[currentRoleIndex]}
							</motion.span>
						</AnimatePresence>
					</div>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
					className="text-lg sm:text-xl text-[#A1A1A1] mb-10 max-w-2xl leading-relaxed"
				>
					Desenvolvo soluções digitais completas, desde landing pages de alta
					conversão até sistemas web complexos. Transformando ideias em produtos
					escaláveis e eficientes.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
					className="flex flex-col sm:flex-row items-center gap-4"
				>
					<motion.a
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						href={getWhatsAppUrl(
							"Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para o meu projeto web.",
						)}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white text-black font-semibold text-sm hover:bg-[#EDEDED] transition-colors"
					>
						Iniciar Projeto
						<ArrowRight className="w-4 h-4" />
					</motion.a>

					<motion.a
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						href="#projetos"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#1A1A1A] border border-[#262626] text-[#EDEDED] font-semibold text-sm hover:bg-[#262626] transition-colors"
					>
						<Code2 className="w-4 h-4 text-[#737373]" />
						Ver Portfólio
					</motion.a>
				</motion.div>

				{/* Stats Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#262626]"
				>
					{STATS_LIST.map((stat, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
							className="flex flex-col gap-1"
						>
							<span className="text-2xl lg:text-3xl font-bold text-[#EDEDED] tracking-tight">
								{stat.value}
							</span>
							<span className="text-xs text-[#A1A1A1] font-medium uppercase tracking-wider">
								{stat.label}
							</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
