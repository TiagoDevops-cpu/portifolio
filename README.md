# 🚀 Portfólio - Tiago Santos da Silva

**Web Designer & Desenvolvedor Full-Stack**

Um portfólio profissional moderno e responsivo, construído com as tecnologias mais atuais do desenvolvimento web. Apresenta serviços, projetos, habilidades e um simulador interativo com IA.

---

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Build para Produção](#build-para-produção)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)

---

## 📌 Sobre

Portfólio profissional completo de Tiago Santos da Silva, showcasando:

- ✨ Web Design moderno e responsivo
- 💻 Desenvolvimento Full-Stack (Frontend & Backend)
- 🎯 Especialização em sites de alta conversão
- 🌍 Atendimento nacional e internacional
- 🤖 Simulador interativo com IA (Google Gemini API)

**Localização:** Mato Grosso do Sul, Brasil

---

## 🛠️ Tecnologias

### Frontend
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilos utilitários
- **Vite 6** - Bundler e dev server
- **Lucide React** - Ícones vetoriais
- **Motion** - Animações suaves

### Backend & IA
- **Express.js** - Servidor web
- **Google Gemini API** - Inteligência artificial
- **Node.js** - Runtime JavaScript

### Desenvolvimento
- **ESBuild** - Compilador ultrarrápido
- **Autoprefixer** - Compatibilidade CSS
- **TypeScript** - Type checking

---

## ✨ Recursos

### Seções Principais
- 🎯 **Hero** - Apresentação com efeito de digitação
- 👤 **Sobre Mim** - Informações profissionais
- 🛠️ **Serviços** - Pacotes de serviços oferecidos
- 💼 **Projetos** - Portfolio de trabalhos realizados
- 🎓 **Habilidades** - Tecnologias e competências
- 📞 **Contato** - Formas de entrar em contato

### Componentes Interativos
- 🤖 **Simulador com IA** - Utilize a inteligência artificial para fazer perguntas
- 💬 **WhatsApp Flutuante** - Acesso rápido ao WhatsApp
- 📱 **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⌚ **Modal de Ajuda** - Assistência integrada com IA

---

## 📦 Pré-requisitos

- **Node.js** 18+ 
- **npm** 9+ ou **yarn**

---

## 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/TiagoDevops-cpu/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a API Key do Gemini:**
   - Crie um arquivo `.env.local` na raiz do projeto
   - Adicione sua chave da API Google Gemini:
     ```
     VITE_GEMINI_API_KEY=sua_chave_aqui
     ```
   - Obtenha sua chave em: https://ai.google.dev/

4. **Verifique o TypeScript:**
   ```bash
   npm run lint
   ```

---

## 🚀 Como Executar

### Modo Desenvolvimento
```bash
npm run dev
```
O aplicativo estará disponível em: `http://localhost:3000`

### Modo Preview (Simula produção localmente)
```bash
npm run preview
```

---

## 🏗️ Build para Produção

```bash
npm run build
```

Gera os arquivos otimizados em `/dist`

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   ├── InteractiveSimulator.tsx
│   ├── CodeHelpModal.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── Footer.tsx
│   └── ...
├── data/               # Dados do portfólio
│   └── portfolioData.ts
├── types.ts            # Tipos TypeScript
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais

public/
├── index.html          # HTML principal
└── vite.config.ts      # Configuração Vite

├── package.json        # Dependências
├── tsconfig.json       # Configuração TypeScript
└── README.md           # Este arquivo
```

---

## 🔗 Links Úteis

- 🌐 **Website:** [Seu portfólio online]
- 💼 **LinkedIn:** [Profile do LinkedIn](https://www.linkedin.com/in/tiago-silva-285225401)
- 🐙 **GitHub:** [Repositórios](https://github.com/TiagoDevops-cpu)
- 📧 **Email:** ts.devcode@gmail.com
- 💬 **WhatsApp:** [(67) 98123-3340](https://wa.me/5567981233340)

---

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build otimizado para produção |
| `npm run preview` | Visualiza o build em modo produção |
| `npm run lint` | Verifica erros de tipo com TypeScript |
| `npm run clean` | Limpa diretório dist |

---

## 🎨 Personalização

Todos os dados do portfólio podem ser facilmente editados no arquivo:
- **[src/data/portfolioData.ts](src/data/portfolioData.ts)**

Atualize:
- Informações pessoais
- Foto de perfil
- Descrições de serviços
- Projetos realizados
- Habilidades técnicas
- Links de contato

---

## 📄 Licença

Este projeto é de propriedade de Tiago Santos da Silva.

---

## 🤝 Contribuições

Sugestões e feedback são bem-vindos! Entre em contato através dos links acima.

---

**Desenvolvido com ❤️ por Tiago Santos da Silva**
