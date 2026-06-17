import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Specs } from "./components/Specs";
import { ElPiso } from "./components/ElPiso";
import { TourVirtual } from "./components/TourVirtual";
import { Gallery } from "./components/Gallery";
import { Documentacion } from "./components/Documentacion";
import { Entorno } from "./components/Entorno";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specs />
        <ElPiso />
        <TourVirtual />
        <Gallery />
        <Documentacion />
        <Entorno />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
