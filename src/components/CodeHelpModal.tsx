import React, { useState } from "react";
import {
	HelpCircle,
	X,
	Code,
	FileText,
	Camera,
	Link as LinkIcon,
	Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const CodeHelpModal: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			{/* Botão Guia do Desenvolvedor (Canto inferior esquerdo) */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] hover:text-white text-xs font-semibold shadow-xl flex items-center gap-2 transition-colors cursor-pointer"
				title="Guia de Edição do Código do Portfólio"
			>
				<Code className="w-4 h-4 text-emerald-500" />
				<span className="hidden sm:inline">Guia do Código</span>
			</motion.button>

			{/* Modal explicativo das áreas de edição */}
			<AnimatePresence>
				{isOpen && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						{/* Backdrop Blur Layer */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute inset-0 bg-black/85 backdrop-blur-md"
							onClick={() => setIsOpen(false)}
						/>

						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 20 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="bg-[#050505] border border-[#262626] rounded-2xl max-w-xl w-full p-6 text-[#EDEDED] relative shadow-2xl space-y-4"
						>
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-4 right-4 p-2 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] hover:text-white transition-colors"
							>
								<X className="w-5 h-5" />
							</button>

							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-center text-emerald-500">
									<FileText className="w-5 h-5" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-white">
										Guia Rápido para Atualizar Seu Portfólio
									</h3>
									<p className="text-xs text-[#A1A1A1]">
										Instruções para Tiago Santos da Silva personalizar o código
									</p>
								</div>
							</div>

							<div className="space-y-3 text-xs text-[#737373] pt-2">
								<div className="p-3 bg-[#141414] rounded-xl border border-[#262626]">
									<div className="flex items-center gap-2 font-bold text-[#EDEDED] mb-1">
										<Camera className="w-4 h-4 text-emerald-500" /> 1. Foto de
										Perfil
									</div>
									<p className="text-[#A1A1A1]">
										Para aplicar sua foto real exata, basta clicar na foto de
										perfil na página e selecionar o arquivo de imagem do seu
										computador ou celular. Ela será salva automaticamente no seu
										navegador.
									</p>
								</div>

								<div className="p-3 bg-[#141414] rounded-xl border border-[#262626]">
									<div className="flex items-center gap-2 font-bold text-[#EDEDED] mb-1">
										<LinkIcon className="w-4 h-4 text-emerald-500" /> 2. Links
										de Projetos Reais
									</div>
									<p className="text-[#A1A1A1]">
										No arquivo{" "}
										<code className="text-[#EDEDED] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">
											src/data/portfolioData.ts
										</code>
										, procure por{" "}
										<code className="text-[#EDEDED] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">
											PROJECTS_LIST
										</code>
										. Cada item tem o campo{" "}
										<code className="text-[#EDEDED] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">
											projectUrl
										</code>{" "}
										(inicialmente com{" "}
										<code className="text-[#EDEDED] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">
											"#"
										</code>
										). Altere para a URL real dos sites que você colocar no ar.
									</p>
								</div>

								<div className="p-3 bg-[#141414] rounded-xl border border-[#262626]">
									<div className="flex items-center gap-2 font-bold text-[#EDEDED] mb-1">
										<Phone className="w-4 h-4 text-emerald-500" /> 3. Redes e
										Telefone
									</div>
									<p className="text-[#A1A1A1]">
										Os dados de contato (WhatsApp, GitHub e LinkedIn) estão
										centralizados no objeto{" "}
										<code className="text-[#EDEDED] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">
											CONTACT_INFO
										</code>{" "}
										em{" "}
										<code className="text-[#EDEDED] font-mono bg-[#1A1A1A] px-1 py-0.5 rounded">
											src/data/portfolioData.ts
										</code>
										.
									</p>
								</div>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={() => setIsOpen(false)}
								className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-[#EDEDED] font-bold text-xs transition-colors cursor-pointer"
							>
								Entendido!
							</motion.button>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};
