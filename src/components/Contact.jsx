import React, { useEffect, useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [notice, setNotice] = useState("");

    useEffect(() => {
        if (!notice) {
            return;
        }

        const timer = setTimeout(() => setNotice(""), 3500);
        return () => clearTimeout(timer);
    }, [notice]);

    const submitForm = (event) => {
        event.preventDefault();

        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanMessage = message.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;

        setNameError("");
        setEmailError("");
        setMessageError("");

        if (!cleanName) {
            setNameError("O nome é obrigatório.");
            valid = false;
        } else if (cleanName.length < 3) {
            setNameError("O nome deve ter pelo menos 3 caracteres.");
            valid = false;
        }

        if (!cleanEmail) {
            setEmailError("O e-mail é obrigatório.");
            valid = false;
        } else if (!emailPattern.test(cleanEmail)) {
            setEmailError("Insira um e-mail válido.");
            valid = false;
        }

        if (!cleanMessage) {
            setMessageError("A mensagem não pode estar vazia.");
            valid = false;
        } else if (cleanMessage.length < 10) {
            setMessageError("A mensagem deve ter pelo menos 10 caracteres.");
            valid = false;
        }

        if (valid) {
            setNotice("Formulário validado. Esta demonstração não envia mensagens.");
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    const fieldClass = "w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm text-[#121826] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 aria-invalid:border-red-500 aria-invalid:bg-red-50 motion-reduce:transition-none";

    return (
        <section className="scroll-mt-20 w-full bg-[#F4F6F9] px-[5%] py-14 sm:py-16 lg:py-20" id="contato">
            <div className="mx-auto mb-8 w-full max-w-[800px] text-center sm:mb-12">
                <span className="text-xs font-bold tracking-widest text-[#0066FF] sm:text-sm">
                    CONTATO
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#121826] sm:text-3xl">
                    Fale Conosco
                </h2>
            </div>
            <form
                className="mx-auto flex w-full max-w-[600px] flex-col gap-5"
                onSubmit={submitForm}
                noValidate
            >
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#121826]" htmlFor="contact-name">
                        Seu Nome
                    </label>
                    <input
                        className={fieldClass}
                        id="contact-name"
                        type="text"
                        placeholder="Seu Nome"
                        value={name}
                        aria-invalid={Boolean(nameError)}
                        aria-describedby="error-name"
                        onChange={(event) => {
                            setName(event.target.value);
                            setNameError("");
                        }}
                    />
                    {nameError && (
                        <span className="mt-1 text-xs text-red-700" id="error-name" role="alert">
                            {nameError}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#121826]" htmlFor="contact-email">
                        Seu E-mail
                    </label>
                    <input
                        className={fieldClass}
                        id="contact-email"
                        type="email"
                        placeholder="Seu E-mail"
                        value={email}
                        aria-invalid={Boolean(emailError)}
                        aria-describedby="error-email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                            setEmailError("");
                        }}
                    />
                    {emailError && (
                        <span className="mt-1 text-xs text-red-700" id="error-email" role="alert">
                            {emailError}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#121826]" htmlFor="contact-message">
                        Sua Mensagem
                    </label>
                    <textarea
                        className={`${fieldClass} min-h-32 resize-y`}
                        id="contact-message"
                        placeholder="Sua Mensagem"
                        value={message}
                        aria-invalid={Boolean(messageError)}
                        aria-describedby="error-message"
                        onChange={(event) => {
                            setMessage(event.target.value);
                            setMessageError("");
                        }}
                    />
                    {messageError && (
                        <span className="mt-1 text-xs text-red-700" id="error-message" role="alert">
                            {messageError}
                        </span>
                    )}
                </div>

                <button
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#0066FF] px-7 py-3 font-bold text-white transition-colors hover:bg-[#0044B3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0044B3] sm:w-fit motion-reduce:transition-none"
                    type="submit"
                >
                    Enviar Mensagem
                </button>
            </form>

            {notice && (
                <div
                    className="fixed bottom-4 left-4 right-4 z-[3000] rounded-xl bg-[#121826] px-5 py-4 text-center font-semibold text-white shadow-xl sm:bottom-7 sm:left-auto sm:right-7 sm:max-w-md"
                    role="status"
                >
                    {notice}
                </div>
            )}
        </section>
    );
};

export default Contact;
