import React, { Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseMe } from "./components/WhyChooseMe";
import { InteractiveSimulator } from "./components/InteractiveSimulator";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { FadeIn } from "./components/FadeIn";
import { useIsMobile } from "./hooks/useIsMobile";

const ThreeBackground = lazy(() =>
	import("./components/ThreeBackground").then((mod) => ({
		default: mod.ThreeBackground,
	})),
);

export default function App() {
	const isMobile = useIsMobile();

	return (
		<div className="min-h-screen bg-[#050505] text-[#EDEDED] bg-grid-pattern relative selection:bg-[#262626] selection:text-white overflow-x-hidden">
			{!isMobile && (
				<Suspense fallback={<div className="fixed inset-0 z-0 bg-[#050505]" />}>
					<ThreeBackground />
				</Suspense>
			)}

			<Header />

			<main className="relative z-10 flex flex-col gap-24 py-16">
				<Hero />

				<FadeIn>
					<AboutSection />
				</FadeIn>

				<FadeIn>
					<SkillsSection />
				</FadeIn>

				<FadeIn>
					<ProjectsSection />
				</FadeIn>

				<FadeIn>
					<ServicesSection />
				</FadeIn>

				<FadeIn>
					<WhyChooseMe />
				</FadeIn>

				<FadeIn>
					<InteractiveSimulator />
				</FadeIn>

				<FadeIn>
					<ContactSection />
				</FadeIn>
			</main>

			<Footer />
			<FloatingWhatsApp />
		</div>
	);
}
