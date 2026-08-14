# Portfólio 3D Interativo - Tiago

Este é um portfólio web moderno, de alta performance e com experiências 3D interativas. Construído para destacar projetos, habilidades e serviços com um design limpo, tipografia cuidadosa e efeitos visuais imersivos ("glassmorphism" e luzes neon).

## 🚀 Tecnologias Utilizadas

*   **React 18** + **TypeScript**: Base robusta e tipada para a interface de usuário.
*   **Vite**: Ferramenta de build super rápida.
*   **Tailwind CSS**: Estilização baseada em utilitários para um design responsivo e consistente.
*   **Three.js & React Three Fiber (@react-three/fiber)**: Renderização 3D declarativa para o fundo animado e elementos interativos.
*   **React Three Drei & Postprocessing**: Utilitários para câmera, controles e efeitos visuais (como o brilho Bloom/Neon).
*   **Motion (Framer Motion)**: Animações de entrada e transições de página suaves.
*   **Lucide React**: Ícones SVG consistentes e leves.

## 📂 Estrutura do Projeto

A estrutura foi pensada para ser modular e fácil de dar manutenção:

*   **`src/App.tsx`**: Ponto de entrada principal. Coordena o layout geral, o fundo 3D (`Suspense` para carregamento lazy) e a ordem das seções.
*   **`src/components/`**: Contém todos os blocos visuais isolados da aplicação:
    *   `Hero.tsx`: Seção inicial de impacto, com efeito de digitação e chamadas para ação.
    *   `ThreeBackground.tsx`: O motor 3D do fundo, renderizando partículas e o núcleo iluminado, que reagem ao scroll e ao mouse.
    *   `NeonIcon3D.tsx`: Componente 3D flutuante (ícone do WhatsApp) com efeitos de iluminação reativos ao "hover".
    *   `Header.tsx`, `Footer.tsx`: Navegação e rodapé da página.
    *   *(Outras seções)*: `AboutSection`, `ProjectsSection`, `SkillsSection`, `ServicesSection`, `ContactSection`.
*   **`src/data/`**: Contém o arquivo `portfolioData.ts`, que centraliza as informações de texto, links, projetos e habilidades. Modifique este arquivo para atualizar o conteúdo do site sem precisar alterar a estrutura dos componentes.

## ✨ Principais Funcionalidades

1.  **Fundo 3D Reativo (ThreeBackground)**: Usa a posição do scroll da página e o cursor do mouse para girar e deslocar suavemente os elementos 3D no fundo, criando paralaxe.
2.  **Efeitos de Post-processing (Bloom)**: Utilizado para gerar o aspecto "Neon" nos fios (`wireframes`) das geometrias 3D.
3.  **Simulador Interativo**: Uma seção lúdica para precificação e estimativa de projetos.
4.  **Animações de Entrada (FadeIn)**: À medida que o usuário rola a página, os elementos surgem suavemente na tela usando a biblioteca Motion.

## 🛠️ Como Executar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

3.  Abra seu navegador em `http://localhost:3000` (ou a porta indicada no terminal).

## 🎨 Personalização

*   **Conteúdo**: Vá até `src/data/portfolioData.ts` para alterar as informações textuais, links de contato e itens de portfólio.
*   **Cores e Fundo**: A cor base do site está definida em `src/App.tsx` (ex: `bg-[#050505]`). As luzes e cores do neon podem ser ajustadas nos arquivos `ThreeBackground.tsx` e `NeonIcon3D.tsx`.
