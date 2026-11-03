
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Solution from "./src/components/Solution";
import Audience from "./src/components/Audience";
import Gallery from "./src/components/Gallery";
import Simulator from "./src/components/Simulator";
import FAQ from "./src/components/FAQ";
import Team from "./src/components/Team";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

export default function App() {
    return (
        <>
            <Header />

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

            <Footer />
        </>
    );
}
