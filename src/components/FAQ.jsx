import React, { useState } from "react";

const questions = [
    ["O aplicativo consome muita bateria?", "A proposta utiliza sensores de baixo consumo e processamento otimizado."],
    ["Funciona em ambientes com pouca iluminação?", "Sim. O sistema pode realizar ajustes automáticos para melhorar a imagem."],
    ["É necessário internet para o OCR?", "A extração básica de textos pode funcionar offline. Recursos de IA precisam de conexão."]
];

const FAQ = () => {
    const [aberta, setAberta] = useState(null);

    return (
        <section className="scroll-mt-20 w-full bg-[#F4F6F9] px-[5%] py-14 sm:py-16 lg:py-20" id="faq">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    DÚVIDAS
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    Perguntas Frequentes
                </h2>
            </div>
            <div className="mx-auto w-full max-w-[900px]">
                {questions.map((item, index) => (
                    <div
                        className="mb-3 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
                        key={item[0]}
                    >
                        <button
                            className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left font-bold text-[#121826] transition-colors hover:text-[#0066FF] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0066FF] sm:px-5"
                            type="button"
                            onClick={() => setAberta(aberta === index ? null : index)}
                            aria-expanded={aberta === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span>{item[0]}</span>
                            <span className="shrink-0 text-xl text-[#0066FF]" aria-hidden="true">
                                {aberta === index ? "−" : "+"}
                            </span>
                        </button>
                        {aberta === index && (
                            <div
                                className="px-4 pb-5 leading-relaxed text-[#64748B] sm:px-5"
                                id={`faq-answer-${index}`}
                            >
                                <p>{item[1]}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
