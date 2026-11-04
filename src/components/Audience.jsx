import React from "react";

const Audience = () => {
    return (
        <section className="scroll-mt-20 w-full bg-[#F4F6F9] px-[5%] py-14 sm:py-16 lg:py-20" id="publico">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    PERSONA
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    Público-Alvo
                </h2>
            </div>
            <div className="mx-auto w-full max-w-[800px] rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center text-base leading-relaxed text-[#121826] shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-10 sm:text-lg">
                <p>
                    A solução foi criada para
                    <strong className="text-[#0044B3]"> estudantes fulltime </strong>
                    que precisam conciliar aulas, trabalhos, projetos e rotina pessoal.
                </p>
            </div>
        </section>
    );
};

export default Audience;
