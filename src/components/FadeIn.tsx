import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface FadeInProps {
	children: React.ReactNode;
	delay?: number;
	className?: string;
	direction?: "up" | "down" | "left" | "right";
	fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
	children,
	delay = 0,
	className = "",
	direction = "up",
	fullWidth = false,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

	const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
	const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: yOffset, x: xOffset }}
			animate={
				isInView
					? { opacity: 1, y: 0, x: 0 }
					: { opacity: 0, y: yOffset, x: xOffset }
			}
			transition={{
				duration: 0.6,
				delay: delay,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
			className={`${fullWidth ? "w-full" : ""} ${className}`}
		>
			{children}
		</motion.div>
	);
};
