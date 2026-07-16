import Link from "next/link";
import Container from "../layout/Container";


export default function ComentarioSinCuenta(){
    return (
        <section 
            className="py-5 mb-10 bg-[var(--background)]">
            <Container>
                

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
                        Deja un comentario
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






 <h3 className="text-3xl font-bold text-[var(--primary-dark)]">
                        Agenda tu consulta
                    </h3>