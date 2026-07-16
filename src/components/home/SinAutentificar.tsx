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
                        max-w-7xl
                        rounded-3xl
                        bg-[var(--card)]
                        p-5
                        shadow-lg
                        text-center
                    "
                >
                    
                    <p className=" text-lg leading-8 text-justify font-medium  text-[var(--primary-light)]">
                        Inicia sesión para agendar una cita o enviar un mensaje directo
                    </p>

                    <Link
                        href="/login"
                        className="
                            block
                            mt-3
                            w-full
                            rounded-full
                            bg-[var(--primary)]
                            px-8
                            py-3
                            text-center
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