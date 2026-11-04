import React from "react";
import useAcademicSearch from "../hooks/useAcademicSearch.js";

const StudyWorkspacePage = (props) => {
    const [query, setQuery, books, loading, errorMessage, search] =
        useAcademicSearch();

    const searchInputClass = "min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

    return (
        <main className="min-h-[70vh] bg-slate-50 px-4 py-10 sm:px-8">
            <section className="mx-auto w-full max-w-5xl">
                <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                            Espaço de aprendizagem
                        </span>
                        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                            Encontre referências para estudar
                        </h1>
                        <p className="mt-3 max-w-2xl text-slate-300">
                            Pesquise no catálogo público Open Library por título ou tema. Os resultados vêm da API e não são recomendações acadêmicas revisadas.
                        </p>
                    </div>
                    <button
                        className="min-h-11 shrink-0 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                        type="button"
                        onClick={props.onLogout}
                    >
                        Sair
                    </button>
                </div>

                <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8">
                    <form
                        className="flex flex-col gap-3 sm:flex-row"
                        onSubmit={search}
                    >
                        <label className="sr-only" htmlFor="academic-search">
                            Tema, autor ou título
                        </label>
                        <input
                            className={searchInputClass}
                            id="academic-search"
                            type="search"
                            value={query}
                            placeholder="Ex.: cálculo, biologia, redes..."
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <button
                            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Buscando..." : "Buscar referências"}
                        </button>
                    </form>

                    {loading && (
                        <p className="mt-6 text-blue-700" role="status">
                            Consultando o catálogo Open Library...
                        </p>
                    )}
                    {errorMessage && (
                        <p
                            className="mt-6 rounded-lg bg-rose-50 p-4 text-rose-800"
                            role="alert"
                        >
                            {errorMessage}
                        </p>
                    )}
                    {!loading && !errorMessage && books.length === 0 && (
                        <p className="mt-6 text-slate-600">
                            Os resultados da busca aparecerão aqui.
                        </p>
                    )}

                    {books.length > 0 && (
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {books.map((book, index) => (
                                <article
                                    className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md motion-reduce:transition-none"
                                    key={
                                        book.key
                                            ? book.key
                                            : book.title + index
                                    }
                                >
                                    <h2 className="break-words text-lg font-bold text-slate-900">
                                        {book.title
                                            ? book.title
                                            : "Título não informado"}
                                    </h2>
                                    <p className="mt-2 break-words text-sm text-slate-600">
                                        {book.author_name &&
                                        book.author_name.length > 0
                                            ? book.author_name[0]
                                            : "Autoria não informada"}
                                        {book.first_publish_year
                                            ? " · " +
                                              book.first_publish_year
                                            : ""}
                                    </p>
                                    {book.key && (
                                        <a
                                            className="mt-4 inline-block break-words font-semibold text-blue-700 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            href={
                                                "https://openlibrary.org" +
                                                book.key
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ver registro no Open Library
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
};

export default StudyWorkspacePage;
