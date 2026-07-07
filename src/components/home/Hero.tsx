"use client";
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
                <div  className=" grid  grid-cols-[20%_80%]  items-center  gap-10 py-5 "
                >
                    <motion.div
                        className="flex flex-col items-center justify-center"

                        initial={{
                            opacity: 0,
                            x: -50,
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                        }}

                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <Image
                            src="/images/FotoPerfilPsicologo.png"
                            alt="Lic. Manuel Carrillo Quintero"
                            width={300}
                            height={300}
                            
                            priority
                            className="rounded-full object-cover shadow-2xl  ring-4  ring-white/30"
                        />
                    </motion.div>    
                    
                    <motion.div
                        className="space-y-5 max-w-8xl"

                        initial={{
                            opacity: 0,
                            y: 30,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <h1 className={`${playfair.className} text-6xl font-bold text-white`}>
                            Lic. Manuel Carrillo Quintero
                        </h1>
                        <div className="w-210 h-1 rounded-full bg-[var(--background)]"></div>
                        <h2 className="text-2xl text-white/90">
                            Psicología Forense y Psicología Holística
                        </h2>

                        <p className="text-lg text-white/80">
                            Zacatecas, Zac., México
                        </p>
                        <motion.div className="flex gap-4 pt-4"
                            initial={{
                                opacity: 0,
                            }}

                            animate={{
                                opacity: 1,
                            }}

                            transition={{
                                delay: 0.8,
                                duration: 0.5,
                            }}
                        >
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
                        </motion.div>
                    
                    </motion.div> 
                </div>
                
            </Container>

        </section>
    );

}