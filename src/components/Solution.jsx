
const solucoes = [
    {
        icone: "👨‍🏫",
        titulo: "Modo Aula Automático",
        descricao: "Reconhecimento de ambiente por localização e horário, ajudando na captura das imagens."
    },
    {
        icone: "📄",
        titulo: "OCR & Scanner",
        descricao: "Detecção automática dos cantos para digitalização de cadernos e livros."
    },
    {
        icone: "🧠",
        titulo: "Resumos & Flashcards",
        descricao: "Transformação da imagem da aula em tópicos, exercícios e cartões de revisão."
    }
];

export default function Solution() {
    return (
        <section className="secao" id="solucao">
            <div className="titulo-secao">
                <span>DESAFIO & TECNOLOGIA</span>
                <h2>A Solução NextCode</h2>
            </div>

            <div className="grid-solucao">
                {solucoes.map(item => (
                    <article className="card-solucao" key={item.titulo}>
                        <div className="icone">{item.icone}</div>
                        <h3>{item.titulo}</h3>
                        <p>{item.descricao}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
