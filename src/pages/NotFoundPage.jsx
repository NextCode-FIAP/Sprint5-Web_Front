import React from "react";

const NotFoundPage = (props) => {
    return (
        <main className="grid min-h-[65vh] place-content-center px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Página não encontrada
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Este caminho não existe.
            </h1>
            <a
                className="mx-auto mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 motion-reduce:transition-none"
                href="/"
                onClick={props.onNavigate}
            >
                Voltar ao início
            </a>
        </main>
    );
};

export default NotFoundPage;
