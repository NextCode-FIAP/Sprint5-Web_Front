
import { useState } from "react";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

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
        <header className="topo">
            <div className="logo">
                📸 NextCode <span>x JOVI</span>
            </div>

            <nav className={`menu ${menuAberto ? "active" : ""}`} id="menu">
                {links.map(([nome, destino]) => (
                    <a
                        key={destino}
                        href={destino}
                        onClick={() => setMenuAberto(false)}
                    >
                        {nome}
                    </a>
                ))}
            </nav>

            <button
                className="menu-mobile"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label="Abrir menu"
            >
                ☰
            </button>
        </header>
    );
}
