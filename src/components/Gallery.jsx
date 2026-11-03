
import { useState } from "react";

const imagens = [
    {
        arquivo: "Cadastro.jpg",
        titulo: "Cena 1: Login e Preferências",
        alt: "Login e Autenticação"
    },
    {
        arquivo: "Inicio-lousa.jpg",
        titulo: "Cena 2: Modo Lousa em Análise",
        alt: "Detecção de Lousa"
    },
    {
        arquivo: "inicio-IA.jpg",
        titulo: "Cena 3: Antirreflexo e Ajuste Ativo",
        alt: "Otimização por IA"
    },
    {
        arquivo: "Layout-Camera.jpg",
        titulo: "Cena 4: Modos da Câmera JOVI",
        alt: "Modos da Câmera"
    },
    {
        arquivo: "Pasta_Aberta.jpg",
        titulo: "Cena 5: Seleção de Pastas do Sistema",
        alt: "Seleção de Pastas"
    },
    {
        arquivo: "Pasta_fechada.jpg",
        titulo: "Cena 6: Processamento, OCR e IA",
        alt: "Processar e Salvar Foto"
    }
];

export default function Gallery() {
    const [imagemAtiva, setImagemAtiva] = useState(null);

    return (
        <section className="secao" id="galeria">
            <div className="titulo-secao">
                <span>INTERFACE E RECURSOS</span>
                <h2>Galeria do Protótipo JOVI</h2>
            </div>

            <div className="grid-galeria">
                {imagens.map(imagem => (
                    <div
                        className="item-galeria"
                        key={imagem.arquivo}
                        onClick={() => setImagemAtiva(imagem)}
                    >
                        <div className="wrapper-imagem-prototipo">
                            <img
                                src={`/img/prototipo/${imagem.arquivo}`}
                                alt={imagem.alt}
                                loading="lazy"
                                onLoad={e => e.currentTarget.classList.add("imagem-carregada")}
                                onError={e => e.currentTarget.parentElement.classList.add("erro-carregamento")}
                            />
                        </div>

                        <p>{imagem.titulo}</p>
                    </div>
                ))}
            </div>

            {imagemAtiva && (
                <div
                    className="modal ativo"
                    onClick={() => setImagemAtiva(null)}
                >
                    <button
                        className="modal-fechar"
                        onClick={() => setImagemAtiva(null)}
                        aria-label="Fechar imagem"
                    >
                        &times;
                    </button>

                    <div
                        className="modal-box-imagem"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            className="modal-conteudo"
                            src={`/img/prototipo/${imagemAtiva.arquivo}`}
                            alt={imagemAtiva.alt}
                        />
                        <div className="modal-legenda">
                            {imagemAtiva.titulo}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
