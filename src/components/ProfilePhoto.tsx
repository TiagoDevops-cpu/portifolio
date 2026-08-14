import React from "react";
import { CONTACT_INFO, PROFILE_PHOTO_URL } from "../data/portfolioData";
import { ShieldCheck } from "lucide-react";

interface ProfilePhotoProps {
	className?: string;
	size?: "sm" | "md" | "lg" | "hero";
	showBadge?: boolean;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
	className = "",
	size = "hero",
	showBadge = true,
}) => {
	const savedPhoto =
		typeof window !== "undefined"
			? localStorage.getItem("tiago_custom_profile_photo")
			: null;
	const photoToDisplay = savedPhoto || PROFILE_PHOTO_URL;

	const sizeClasses = {
		sm: "w-16 h-16 sm:w-20 sm:h-20",
		md: "w-24 h-24 sm:w-28 sm:h-28",
		lg: "w-32 h-32 sm:w-40 sm:h-40",
		hero: "w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64",
	};

	return (
		<div className={`relative inline-block ${className}`}>
			<div
				className={`relative ${sizeClasses[size]} rounded-2xl p-1.5 bg-[#141414] border border-[#262626] overflow-hidden flex items-center justify-center shadow-lg`}
			>
				<img
					src={photoToDisplay}
					alt={`Foto de perfil de ${CONTACT_INFO.name}`}
					className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
				/>
			</div>

			{showBadge && (
				<div className="absolute -bottom-3 -right-3 bg-[#1A1A1A] border border-[#262626] text-[#A1A1A1] text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 pointer-events-none shadow-md">
					<ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
					<span>Disponível p/ Projetos</span>
				</div>
			)}
		</div>
	);
};
