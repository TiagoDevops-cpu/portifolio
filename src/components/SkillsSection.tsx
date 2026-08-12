import React, { useState } from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { Skill } from '../types';
import { Code2, Server, Palette, Zap } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Habilidades' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'design', label: 'Design & UX' },
    { id: 'outros', label: 'Otimização & Ferramentas' },
  ];

  const filteredSkills = activeCategory === 'todos'
    ? SKILLS_LIST
    : SKILLS_LIST.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return Code2;
      case 'backend':
        return Server;
      case 'design':
        return Palette;
      default:
        return Zap;
    }
  };

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="skill-tag uppercase tracking-widest inline-block mb-3">
            Stack Tecnológica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Tecnologias & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 neon-text">Habilidades</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Ferramentas e linguagens utilizadas para criar soluções web completas, modernas e preparadas para crescer com a sua empresa.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40'
                  : 'glass text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Visual de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComp = getCategoryIcon(skill.category);
            return (
              <div
                key={skill.id}
                className="glass rounded-2xl p-6 relative group border border-white/5 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl glass border border-white/10 group-hover:border-violet-500/50 flex items-center justify-center text-violet-400 group-hover:text-fuchsia-400 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="skill-tag">
                    {skill.categoryLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-4 min-h-[40px]">
                  {skill.description}
                </p>

                {/* Barra de Nível Visual */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-gray-400">Domínio Prático:</span>
                    <span className="text-violet-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
