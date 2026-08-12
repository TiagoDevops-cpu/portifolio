import React, { useState } from 'react';
import { HelpCircle, X, Code, FileText, Camera, Link as LinkIcon, Phone } from 'lucide-react';

export const CodeHelpModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Botão Guia do Desenvolvedor (Canto inferior esquerdo) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-full glass border border-white/10 text-violet-400 hover:text-white text-xs font-semibold shadow-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
        title="Guia de Edição do Código do Portfólio"
      >
        <Code className="w-4 h-4 text-violet-400" />
        <span className="hidden sm:inline">Guia do Código</span>
      </button>

      {/* Modal explicativo das áreas de edição */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0a0a0f] border border-violet-500/30 rounded-2xl max-w-xl w-full p-6 text-gray-100 relative shadow-[0_0_50px_rgba(139,92,246,0.2)] space-y-4">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full glass text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass border border-violet-500/30 flex items-center justify-center text-violet-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Guia Rápido para Atualizar Seu Portfólio
                </h3>
                <p className="text-xs text-gray-400">
                  Instruções para Tiago Santos da Silva personalizar o código
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-gray-300 pt-2">
              <div className="p-3 glass rounded-xl border border-white/5">
                <div className="flex items-center gap-2 font-bold text-violet-400 mb-1">
                  <Camera className="w-4 h-4" /> 1. Foto de Perfil
                </div>
                <p className="text-gray-400">
                  Para aplicar sua foto real exata, basta clicar na foto de perfil na página e selecionar o arquivo de imagem do seu computador ou celular. Ela será salva automaticamente no seu navegador.
                </p>
              </div>

              <div className="p-3 glass rounded-xl border border-white/5">
                <div className="flex items-center gap-2 font-bold text-violet-400 mb-1">
                  <LinkIcon className="w-4 h-4" /> 2. Links de Projetos Reais
                </div>
                <p className="text-gray-400">
                  No arquivo <code className="text-violet-300 font-mono">src/data/portfolioData.ts</code>, procure por <code className="text-violet-300 font-mono">PROJECTS_LIST</code>. Cada item tem o campo <code className="text-violet-300 font-mono">projectUrl</code> (inicialmente com <code className="text-violet-300 font-mono">"#"</code>). Altere para a URL real dos sites que você colocar no ar.
                </p>
              </div>

              <div className="p-3 glass rounded-xl border border-white/5">
                <div className="flex items-center gap-2 font-bold text-violet-400 mb-1">
                  <Phone className="w-4 h-4" /> 3. Redes e Telefone
                </div>
                <p className="text-gray-400">
                  Os dados de contato (WhatsApp, GitHub e LinkedIn) estão centralizados no objeto <code className="text-violet-300 font-mono">CONTACT_INFO</code> em <code className="text-violet-300 font-mono">src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-colors shadow-lg shadow-violet-900/30 cursor-pointer"
            >
              Entendido!
            </button>

          </div>
        </div>
      )}
    </>
  );
};
