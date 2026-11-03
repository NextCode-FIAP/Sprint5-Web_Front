
import { useState } from "react";

export default function Simulator() {
    const [imagem, setImagem] = useState(null);
    const [filtro, setFiltro] = useState(false);
    const [resultado, setResultado] = useState(
        "Clique em um botão para testar as ações."
    );

    function enviarFoto(event) {
        const arquivo = event.target.files[0];

        if (!arquivo) return;

        const leitor = new FileReader();

        leitor.onload = evento => {
            setImagem(evento.target.result);
            setResultado("📸 Imagem enviada para o simulador com sucesso!");
        };

        leitor.readAsDataURL(arquivo);
    }

    function aplicarFiltro() {
        setFiltro(true);
        setResultado("✨ Filtro antirreflexo aplicado à imagem!");
    }

    function extrairTexto() {
        setResultado("📄 Texto Extraído: 'Equação de Ondas: v = λ * f'");
    }

    function gerarFlashcard() {
        setResultado(
            "🧠 Flashcard Criado: Q: O que significa λ? | R: Comprimento de Onda."
        );
    }

    return (
        <section className="secao fundo-alt" id="mockup">
            <div className="titulo-secao">
                <span>EXPERIÊNCIA INTERATIVA</span>
                <h2>Simulador da Câmera JOVI</h2>
            </div>

            <div className="mockup-container">
                <div className="mockup-header">
                    Modo Aula • Ativo ⚡
                </div>

                <div
                    className="mockup-view"
                    style={{
                        filter: filtro ? "contrast(120%) brightness(110%)" : "none"
                    }}
                >
                    {imagem ? (
                        <img
                            src={imagem}
                            alt="Imagem enviada ao simulador"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                borderRadius: "8px"
                            }}
                        />
                    ) : (
                        <span>Amostra: Equação de Ondas & Óptica</span>
                    )}
                </div>

                <label className="btn-mockup btn-upload" htmlFor="inputFoto">
                    📤 Enviar Foto
                </label>

                <input
                    type="file"
                    id="inputFoto"
                    accept="image/*"
                    hidden
                    onChange={enviarFoto}
                />

                <div className="mockup-controls">
                    <button className="btn-mockup" onClick={aplicarFiltro}>
                        Filtro Antireflexo
                    </button>

                    <button className="btn-mockup" onClick={extrairTexto}>
                        Extrair Texto
                    </button>

                    <button className="btn-mockup" onClick={gerarFlashcard}>
                        Gerar Flashcards
                    </button>
                </div>

                <p className="mockup-output">{resultado}</p>
            </div>
        </section>
    );
}
