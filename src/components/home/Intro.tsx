"use client";
import Container from "../layout/Container";
import { motion } from "framer-motion";

export default function Intro() {

    return (

        <section className="py-20">

            <Container>
                <motion.div

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true,
                        amount:.3
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="mx-auto max-w-4xl text-center"
                >
                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-[var(--primary-dark)]
                        "
                    >
                        Atención psicológica profesional
                    </h2>
                    <div
                        className="
                            mx-auto
                            mt-5
                            mb-8
                            h-1
                            w-32
                            rounded-full
                            bg-[var(--primary)]
                        "
                    ></div>
                    <p
                        className="
                            text-xl
                            leading-9
                            text-[var(--primary-dark)]
                        "
                    >
                        Brindo atención psicológica profesional con un enfoque ético,
                        humano y personalizado, acompañando a cada persona en su proceso
                        de crecimiento, bienestar emocional y resolución de conflictos.
                    </p>
                </motion.div>
            </Container>

        </section>

    );

}