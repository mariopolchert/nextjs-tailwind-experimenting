import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Work from "./components/Work";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Tools />
            <Work />
            <Contact />
        </main>
    );
}
