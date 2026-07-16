import Link from "next/link";
import Container from "../layout/Container";


export default function SinAutenticar(){
    return (
        <section id="agendar"
            className="py-15 bg-[var(--background)]">
            <Container>
                <div className="text-center mb-8">
                    <h2 className=" text-4xl font-bold text-[var(--primary-dark)]">
                        Agenda una cita o envía un mensaje
                    </h2>             
                    <div className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "/>
                </div > 

                <div
                    className="
                        mx-auto
                        max-w-2xl
                        rounded-3xl
                        bg-[var(--card)]
                        p-12
                        shadow-lg
                        text-center
                    "
                >
                    <h3 className="text-3xl font-bold text-[var(--primary-dark)]">
                        Agenda tu consulta
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-[var(--primary-dark)]">
                        Inicia sesión para agendar una cita
                    </p>

                    <Link
                        href="/login"
                        className="
                            inline-block
                            mt-10
                            rounded-full
                            bg-[var(--primary)]
                            px-8
                            py-3
                            text-lg
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-[var(--primary-dark)]
                            hover:scale-105
                        "
                    >
                        Iniciar sesión
                    </Link>



                </div>    








                
            </Container>
        </section>
    )
}                