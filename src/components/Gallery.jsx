import React, { useState } from "react";
import { FiImage, FiX } from "react-icons/fi";
import useModalEscape from "../hooks/useModalEscape.js";

const images = [
    ["inicial.png", "Tela de entrada", "Acesso por Google, e-mail institucional ou captura rápida; apresenta OCR, resumos, quizzes e QR seguro.", "Tela de entrada da Câmera Acadêmica"],
    ["camera.png", "Câmera e modos de captura", "Visualização da câmera com opções de foto, lousa, documento e QR Code.", "Câmera com modos de captura acadêmica"],
    ["biblioteca.png", "Biblioteca vazia", "Busca, filtros e orientação para começar a guardar arquivos acadêmicos.", "Biblioteca sem arquivos, com busca e filtros"],
    ["biblioteca_icon.png", "Biblioteca com materiais", "Arquivos organizados por disciplina, com opção de exportar a pasta em PDF.", "Biblioteca com materiais organizados por disciplina"],
    ["revisao.png", "Fila de revisão", "Materiais em análise e conteúdo pronto para salvar.", "Fila de revisão com itens em diferentes estados"],
    ["revisao_vazia.png", "Fila de revisão vazia", "Estado inicial que orienta a capturar uma foto para ela aparecer na fila.", "Fila de revisão sem itens"]
];

const Gallery = () => {
    const [imageActive, setImageActive] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);
    useModalEscape(imageActive !== null, setImageActive);

    return (
        <section className="scroll-mt-20 w-full px-[5%] py-14 sm:py-16 lg:py-20" id="galeria">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    INTERFACE E RECURSOS
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    Galeria do Protótipo JOVI
                </h2>
            </div>
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {images.map((image, index) => (
                    <button
                        className="group flex min-h-0 flex-col items-center rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-white to-[#F4F6F9] p-3 text-center shadow-[0_10px_25px_rgba(0,102,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0066FF]/40 hover:shadow-[0_20px_40px_rgba(0,102,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] disabled:cursor-default disabled:hover:translate-y-0 disabled:hover:border-[#E2E8F0] disabled:hover:shadow-[0_10px_25px_rgba(0,102,255,0.05)] motion-reduce:transition-none"
                        key={image[0]}
                        type="button"
                        disabled={!loadedImages.includes(index)}
                        onClick={() => setImageActive(index)}
                        aria-label={
                            loadedImages.includes(index)
                                ? `Ampliar ${image[1]}`
                                : `${image[1]}: ${image[2]}`
                        }
                    >
                        <span className="flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#F4F6F9] to-[#EAF3FF] p-4 sm:h-52 lg:h-60">
                            {!loadedImages.includes(index) && (
                                <span className="flex max-w-full flex-col items-center gap-3 break-words text-center">
                                    <FiImage
                                        className="text-4xl text-[#0066FF]"
                                        aria-hidden="true"
                                        focusable="false"
                                    />
                                    <strong className="text-base font-extrabold text-[#0044B3] sm:text-lg">
                                        {image[1]}
                                    </strong>
                                    <span className="text-sm leading-relaxed text-[#64748B]">
                                        {image[2]}
                                    </span>
                                </span>
                            )}
                            <img
                                className={`h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none ${
                                    loadedImages.includes(index) ? "block" : "hidden"
                                }`}
                                src={`/img/prototipo/${image[0]}`}
                                alt={image[2]}
                                loading="lazy"
                                onLoad={() => {
                                    setLoadedImages((current) => {
                                        if (current.includes(index)) {
                                            return current;
                                        }
                                        return [...current, index];
                                    });
                                }}
                            />
                        </span>
                        {loadedImages.includes(index) && (
                            <span className="mt-3 flex flex-col gap-1">
                                <strong className="text-sm font-bold text-[#0044B3]">
                                    {image[1]}
                                </strong>
                                <span className="text-xs leading-relaxed text-[#64748B]">
                                    {image[2]}
                                </span>
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {imageActive !== null && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center overflow-y-auto bg-[#121826]/90 p-4 sm:p-8"
                    onClick={() => setImageActive(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={images[imageActive][1]}
                >
                    <button
                        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-4xl leading-none text-white transition-colors hover:bg-white/10 hover:text-[#00E5FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-6"
                        type="button"
                        onClick={() => setImageActive(null)}
                        aria-label="Fechar imagem"
                        autoFocus
                    >
                        <FiX aria-hidden="true" focusable="false" />
                    </button>
                    <div
                        className="my-auto flex max-h-[90vh] max-w-full flex-col items-center gap-4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            className="max-h-[75vh] max-w-full rounded-2xl border border-white/20 object-contain shadow-2xl"
                            src={`/img/prototipo/${images[imageActive][0]}`}
                            alt={images[imageActive][3]}
                        />
                        <p className="max-w-full break-words rounded-full border border-[#00E5FF]/40 bg-[#0066FF]/20 px-5 py-2 text-center font-bold text-white">
                            {images[imageActive][1]}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
