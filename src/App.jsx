import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Solution from "./components/Solution.jsx";
import Audience from "./components/Audience.jsx";
import Gallery from "./components/Gallery.jsx";
import Simulator from "./components/Simulator.jsx";
import FAQ from "./components/FAQ.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AccessPage from "./pages/AccessPage.jsx";
import StudyWorkspacePage from "./pages/StudyWorkspacePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import usePathNavigation from "./hooks/usePathNavigation.js";
import useDemoAuth from "./hooks/useDemoAuth.js";

const App = () => {
    const [path, navigate, navigateTo] = usePathNavigation();
    const [authenticated, signIn, signOut] = useDemoAuth();
    const [accessMessage, setAccessMessage] = useState("");

    const handleLogin = (email, password) => {
        if (signIn(email, password)) {
            setAccessMessage("");
            navigateTo("/area-estudos");
        } else {
            setAccessMessage("Credenciais de demonstração inválidas.");
        }
    };

    const handleLogout = () => {
        signOut();
        navigateTo("/");
    };

    let pageContent = null;

    if (path === "/") {
        pageContent = (
            <main>
                <Hero />
                <Solution />
                <Audience />
                <Gallery />
                <Simulator />
                <FAQ />
                <Team />
                <Contact />
            </main>
        );
    } else if (path === "/acesso") {
        pageContent = (
            <AccessPage onLogin={handleLogin} notice={accessMessage} />
        );
    } else if (path === "/area-estudos" && authenticated) {
        pageContent = <StudyWorkspacePage onLogout={handleLogout} />;
    } else if (path === "/area-estudos") {
        pageContent = (
            <AccessPage
                onLogin={handleLogin}
                notice="Entre com a conta de demonstração para acessar esta área."
            />
        );
    } else {
        pageContent = <NotFoundPage onNavigate={navigate} />;
    }

    return (
        <>
            <Header
                onNavigate={navigate}
                authenticated={authenticated}
                onLogout={handleLogout}
            />
            {pageContent}
            <Footer />
        </>
    );
};

export default App;
