import Link from "next/link";
import Container from "../layout/Container";


export default function Comentarios(){
    return (
        <section id="comentarios"
            className="py-1 bg-[var(--background)]">
            <Container>
                <div className="text-center mb-0">
                    <h2 className=" text-4xl font-bold text-[var(--primary-dark)]">
                        Comentarios
                    </h2>             
                    <div className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "/>
                </div > 

            </Container>
        </section>
    )
}                