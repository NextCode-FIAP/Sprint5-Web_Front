import React from "react";
import { FiFileText, FiLayers, FiMapPin } from "react-icons/fi";

const Solution = () => {
    const solutions = [
        [FiMapPin, "Modo Aula Automático", "Reconhecimento de ambiente por localização e horário, ajudando na captura das imagens."],
        [FiFileText, "OCR & Scanner", "Detecção automática dos cantos para digitalização de cadernos e livros."],
        [FiLayers, "Resumos & Flashcards", "Transformação da imagem da aula em tópicos, exercícios e cartões de revisão."]
    ];

    return (
        <section className="scroll-mt-20 w-full px-[5%] py-14 sm:py-16 lg:py-20" id="solucao">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    DESAFIO &amp; TECNOLOGIA
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    A Solução NextCode
                </h2>
            </div>
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                {solutions.map((item) => {
                    const SolutionIcon = item[0];

                    return (
                        <article
                            className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_15px_36px_rgba(0,102,255,0.12)] sm:p-8 motion-reduce:transition-none"
                            key={item[1]}
                        >
                            <SolutionIcon
                                className="mx-auto mb-4 text-4xl text-[#0066FF]"
                                aria-hidden="true"
                                focusable="false"
                            />
                            <h3 className="text-lg font-bold text-[#121826]">{item[1]}</h3>
                            <p className="mt-3 leading-relaxed text-[#64748B]">{item[2]}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Solution;
