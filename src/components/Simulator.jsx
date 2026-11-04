import React, { useEffect, useState } from "react";
import { FiUpload, FiZap } from "react-icons/fi";

const Simulator = () => {
    const [image, setImage] = useState("/img/prototipo/revisao.png");
    const [filterApplied, setFilterApplied] = useState(false);
    const [result, setResult] = useState(
        "As ações abaixo são demonstrações visuais; não analisam a imagem."
    );

    useEffect(() => {
        if (image.indexOf("blob:") !== 0) {
            return;
        }

        return () => URL.revokeObjectURL(image);
    }, [image]);

    const uploadImage = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            setResult("A imagem deve ter no máximo 10 MB.");
            event.target.value = "";
            return;
        }

        if (file.type.indexOf("image/") !== 0) {
            setResult("Selecione um arquivo de imagem para o simulador.");
            event.target.value = "";
            return;
        }

        try {
            setImage(URL.createObjectURL(file));
            setFilterApplied(false);
            setResult("Imagem carregada localmente para a demonstração.");
        } catch {
            setResult("Não foi possível abrir esta imagem.");
        }
    };

    const applyFilter = () => {
        setFilterApplied(true);
        setResult("Pré-visualização: contraste e brilho foram ajustados.");
    };

    const demonstrateOcr = () => {
        setResult("Demonstração de OCR: conteúdo de exemplo — Equação de Ondas: v = λ × f. A imagem não foi analisada.");
    };

    const demonstrateFlashcard = () => {
        setResult("Demonstração de flashcard: Q: O que significa λ? | R: Comprimento de onda. O cartão não foi gerado a partir da imagem.");
    };

    const controlClass = "min-h-11 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0066FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-1 motion-reduce:transition-none";

    return (
        <section className="scroll-mt-20 w-full bg-[#F4F6F9] px-[5%] py-14 sm:py-16 lg:py-20" id="mockup">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    EXPERIÊNCIA INTERATIVA
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    Simulador da Câmera JOVI
                </h2>
            </div>
            <div className="mx-auto w-full max-w-[550px] rounded-2xl bg-[#121826] p-4 text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:rounded-3xl sm:p-6">
                <div className="mb-4 text-center text-sm font-bold text-[#00E5FF]">
                    <FiZap
                        className="mr-1 inline-block align-[-3px]"
                        aria-hidden="true"
                        focusable="false"
                    />
                    Modo Aula • Demonstração
                </div>
                <div
                    className={`mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#64748B] bg-[#2A3447] p-4 text-center text-sm text-white sm:h-52 sm:p-5 lg:h-64 ${
                        filterApplied ? "contrast-[1.2] brightness-[1.1]" : ""
                    }`}
                >
                    {image ? (
                        <img
                            className="h-full w-full object-contain"
                            src={image}
                            alt="Tela de revisão do protótipo JOVI usada como imagem de exemplo"
                        />
                    ) : (
                        <span>Amostra: Equação de Ondas &amp; Óptica</span>
                    )}
                </div>

                <label
                    className="mb-3 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-[#0066FF] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0044B3] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white motion-reduce:transition-none"
                    htmlFor="inputFoto"
                >
                    <FiUpload
                        className="mr-2"
                        aria-hidden="true"
                        focusable="false"
                    />
                    Enviar Foto
                </label>
                <input
                    className="sr-only"
                    type="file"
                    id="inputFoto"
                    accept="image/*"
                    onChange={uploadImage}
                />

                <div className="flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
                    <button className={controlClass} type="button" onClick={applyFilter}>
                        Pré-visualizar filtro
                    </button>
                    <button className={controlClass} type="button" onClick={demonstrateOcr}>
                        Demonstrar OCR
                    </button>
                    <button className={controlClass} type="button" onClick={demonstrateFlashcard}>
                        Demonstrar Flashcard
                    </button>
                </div>

                <p className="mt-4 min-h-6 break-words text-center text-xs leading-relaxed text-[#00E5FF] sm:text-sm" role="status">
                    {result}
                </p>
            </div>
        </section>
    );
};

export default Simulator;
