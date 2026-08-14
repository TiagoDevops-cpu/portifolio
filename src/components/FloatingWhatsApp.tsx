import React, { useState, useEffect, Suspense, lazy } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { QuickMessageModal } from "./QuickMessageModal";
import { useIsMobile } from "../hooks/useIsMobile";

const NeonIcon3D = lazy(() =>
	import("./NeonIcon3D").then((mod) => ({ default: mod.NeonIcon3D })),
);

export const FloatingWhatsApp: React.FC = () => {
	const [showTooltip, setShowTooltip] = useState<boolean>(true);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const isMobile = useIsMobile();

	// Ocultar automaticamente no mobile após alguns segundos para não atrapalhar a navegação
	useEffect(() => {
		const timer = setTimeout(() => {
			if (window.innerWidth < 768) {
				setShowTooltip(false);
			}
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3 group">
				<AnimatePresence>
					{showTooltip && (
						<motion.div
							initial={{ opacity: 0, y: 10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 10, scale: 0.95 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							className="relative bg-[#1A1A1A] border border-[#262626] text-[#EDEDED] px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-lg w-[180px] sm:w-auto sm:max-w-[220px] text-[11px] sm:text-xs leading-relaxed"
						>
							<button
								onClick={() => setShowTooltip(false)}
								className="absolute -top-2 -right-2 bg-[#262626] rounded-full p-1 text-[#A1A1A1] hover:text-white border border-[#404040] transition-colors"
							>
								<X className="w-3 h-3 sm:w-3 sm:h-3" />
							</button>
							<span className="font-semibold block mb-0.5 sm:mb-1">
								Precisa de um site?
							</span>
							Fale comigo para orçamentos rápidos.
							<div className="absolute -bottom-1.5 right-6 sm:right-8 w-3 h-3 bg-[#1A1A1A] border-b border-r border-[#262626] rotate-45"></div>
						</motion.div>
					)}
				</AnimatePresence>

				<motion.button
					onClick={() => setIsModalOpen(true)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-transparent flex items-center justify-center cursor-pointer relative"
					aria-label="Falar no WhatsApp"
				>
					<Suspense
						fallback={
							<div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#262626] animate-pulse flex items-center justify-center">
								<div className="w-6 h-6 rounded-full bg-[#262626]"></div>
							</div>
						}
					>
						{isMobile ? (
							<div className="w-14 h-14 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center text-white">
								<MessageCircle className="w-6 h-6" />
							</div>
						) : (
							<NeonIcon3D onClick={() => setIsModalOpen(true)} />
						)}
					</Suspense>
				</motion.button>
			</div>

			<QuickMessageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
};
