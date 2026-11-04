import React, { useState } from "react";

const AccessPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onLogin(email, password);
    };

    const inputClass = "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

    return (
        <main className="min-h-[70vh] bg-slate-50 px-4 py-12 sm:px-8">
            <section className="mx-auto w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Acesso demonstrativo
                </span>
                <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
                    Entre na sua área de estudos
                </h1>
                <p className="mt-3 text-slate-600">
                    Este acesso é apenas uma demonstração local. Não valida identidades nem protege dados reais.
                </p>

                <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                    <label className="grid gap-2 font-semibold text-slate-700">
                        E-mail
                        <input
                            className={inputClass}
                            type="email"
                            autoComplete="username"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </label>

                    <label className="grid gap-2 font-semibold text-slate-700">
                        Senha
                        <input
                            className={inputClass}
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </label>

                    {props.notice && (
                        <p
                            className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900"
                            role="status"
                        >
                            {props.notice}
                        </p>
                    )}

                    <button
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 motion-reduce:transition-none"
                        type="submit"
                    >
                        Acessar demonstração
                    </button>
                </form>

                <p className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-950">
                    Credenciais de teste: <strong>estudante@nextcode.com</strong>
                    {" / "}
                    <strong>nextcode2026</strong>
                </p>
            </section>
        </main>
    );
};

export default AccessPage;
