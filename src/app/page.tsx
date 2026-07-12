import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Servicios from "@/components/home/Servicios";
import Conoceme from "@/components/home/Conoceme";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Servicios />
      <Conoceme />

      <section id="servicios">
        <h1>Servicios</h1>
      </section>

      <section id="conoceme">
        <h1>Conóceme</h1>
      </section>

      <section id="ubicacion">
        <h1>Ubicación</h1>
      </section>

      <section id="contacto">
        <h1>Contacto</h1>
      </section>

    </main>
  );
}