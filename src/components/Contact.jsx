
import { useState } from "react";

export default function Contact() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erros, setErros] = useState({});
    const [toast, setToast] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();

        const novosErros = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nome.trim()) {
            novosErros.nome = "O nome é obrigatório.";
        } else if (nome.trim().length < 3) {
            novosErros.nome = "O nome deve ter pelo menos 3 caracteres.";
        }

        if (!email.trim()) {
            novosErros.email = "O e-mail é obrigatório.";
        } else if (!regexEmail.test(email)) {
            novosErros.email = "Insira um e-mail válido.";
        }

        if (!mensagem.trim()) {
            novosErros.mensagem = "A mensagem não pode estar vazia.";
        } else if (mensagem.trim().length < 10) {
            novosErros.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
        }

        setErros(novosErros);

        if (Object.keys(novosErros).length === 0) {
            setToast("✅ Mensagem enviada com sucesso! Entraremos em contato.");
            setNome("");
            setEmail("");
            setMensagem("");

            setTimeout(() => setToast(""), 3500);
        }
    }

    return (
        <section className="secao fundo-alt" id="contato">
            <div className="titulo-secao">
                <span>CONTATO</span>
                <h2>Fale Conosco</h2>
            </div>

            <form className="formulario" onSubmit={enviarFormulario}>
                <div className="campo-grupo">
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        value={nome}
                        className={erros.nome ? "campo-invalido" : ""}
                        onChange={e => setNome(e.target.value)}
                    />
                    <span className="erro-msm">{erros.nome}</span>
                </div>

                <div className="campo-grupo">
                    <input
                        type="email"
                        placeholder="Seu E-mail"
                        value={email}
                        className={erros.email ? "campo-invalido" : ""}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="erro-msm">{erros.email}</span>
                </div>

                <div className="campo-grupo">
                    <textarea
                        placeholder="Sua Mensagem"
                        value={mensagem}
                        className={erros.mensagem ? "campo-invalido" : ""}
                        onChange={e => setMensagem(e.target.value)}
                    />
                    <span className="erro-msm">{erros.mensagem}</span>
                </div>

                <button type="submit" className="btn principal">
                    Enviar Mensagem
                </button>
            </form>

            {toast && <div className="toast ativo">{toast}</div>}
        </section>
    );
}
