import React, { useState } from "react";
import { FiCpu, FiSearch, FiZap } from "react-icons/fi";

const abas = [
    ["modo-aula", "Modo Aula", "Ativação Contextual Instantânea", "Detecta salas de aula e horários de estudo, ajustando foco e brilho para capturar lousas.", FiZap],
    ["ocr-pro", "OCR & Scanner", "Leitura de Textos", "Extrai textos de quadros, cadernos e apostilas, permitindo copiar e organizar o conteúdo.", FiSearch],
    ["ia-flashcards", "IA & Resumos", "Aprendizado Automatizado", "Transforma o conteúdo fotografado em perguntas, respostas e cartões de memorização.", FiCpu]
];

const Hero = () => {
    const [abaAtiva, setAbaAtiva] = useState("modo-aula");
    const [imagemCarregada, setImagemCarregada] = useState(false);
    const [imagemDisponivel, setImagemDisponivel] = useState(true);
    const aba = abas.find((item) => item[0] === abaAtiva);

    return (
        <section className="mx-auto flex min-h-[calc(100vh-70px)] w-full max-w-[1400px] flex-col justify-center gap-8 px-[5%] py-10 md:gap-10">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
                <div className="w-full max-w-[650px] text-center md:text-left">
                    <span className="mb-4 inline-flex w-fit items-center justify-center rounded-full bg-[#0066FF]/10 px-4 py-2 text-center text-xs font-bold tracking-wide text-[#0066FF]">
                        DESAFIO JOVI SMARTPHONE 2026
                    </span>
                    <h1 className="my-3 text-3xl font-extrabold leading-tight text-[#0044B3] sm:text-4xl lg:text-[42px]">
                        Câmera Inteligente.
                        <span className="text-[#0066FF]"> Sua rotina acadêmica descomplicada.</span>
                    </h1>
                    <p className="mb-7 text-base leading-relaxed text-[#64748B] sm:text-lg">
                        Potencializando a câmera dos smartphones JOVI
                        com inteligência contextual para captura de
                        lousas, leitura OCR, resumo e geração de flashcards.
                    </p>
                    <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
                        <a
                            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#0066FF] px-7 py-3 font-bold text-white transition-colors hover:bg-[#0044B3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0044B3] motion-reduce:transition-none"
                            href="#solucao"
                        >
                            Conhecer a Solução
                        </a>
                        <a
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0066FF] px-6 py-3 font-semibold text-[#0044B3] transition-colors hover:bg-[#0066FF]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0044B3] motion-reduce:transition-none"
                            href="https://smartystudy.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Abrir protótipo publicado
                        </a>
                    </div>
                </div>

                <div className="relative flex w-full flex-1 items-center justify-center px-3 py-5">
                    <div className="absolute h-[min(420px,90vw)] w-[min(320px,80vw)] rotate-[-2deg] rounded-3xl border border-white bg-gradient-to-br from-white to-[#F4F6F9] shadow-[0_20px_40px_rgba(0,102,255,0.08)] md:w-[min(260px,70vw)] xl:w-[min(320px,80vw)]" />
                    <div className="absolute h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.25),rgba(0,102,255,0.15)_60%,transparent)]" />
                    {imagemDisponivel && (
                        <img
                            className={`relative z-10 max-h-[min(420px,85vw)] w-full max-w-[280px] rounded-2xl border-4 border-[#0066FF] bg-white object-contain shadow-xl ${
                                imagemCarregada ? "block" : "hidden"
                            }`}
                            src="/img/prototipo/inicial.png"
                            alt="Tela de Login e Cadastro - Câmera Acadêmica"
                            onLoad={() => setImagemCarregada(true)}
                            onError={() => setImagemDisponivel(false)}
                        />
                    )}
                    {!imagemCarregada && (
                        <div
                            className="relative z-10 flex min-h-[320px] w-full max-w-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#0066FF] bg-gradient-to-br from-white to-[#EAF3FF] p-7 text-center shadow-lg"
                            role="img"
                            aria-label="Espaço reservado para a tela do protótipo"
                        >
                            <span className="text-2xl font-extrabold text-[#0044B3]">
                                Protótipo NextCode
                            </span>
                            <p className="text-sm leading-relaxed text-[#64748B]">
                                {imagemDisponivel
                                    ? "Carregando a tela do protótipo..."
                                    : "Não foi possível carregar a imagem em public/img/prototipo/inicial.png."}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div
                className="mt-2 flex w-full flex-col justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-3"
                role="tablist"
                aria-label="Recursos da câmera"
            >
                {abas.map((item) => {
                    const TabIcon = item[4];

                    return (
                        <button
                            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0044B3] motion-reduce:transition-none ${
                                abaAtiva === item[0]
                                    ? "border-[#0066FF] bg-[#0066FF] text-white"
                                    : "border-[#E2E8F0] bg-[#F4F6F9] text-[#121826] hover:border-[#0066FF] hover:text-[#0066FF]"
                            }`}
                            key={item[0]}
                            id={`hero-tab-${item[0]}`}
                            role="tab"
                            type="button"
                            onClick={() => setAbaAtiva(item[0])}
                            aria-selected={abaAtiva === item[0]}
                            aria-controls="hero-tab-panel"
                        >
                            <TabIcon
                                className="shrink-0"
                                aria-hidden="true"
                                focusable="false"
                            />
                            {item[1]}
                        </button>
                    );
                })}
            </div>
            <div
                className="rounded-2xl bg-[#F4F6F9] p-5 text-center sm:p-6"
                id="hero-tab-panel"
                role="tabpanel"
                aria-labelledby={`hero-tab-${aba[0]}`}
            >
                <h2 className="text-xl font-bold text-[#121826]">{aba[2]}</h2>
                <p className="mt-2 text-[#64748B]">{aba[3]}</p>
            </div>
        </section>
    );
};

export default Hero;
