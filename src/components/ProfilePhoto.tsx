import React from 'react';
import { CONTACT_INFO, PROFILE_PHOTO_URL } from '../data/portfolioData';

interface ProfilePhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  className = "",
  size = 'hero',
  showBadge = true
}) => {
  // Se houver uma foto salva no localStorage do usuário, utilize-a; caso contrário, a oficial
  const savedPhoto = typeof window !== 'undefined' ? localStorage.getItem('tiago_custom_profile_photo') : null;
  const photoToDisplay = savedPhoto || PROFILE_PHOTO_URL;

  const sizeClasses = {
    sm: "w-16 h-16 sm:w-20 sm:h-20",
    md: "w-28 h-28 sm:w-36 sm:h-36",
    lg: "w-40 h-40 sm:w-52 sm:h-52",
    hero: "w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
  };

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Glow de fundo tecnológico violeta/fuchsia Immersive UI */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-700 rounded-full blur-lg opacity-85 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      {/* Container Principal da Foto de Perfil */}
      <div 
        id="foto-perfil"
        className={`relative ${sizeClasses[size]} rounded-full p-1 bg-[#050505] border-2 border-violet-500/60 shadow-[0_0_25px_rgba(139,92,246,0.3)] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]`}
      >
        <img
          src={photoToDisplay}
          alt={`Foto de perfil de ${CONTACT_INFO.name}`}
          className="w-full h-full object-cover rounded-full filter contrast-105 brightness-105"
        />
      </div>

      {/* Badge de Status "Disponível para Projetos" */}
      {showBadge && (
        <div className="absolute -bottom-2 right-2 sm:right-6 bg-[#0a0a0f]/95 backdrop-blur-md border border-violet-500/40 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-2 pointer-events-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
          </span>
          <span>Disponível p/ Projetos</span>
        </div>
      )}
    </div>
  );
};

