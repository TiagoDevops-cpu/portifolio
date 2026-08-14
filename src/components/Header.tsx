import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Github, Linkedin, Code2 } from "lucide-react";
import { CONTACT_INFO, getWhatsAppUrl } from "../data/portfolioData";

export const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Sobre", href: "#sobre" },
		{ name: "Habilidades", href: "#habilidades" },
		{ name: "Projetos", href: "#projetos" },
		{ name: "Serviços", href: "#servicos" },
		{ name: "Contato", href: "#contato" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isScrolled
					? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626] py-4 shadow-sm"
					: "bg-transparent py-6"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				{/* Logo */}
				<a
					href="#hero"
					className="flex items-center gap-3 group cursor-pointer"
				>
					<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-black group-hover:bg-[#EDEDED] transition-colors">
						TS
					</div>
					<div className="flex flex-col">
						<span className="text-base sm:text-lg font-bold text-[#EDEDED] tracking-tight">
							Tiago Santos{" "}
							<span className="text-[#A1A1A1] font-normal">da Silva</span>
						</span>
						<span className="text-[10px] text-[#737373] tracking-widest uppercase font-medium mt-0.5">
							Full-Stack Developer
						</span>
					</div>
				</a>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="px-4 py-2 text-sm font-medium text-[#A1A1A1] hover:text-[#EDEDED] transition-colors"
						>
							{link.name}
						</a>
					))}
				</nav>

				{/* Action Buttons */}
				<div className="hidden md:flex items-center gap-4">
					<div className="flex items-center gap-3 mr-2 border-r border-[#262626] pr-5">
						<a
							href={CONTACT_INFO.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#737373] hover:text-[#EDEDED] transition-colors"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href={CONTACT_INFO.linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#737373] hover:text-[#EDEDED] transition-colors"
						>
							<Linkedin className="w-5 h-5" />
						</a>
					</div>
					<a
						href={getWhatsAppUrl(
							"Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para meu projeto.",
						)}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-black px-6 py-2.5 rounded-md hover:bg-[#EDEDED] font-semibold text-sm transition-colors flex items-center gap-2"
					>
						<span>Fale Comigo</span>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-3">
					<a
						href={getWhatsAppUrl(
							"Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para meu projeto.",
						)}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded-md bg-white text-black font-semibold text-xs flex items-center gap-1.5"
					>
						<span>Contato</span>
					</a>
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="p-2 text-[#EDEDED] focus:outline-none"
					>
						{mobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Drawer */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-4 pt-4 pb-8 space-y-4">
					<nav className="flex flex-col space-y-2">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setMobileMenuOpen(false)}
								className="px-4 py-3 rounded-md text-[#A1A1A1] hover:bg-[#1A1A1A] hover:text-[#EDEDED] font-medium text-sm transition-colors"
							>
								{link.name}
							</a>
						))}
					</nav>
					<div className="pt-4 mt-2 border-t border-[#262626] flex flex-col gap-4">
						<div className="flex items-center gap-4 px-4">
							<a
								href={CONTACT_INFO.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#A1A1A1]"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href={CONTACT_INFO.linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#A1A1A1]"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};
