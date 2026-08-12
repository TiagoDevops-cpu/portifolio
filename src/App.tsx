import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] bg-grid-pattern relative selection:bg-violet-600 selection:text-white overflow-hidden">
      
      {/* Background Radial Glow Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] glow-purple pointer-events-none z-0 opacity-70"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-radial-glow-bottom pointer-events-none z-0 opacity-60"></div>

      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Principal do Portfólio de Tiago Santos da Silva */}
      <main className="relative z-10">
        {/* Banner Principal / Hero */}
        <Hero />

        {/* Seção Sobre Mim */}
        <AboutSection />

        {/* Seção de Habilidades & Tecnologias */}
        <SkillsSection />

        {/* Seção de Projetos / Portfólio */}
        <ProjectsSection />

        {/* Seção de Serviços & Soluções */}
        <ServicesSection />

        {/* Por Que Me Escolher */}
        <WhyChooseMe />

        {/* Simulador de Orçamento Rápido */}
        <InteractiveSimulator />

        {/* Seção de Contato */}
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

    </div>
  );
}
