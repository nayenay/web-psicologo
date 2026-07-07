import Image from "next/image";
import Container from "../layout/Container";
import { Playfair_Display } from "next/font/google";
import Link from "next/link"; 
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {

    return (
        <section 
            className="
                min-h-[300px]  bg-gradient-to-b  from-[var(--primary)] via-[#4A9BB8] to-[var(--background)] "
                >
            <Container>
                <div  className=" grid  grid-cols-[20%_75%]  items-center  gap-10 py-5 "
                >
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/FotoPerfilPsicologo.png"
                            alt="Lic. Manuel Carrillo Quintero"
                            width={300}
                            height={300}
                            
                            priority
                            className="rounded-full object-cover shadow-2xl  ring-4  ring-white/30"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className={`${playfair.className} text-6xl font-bold text-white`}>
                            Lic. Manuel Carrillo Quintero
                        </h1>
                        
                        <h2 className="text-2xl text-white/90">
                            Psicología Forense y Psicología Holística
                        </h2>

                        <p className="text-lg text-white/80">
                            Zacatecas, Zac., México
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link
                                href="#agendarcita"
                                className=" rounded-full  bg-[var(--primary-dark)]  px-7  py-3  font-semibold  text-white  transition-all
                                    duration-300  hover:scale-105  hover:bg-[var(--primary)]  text-center"
                            >
                                Agendar cita
                            </Link>
                            <Link
                                href="#contacto"
                                className="  rounded-full  border-2  border-[var(--primary-dark)]  px-7  py-3  font-semibold
                                    text-[var(--primary-dark)]  transition-all  duration-300  hover:bg-[var(--primary-dark)]  hover:text-white  text-center"
                            >
                                Enviar mensaje
                            </Link>
                        </div>
                    </div>
                </div>
                
            </Container>

        </section>
    );

}