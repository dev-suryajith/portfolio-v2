import "../constants/theme/dark-minimal.css"

import Navbar from "../sections/dark-minimal/Navbar";
import About from "../sections/dark-minimal/About";
import Contact from "../sections/dark-minimal/Contact";
import Footer from "../sections/dark-minimal/Footer";
import Hero from "../sections/dark-minimal/Hero";
import Projects from "../sections/dark-minimal/Projects";

function DarkMinimalHome() {
    return (
        <div className="min-h-screen bg-(--color-bg)">
            <Navbar />

            <main className="container pt-20">
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default DarkMinimalHome;