
import { useState } from "react";

const integrantes = [
    {
        nome: "Kaick Lima Silva",
        rm: "574060",
        bio: "Responsável pela arquitetura do projeto e integração entre front-end e simulador."
    },
    {
        nome: "Gustavo Basso",
        rm: "572623",
        bio: "Atuou no desenvolvimento da interface e nos estilos responsivos da Landing Page."
    },
    {
        nome: "Guilherme Sales",
        rm: "572933",
        bio: "Responsável pela lógica do simulador e pelas interações em JavaScript."
    },
    {
        nome: "Pedro Feltrin Geraldes",
        rm: "569038",
        bio: "Trabalhou na estrutura semântica do HTML e no conteúdo das seções."
    },
    {
        nome: "Guilherme Kozikoski",
        rm: "571611",
        bio: "Responsável pela pesquisa de público-alvo e validação da proposta da solução."
    }
];

export default function Team() {
    const [membroAtivo, setMembroAtivo] = useState(null);

    return (
        <section className="secao" id="equipe">
            <div className="titulo-secao">
                <span>INTEGRANTES</span>
                <h2>Nossa Equipe</h2>
            </div>

            <div className="grid-equipe">
                {integrantes.map(membro => (
                    <article
                        className="card-membro"
                        key={membro.rm}
                        onClick={() => setMembroAtivo(membro)}
                    >
                        <div className="avatar">🎓</div>
                        <h3>{membro.nome}</h3>
                        <p>RM: {membro.rm}</p>
                    </article>
                ))}
            </div>

            {membroAtivo && (
                <div
                    className="modal ativo"
                    onClick={() => setMembroAtivo(null)}
                >
                    <button
                        className="modal-fechar"
                        onClick={() => setMembroAtivo(null)}
                        aria-label="Fechar modal"
                    >
                        &times;
                    </button>

                    <div
                        className="modal-membro-conteudo"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3>{membroAtivo.nome}</h3>
                        <p>{membroAtivo.bio}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
