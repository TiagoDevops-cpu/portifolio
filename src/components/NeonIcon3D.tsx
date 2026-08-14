import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const InteractiveShape = ({ onClick }: { onClick?: () => void }) => {
	const [hovered, setHover] = useState(false);
	const groupRef = useRef<THREE.Group>(null!);
	const wireframeMaterialRef = useRef<THREE.MeshBasicMaterial>(null!);

	const targetScale = hovered ? 1.05 : 1;

	// Cores alvo para o efeito Neon (Bloom) reduzido
	// Sem hover: brilho branco mais sutil
	// Com hover: brilho branco super-exposto
	const colorDefault = new THREE.Color(1, 1, 1);
	const colorHover = new THREE.Color(4, 4, 4);

	useFrame((state, delta) => {
		const lerpFactor = delta * 6;

		if (groupRef.current) {
			groupRef.current.scale.lerp(
				new THREE.Vector3(targetScale, targetScale, targetScale),
				lerpFactor,
			);
		}

		if (wireframeMaterialRef.current) {
			const targetColor = hovered ? colorHover : colorDefault;
			wireframeMaterialRef.current.color.lerp(targetColor, lerpFactor);
		}
	});

	return (
		<Float
			speed={2.5}
			rotationIntensity={1.5}
			floatIntensity={1.5}
			floatingRange={[-0.1, 0.1]}
		>
			<group
				ref={groupRef}
				onClick={(e) => {
					e.stopPropagation();
					if (onClick) onClick();
				}}
				onPointerOver={() => {
					document.body.style.cursor = "grab";
					setHover(true);
				}}
				onPointerOut={() => {
					document.body.style.cursor = "auto";
					setHover(false);
				}}
				onPointerDown={() => {
					document.body.style.cursor = "grabbing";
				}}
				onPointerUp={() => {
					document.body.style.cursor = "grab";
				}}
			>
				{/* Forma 3D Sólida Escura e Facetada (Mesma iluminação do fundo) */}
				<mesh>
					<icosahedronGeometry args={[1.4, 1]} />
					<meshStandardMaterial
						color="#141414"
						roughness={0.2}
						metalness={0.8}
						flatShading={true}
					/>
				</mesh>

				{/* Wireframe Emissivo para o Neon */}
				<mesh scale={1.01}>
					<icosahedronGeometry args={[1.4, 1]} />
					<meshBasicMaterial
						ref={wireframeMaterialRef}
						color={[1, 1, 1]}
						toneMapped={false}
						wireframe={true}
						transparent
						opacity={0.4}
					/>
				</mesh>
			</group>
		</Float>
	);
};

export const NeonIcon3D: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div
			className="w-full h-full relative z-20"
			aria-label="Animação 3D interativa"
			onClick={onClick}
		>
			<Canvas
				camera={{ position: [0, 0, 4.5], fov: 45 }}
				dpr={[2, 3]}
				gl={{
					antialias: true,
					powerPreference: "high-performance",
					alpha: true,
					preserveDrawingBuffer: true,
				}}
				onCreated={({ gl }) => {
					gl.setClearColor(0x000000, 0); // Força o fundo ser 100% transparente
				}}
			>
				{/* Iluminação 3D idêntica à do Background */}
				<ambientLight intensity={0.3} />
				<directionalLight
					position={[10, 10, 5]}
					intensity={1.5}
					color="#ffffff"
				/>
				<directionalLight
					position={[-10, -10, -5]}
					intensity={0.5}
					color="#A1A1A1"
				/>

				{/* Luz de destaque verde sutil referenciando a paleta do site */}
				<pointLight
					position={[0, -5, 5]}
					intensity={2}
					color="#25D366"
					distance={20}
					decay={2}
				/>

				<InteractiveShape onClick={onClick} />

				{/* Post-processing: Bloom reativo reduzido */}
				<EffectComposer disableNormalPass alpha={true}>
					<Bloom luminanceThreshold={1} mipmapBlur intensity={0.6} />
				</EffectComposer>

				{/* Controle orbital livre pelo usuário */}
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					autoRotate
					autoRotateSpeed={1.5}
					enableDamping={true}
					dampingFactor={0.05}
				/>
			</Canvas>
		</div>
	);
};
