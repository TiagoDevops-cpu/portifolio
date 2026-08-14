import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="bg-[#0A0A0A] border-t border-[#262626] pt-12 pb-6 relative z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-[#262626] pb-8">
					<div className="text-center md:text-left">
						<h2 className="text-xl font-bold text-[#EDEDED] mb-1">
							Tiago Santos da Silva
						</h2>
						<p className="text-sm text-[#737373]">
							Desenvolvedor Full-Stack & Web Designer
						</p>
						<a
							href={`mailto:${CONTACT_INFO.email}`}
							className="text-sm text-[#A1A1A1] hover:text-[#EDEDED] transition-colors mt-1 block"
						>
							{CONTACT_INFO.email}
						</a>
					</div>

					<div className="flex items-center gap-4">
						<a
							href={CONTACT_INFO.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-md bg-[#141414] border border-[#262626] flex items-center justify-center text-[#A1A1A1] hover:text-white hover:bg-[#262626] transition-colors"
						>
							<Github className="w-4 h-4" />
						</a>
						<a
							href={CONTACT_INFO.linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-md bg-[#141414] border border-[#262626] flex items-center justify-center text-[#A1A1A1] hover:text-white hover:bg-[#262626] transition-colors"
						>
							<Linkedin className="w-4 h-4" />
						</a>
						<button
							onClick={scrollToTop}
							title="Voltar ao topo"
							className="w-10 h-10 rounded-md bg-[#141414] border border-[#262626] flex items-center justify-center text-[#A1A1A1] hover:text-white hover:bg-[#262626] transition-colors"
						>
							<ArrowUp className="w-4 h-4" />
						</button>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
					<p className="text-xs text-[#737373]">
						&copy; {new Date().getFullYear()} Tiago Santos da Silva. Todos os
						direitos reservados.
					</p>
					<div className="flex items-center gap-4 text-xs text-[#737373]">
						<a
							href="#termos"
							className="hover:text-[#EDEDED] transition-colors"
						>
							Termos de Uso
						</a>
						<a
							href="#privacidade"
							className="hover:text-[#EDEDED] transition-colors"
						>
							Política de Privacidade
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
