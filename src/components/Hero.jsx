
import { useState } from "react";

const abas = [
    {
        id: "modo-aula",
        nome: "⚡ Modo Aula",
        titulo: "Ativação Contextual Instantânea",
        descricao: "Detecta salas de aula e horários de estudo, ajustando foco e brilho para capturar lousas."
    },
    {
        id: "ocr-pro",
        nome: "🔍 OCR & Scanner",
        titulo: "Leitura de Textos",
        descricao: "Extrai textos de quadros, cadernos e apostilas, permitindo copiar e organizar o conteúdo."
    },
    {
        id: "ia-flashcards",
        nome: "🧠 IA & Resumos",
        titulo: "Aprendizado Automatizado",
        descricao: "Transforma o conteúdo fotografado em perguntas, respostas e cartões de memorização."
    }
];

export default function Hero() {
    const [abaAtiva, setAbaAtiva] = useState("modo-aula");

    const aba = abas.find(item => item.id === abaAtiva);

    return (
        <section className="hero">
            <div className="hero-conteudo">
                <div className="hero-texto">
                    <span className="tag">DESAFIO JOVI SMARTPHONE 2026</span>

                    <h1>
                        Câmera Inteligente.
                        <span> Sua rotina acadêmica descomplicada.</span>
                    </h1>

                    <p>
                        Potencializando a câmera dos smartphones JOVI
                        com inteligência contextual para captura de
                        lousas, leitura OCR, resumo e geração de flashcards.
                    </p>

                    <a href="#solucao" className="btn principal">
                        Conhecer a Solução
                    </a>
                </div>

                <div className="hero-imagem-cadastro">
                    <img
                        src="/img/prototipo/inicial.png"
                        alt="Tela de Login e Cadastro - Câmera Acadêmica"
                    />
                </div>
            </div>

            <div className="hero-tabs">
                {abas.map(item => (
                    <button
                        key={item.id}
                        className={`tab-btn ${abaAtiva === item.id ? "active" : ""}`}
                        onClick={() => setAbaAtiva(item.id)}
                    >
                        {item.nome}
                    </button>
                ))}
            </div>

            <div className="hero-tab-content">
                <div className="tab-pane active">
                    <h3>{aba.titulo}</h3>
                    <p>{aba.descricao}</p>
                </div>
            </div>
        </section>
    );
}
