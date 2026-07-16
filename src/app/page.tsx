import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Servicios from "@/components/home/Servicios";
import Conoceme from "@/components/home/Conoceme";
import Ubicacion from "@/components/home/Ubicacion";
import Contacto from "@/components/home/Contacto";
import SinAutenticar from "@/components/home/SinAutentificar"

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Servicios />
      <Conoceme />
      <Ubicacion />
      <Contacto />
      <SinAutenticar />

      

    </main>
  );
}