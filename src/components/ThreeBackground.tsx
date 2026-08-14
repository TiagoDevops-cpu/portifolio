import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Hook para capturar o scroll de forma performática (sem re-renderizar o React)
const useScrollPosition = () => {
	const scrollInfo = useRef({ y: 0, normalized: 0 });

	useEffect(() => {
		const handleScroll = () => {
			const y = window.scrollY;
			// Calcula a porcentagem do scroll (0 a 1) baseada no tamanho total da página
			const maxScroll = Math.max(
				1,
				document.documentElement.scrollHeight - window.innerHeight,
			);
			scrollInfo.current = { y, normalized: y / maxScroll };
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll, { passive: true }); // Atualiza no resize
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return scrollInfo;
};

const ParticleField = () => {
	const mesh = useRef<THREE.Points>(null!);
	const { mouse, viewport } = useThree();
	const count = 2000;
	const scrollInfo = useScrollPosition();

	// Generate random positions for the particles in a larger volume
	const positions = useMemo(() => {
		const pos = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			pos[i * 3] = (Math.random() - 0.5) * 40; // x (mais largo)
			pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // y (mais alto)
			pos[i * 3 + 2] = (Math.random() - 0.5) * 20; // z (mais fundo)
		}
		return pos;
	}, [count]);

	const smoothedScroll = useRef(0);

	useFrame((state, delta) => {
		const time = state.clock.getElapsedTime();

		if (mesh.current) {
			// Interpolação suave (Damping) na própria barra de rolagem
			smoothedScroll.current = THREE.MathUtils.damp(
				smoothedScroll.current,
				scrollInfo.current.normalized,
				3,
				delta,
			);
			const normalized = smoothedScroll.current;

			// Rotação constante + giro ao longo de todo o site (1 volta completa)
			mesh.current.rotation.y = time * 0.03 + normalized * Math.PI * 2;
			mesh.current.rotation.x = time * 0.02;

			// Efeito parallax + movimento das partículas amarrado exatamente de 0 a 100% da página
			const targetX = (mouse.x * viewport.width) / 25;
			const targetY = (mouse.y * viewport.height) / 25 + normalized * 15;
			const targetZ = normalized * 5; // Limite de profundidade para nunca ultrapassar a câmera

			// Suavização da física
			mesh.current.position.x = THREE.MathUtils.damp(
				mesh.current.position.x,
				targetX,
				2,
				delta,
			);
			mesh.current.position.y = THREE.MathUtils.damp(
				mesh.current.position.y,
				targetY,
				2,
				delta,
			);
			mesh.current.position.z = THREE.MathUtils.damp(
				mesh.current.position.z,
				targetZ,
				2,
				delta,
			);
		}
	});

	return (
		<points ref={mesh}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={positions.length / 3}
					array={positions}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={0.04}
				color="#EDEDED"
				transparent
				opacity={0.15}
				sizeAttenuation
			/>
		</points>
	);
};

const IlluminatedCore = () => {
	const group = useRef<THREE.Group>(null!);
	const { mouse } = useThree();
	const scrollInfo = useScrollPosition();
	const smoothedScroll = useRef(0);

	useFrame((state, delta) => {
		const time = state.clock.getElapsedTime();

		if (group.current) {
			// Interpolação suave (Damping) na leitura do scroll
			smoothedScroll.current = THREE.MathUtils.damp(
				smoothedScroll.current,
				scrollInfo.current.normalized,
				3,
				delta,
			);
			const normalized = smoothedScroll.current;

			// Rotação acelerada proporcional à porcentagem de leitura do site
			group.current.rotation.x = time * 0.1 + normalized * Math.PI * 4;
			group.current.rotation.y = time * 0.15 + normalized * Math.PI * 2;

			// Reage ao mouse e desce levemente a forma
			const targetX = mouse.x * 2.5;
			const targetY = mouse.y * 2.5 - normalized * 3;

			// Empurra para trás suavemente, limitando o Z em -7 (nunca some na névoa)
			const targetZ = -2 - normalized * 5;

			// Suavização
			group.current.position.x = THREE.MathUtils.damp(
				group.current.position.x,
				targetX,
				3,
				delta,
			);
			group.current.position.y = THREE.MathUtils.damp(
				group.current.position.y,
				targetY,
				3,
				delta,
			);
			group.current.position.z = THREE.MathUtils.damp(
				group.current.position.z,
				targetZ,
				3,
				delta,
			);
		}
	});

	return (
		<group ref={group} position={[0, 0, -2]}>
			{/* Forma 3D Sólida e Iluminada */}
			<mesh>
				<icosahedronGeometry args={[3.5, 1]} />
				<meshStandardMaterial
					color="#141414"
					roughness={0.2}
					metalness={0.8}
					flatShading={true}
				/>
			</mesh>
			{/* Barras de neon luz branca em cada vértice (Wireframe emissivo) */}
			<mesh scale={1.01}>
				<icosahedronGeometry args={[3.5, 1]} />
				<meshBasicMaterial
					color={[2, 2, 2]}
					toneMapped={false}
					wireframe={true}
					transparent
					opacity={0.4}
				/>
			</mesh>
		</group>
	);
};

export const ThreeBackground: React.FC = () => {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none blur-[3px] opacity-60">
			<Canvas
				camera={{ position: [0, 0, 8], fov: 60 }}
				dpr={[2, 3]}
				gl={{ antialias: true, powerPreference: "high-performance" }}
			>
				{/* Iluminação 3D para o Background */}
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

				{/* Luz de destaque suave (verde) vinda de baixo, referenciando a paleta do site */}
				<pointLight
					position={[0, -10, 5]}
					intensity={2}
					color="#25D366"
					distance={30}
					decay={2}
				/>

				{/* Efeito de Post-processing: Bloom para criar o brilho Neon perfeito */}
				<EffectComposer disableNormalPass alpha={true}>
					<Bloom luminanceThreshold={1} mipmapBlur intensity={0.8} />
				</EffectComposer>

				{/* Fog to fade out particles at the edges */}
				<fog attach="fog" args={["#050505", 5, 20]} />
				<ParticleField />
				<IlluminatedCore />
			</Canvas>
		</div>
	);
};
