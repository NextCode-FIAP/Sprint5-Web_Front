
import { useState } from "react";

const perguntas = [
    {
        pergunta: "O aplicativo consome muita bateria?",
        resposta: "A proposta utiliza sensores de baixo consumo e processamento otimizado."
    },
    {
        pergunta: "Funciona em ambientes com pouca iluminação?",
        resposta: "Sim. O sistema pode realizar ajustes automáticos para melhorar a imagem."
    },
    {
        pergunta: "É necessário internet para o OCR?",
        resposta: "A extração básica de textos pode funcionar offline. Recursos de IA precisam de conexão."
    }
];

export default function FAQ() {
    const [aberta, setAberta] = useState(null);

    return (
        <section className="secao fundo-alt" id="faq">
            <div className="titulo-secao">
                <span>DÚVIDAS</span>
                <h2>Perguntas Frequentes</h2>
            </div>

            <div className="faq-container">
                {perguntas.map((item, indice) => (
                    <div className="faq-item" key={item.pergunta}>
                        <button
                            className="faq-pergunta"
                            onClick={() => setAberta(
                                aberta === indice ? null : indice
                            )}
                        >
                            {item.pergunta}
                            <span>{aberta === indice ? "-" : "+"}</span>
                        </button>

                        <div
                            className="faq-resposta"
                            style={{
                                display: aberta === indice ? "block" : "none"
                            }}
                        >
                            <p>{item.resposta}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
