export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'landing-page' | 'ecommerce' | 'institucional' | 'sistemas';
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl: string; // LINK_DO_PROJETO_AQUI placeholder
  githubUrl?: string;
  featured?: boolean;
  clientType: 'Empresa de Grande Porte' | 'Pequeno/Médio Negócio' | 'Startup';
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'outros';
  categoryLabel: string;
  iconName: string;
  level: number; // 0 - 100
  description: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  email: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  deliverables: string[];
  icon: string;
  recommendedFor: string;
}
