import React, { useState } from "react";
import { FiCamera, FiMenu, FiX } from "react-icons/fi";

const Header = (props) => {
    const [menuAberto, setMenuAberto] = useState(false);

    const navegarParaRota = (event) => {
        setMenuAberto(false);
        props.onNavigate(event);
    };

    const navegarParaSecao = (event) => {
        setMenuAberto(false);
        props.onNavigate(event);
    };

    const links = [
        ["A Solução", "#solucao"],
        ["Público-Alvo", "#publico"],
        ["Galeria", "#galeria"],
        ["Simulador", "#mockup"],
        ["FAQ", "#faq"],
        ["Nossa Equipe", "#equipe"],
        ["Contato", "#contato"]
    ];

    return (
        <header className="sticky top-0 z-[1000] flex h-[70px] w-full items-center justify-between bg-white/95 px-[5%] shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <a
                className="shrink-0 text-lg font-extrabold text-[#121826] sm:text-xl"
                href="/"
                onClick={navegarParaRota}
                aria-label="NextCode, página inicial"
            >
                <FiCamera
                    className="mr-1 inline-block align-[-3px] text-[#0066FF]"
                    aria-hidden="true"
                />
                NextCode <span className="text-[#0066FF]">x JOVI</span>
            </a>

            <nav
                className={
                    menuAberto
                        ? "absolute inset-x-0 top-full flex max-h-[calc(100vh-70px)] flex-col items-center overflow-y-auto overscroll-contain border-b border-[#E2E8F0] bg-white px-[5%] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] xl:static xl:max-h-none xl:flex-row xl:gap-3 xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none 2xl:gap-5"
                        : "absolute inset-x-0 top-full hidden max-h-[calc(100vh-70px)] flex-col items-center overflow-y-auto overscroll-contain border-b border-[#E2E8F0] bg-white px-[5%] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] xl:static xl:flex xl:max-h-none xl:flex-row xl:gap-3 xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none 2xl:gap-5"
                }
                id="menu"
                aria-label="Navegação principal"
            >
                {links.map((link) => (
                    <a
                        className="w-full border-b border-[#E2E8F0] py-3 text-center font-semibold text-[#64748B] transition-colors hover:text-[#0066FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] last:border-0 xl:w-auto xl:border-0 xl:py-2"
                        key={link[1]}
                        href={link[1]}
                        onClick={navegarParaSecao}
                    >
                        {link[0]}
                    </a>
                ))}
                <a
                    className="w-full py-3 text-center font-bold text-[#0066FF] transition-colors hover:text-[#0044B3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] xl:w-auto xl:px-2 xl:py-2"
                    href={props.authenticated ? "/area-estudos" : "/acesso"}
                    onClick={navegarParaRota}
                >
                    {props.authenticated ? "Área de estudos" : "Acessar"}
                </a>
                {props.authenticated && (
                    <button
                        className="w-full rounded-lg border border-[#E2E8F0] px-4 py-2 font-bold text-[#121826] transition-colors hover:border-[#0066FF] hover:text-[#0066FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] xl:w-auto"
                        type="button"
                        onClick={props.onLogout}
                    >
                        Sair
                    </button>
                )}
            </nav>

            <button
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] text-xl text-[#121826] transition-colors hover:border-[#0066FF] hover:text-[#0066FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] xl:hidden"
                type="button"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                aria-controls="menu"
                aria-expanded={menuAberto}
            >
                {menuAberto ? (
                    <FiX aria-hidden="true" focusable="false" />
                ) : (
                    <FiMenu aria-hidden="true" focusable="false" />
                )}
            </button>
        </header>
    );
};

export default Header;
