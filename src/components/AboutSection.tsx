import React from "react";
import {
	Layers,
	Code,
	Rocket,
	ShieldCheck,
	MessageCircle,
	Github,
} from "lucide-react";
import { CONTACT_INFO, getWhatsAppUrl } from "../data/portfolioData";
import { ProfilePhoto } from "./ProfilePhoto";

export const AboutSection: React.FC = () => {
	const pillars = [
		{
			icon: Layers,
			title: "Design Exclusivo & Atraente",
			description:
				"Nada de templates genéricos ou ultrapassados. Cada projeto é construído com identidade visual própria, pensada para encantar o seu cliente e destacar sua marca da concorrência.",
		},
		{
			icon: Code,
			title: "Desenvolvimento Full-Stack",
			description:
				"Domínio do processo do início ao fim: do protótipo no Figma até o servidor, integração de banco de dados, APIs e otimização para carregamento em milissegundos.",
		},
		{
			icon: Rocket,
			title: "Foco Total em Resultados & Vendas",
			description:
				"Um site bonito não basta; ele precisa converter visitantes em clientes reais. Estruturo cada página com gatilhos de conversão e chamadas estratégicas para o seu contato.",
		},
		{
			icon: ShieldCheck,
			title: "Suporte Próximo & Direto",
			description:
				"Você fala diretamente comigo, o desenvolvedor do seu site. Sem atendentes intermediários ou demoras no suporte. Transparência total do primeiro ao último passo.",
		},
	];

	return (
		<section id="sobre" className="py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Cabeçalho da Seção */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#A1A1A1] uppercase tracking-widest text-xs font-semibold mb-3 block">
						Conheça Quem Constrói o Seu Projeto
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mt-1 mb-4">
						Sobre Tiago Santos da Silva
					</h2>
					<p className="text-[#737373] text-base leading-relaxed">
						Desenvolvedor Full-Stack e Web Designer apaixonado por tecnologia,
						dedicado a criar experiências digitais marcantes para empresas de
						todos os portes.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					{/* Lado Esquerdo: Foto de Perfil em Destaque */}
					<div className="lg:col-span-5 flex flex-col items-center">
						<div className="p-8 bg-[#141414] rounded-2xl border border-[#262626] w-full max-w-md text-center">
							<div className="mb-8 flex justify-center">
								<ProfilePhoto size="lg" showBadge={false} />
							</div>
							<h3 className="text-2xl font-bold text-[#EDEDED] mb-2">
								Tiago Santos da Silva
							</h3>
							<p className="text-sm text-[#A1A1A1] mb-6">
								Web Designer & Desenvolvedor Full-Stack
							</p>

							<div className="flex flex-col gap-4 text-sm text-[#A1A1A1] text-left pt-6 border-t border-[#262626]">
								<div className="flex items-center justify-between">
									<span className="text-[#737373]">Atendimento:</span>
									<span className="text-[#EDEDED] font-medium text-right">
										Nacional e Internacional
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-[#737373]">Especialidade:</span>
									<span className="text-[#EDEDED] font-medium text-right">
										Sites & Landing Pages
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-[#737373]">WhatsApp:</span>
									<span className="text-[#EDEDED] font-medium text-right">
										{CONTACT_INFO.phoneDisplay}
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Lado Direito: História & Proposta de Valor */}
					<div className="lg:col-span-7 space-y-8">
						<div className="space-y-5 text-[#A1A1A1] text-base leading-relaxed">
							<p>
								Minha missão é simples:{" "}
								<strong className="text-[#EDEDED] font-semibold">
									transformar a presença digital da sua empresa em uma poderosa
									máquina de atração de clientes.
								</strong>
							</p>
							<p>
								Atuo no desenvolvimento web combinando o melhor do{" "}
								<strong className="text-[#EDEDED] font-semibold">
									UI/UX Design moderno
								</strong>{" "}
								com a robustez do{" "}
								<strong className="text-[#EDEDED] font-semibold">
									Desenvolvimento Full-Stack
								</strong>
								. Seja para uma pequena empresa local que precisa se posicionar
								profissionalmente na internet, ou para uma grande corporação
								buscando portais e sistemas complexos, entrego soluções sob
								medida.
							</p>
							<p>
								Acredito que um site de sucesso deve ser{" "}
								<strong className="text-[#EDEDED] font-semibold">
									bonito no celular
								</strong>
								,{" "}
								<strong className="text-[#EDEDED] font-semibold">
									rápido no Google
								</strong>{" "}
								e{" "}
								<strong className="text-[#EDEDED] font-semibold">
									direto ao ponto na conversão
								</strong>
								. Cada linha de código que escrevo e cada pixel que meço têm um
								objetivo claro: trazer retorno real para o seu investimento.
							</p>
						</div>

						{/* Grid dos 4 Pilares */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
							{pillars.map((pillar, idx) => {
								const IconComponent = pillar.icon;
								return (
									<div
										key={idx}
										className="p-6 bg-[#141414] rounded-xl border border-[#262626]"
									>
										<div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-[#EDEDED] mb-4">
											<IconComponent className="w-5 h-5" />
										</div>
										<h4 className="text-sm font-semibold text-[#EDEDED] mb-2">
											{pillar.title}
										</h4>
										<p className="text-sm text-[#737373] leading-relaxed">
											{pillar.description}
										</p>
									</div>
								);
							})}
						</div>

						{/* Chamada para conversa no WhatsApp */}
						<div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
							<a
								href={getWhatsAppUrl(
									"Olá Tiago! Vi sua apresentação no site e gostaria de conversar com você sobre um novo projeto.",
								)}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-white hover:bg-[#EDEDED] text-black font-semibold text-sm transition-colors"
							>
								<MessageCircle className="w-4 h-4" />
								<span>Iniciar Conversa</span>
							</a>
							<a
								href={CONTACT_INFO.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-[#EDEDED] font-semibold text-sm transition-colors"
							>
								<Github className="w-4 h-4" />
								<span>Ver GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
