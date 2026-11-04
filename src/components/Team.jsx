import React, { useState } from "react";
import { FiAward, FiX } from "react-icons/fi";
import useModalEscape from "../hooks/useModalEscape.js";

const members = [
    ["Kaick Lima Silva", "574060", "Responsável pela arquitetura do projeto e integração entre front-end e simulador."],
    ["Gustavo Basso", "572623", "Atuou no desenvolvimento da interface e nos estilos responsivos da Landing Page."],
    ["Guilherme Sales", "572933", "Responsável pela lógica do simulador e pelas interações em JavaScript."],
    ["Pedro Feltrin Geraldes", "569038", "Trabalhou na estrutura semântica do HTML e no conteúdo das seções."],
    ["Guilherme Kozikoski Failla", "571611", "Responsável pela pesquisa de público-alvo e validação da proposta da solução."]
];

const Team = () => {
    const [activeMember, setActiveMember] = useState(null);
    useModalEscape(activeMember !== null, setActiveMember);

    return (
        <section className="scroll-mt-20 w-full px-[5%] py-14 sm:py-16 lg:py-20" id="equipe">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    INTEGRANTES
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    Nossa Equipe
                </h2>
            </div>
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {members.map((member, index) => (
                    <button
                        className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0066FF] hover:shadow-[0_12px_25px_rgba(0,102,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] motion-reduce:transition-none"
                        key={member[1]}
                        type="button"
                        onClick={() => setActiveMember(index)}
                        aria-label={`Detalhes de ${member[0]}`}
                    >
                        <FiAward
                            className="mb-3 text-4xl text-[#0066FF]"
                            aria-hidden="true"
                            focusable="false"
                        />
                        <span className="text-lg font-extrabold leading-snug text-[#0044B3]">
                            {member[0]}
                        </span>
                        <span className="mt-2 text-sm text-[#64748B]">RM: {member[1]}</span>
                    </button>
                ))}
            </div>

            {activeMember !== null && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#121826]/85 p-4"
                    onClick={() => setActiveMember(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="team-modal-title"
                >
                    <button
                        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-4xl leading-none text-white transition-colors hover:bg-white/10 hover:text-[#00E5FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-6"
                        type="button"
                        onClick={() => setActiveMember(null)}
                        aria-label="Fechar modal"
                        autoFocus
                    >
                        <FiX aria-hidden="true" focusable="false" />
                    </button>
                    <div
                        className="relative w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-2xl sm:p-9"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2
                            className="text-xl font-extrabold text-[#0044B3] sm:text-2xl"
                            id="team-modal-title"
                        >
                            {members[activeMember][0]}
                        </h2>
                        <p className="mt-2 text-sm text-[#64748B]">
                            RM: {members[activeMember][1]}
                        </p>
                        <p className="mt-5 leading-relaxed text-[#64748B]">
                            {members[activeMember][2]}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Team;
