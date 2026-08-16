//estructura visual de la sección
import Link from "next/link";
import Container from "../layout/Container";

/*
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
    */     

import CommentList from "@/components/comments/CommentList";

export default function Comentarios() {
    return (
        <section
            id="comentarios"
            className="
                py-16
                bg-[var(--background)]
            "
        >
            <div className="mx-auto w-full max-w-4xl px-6">

                <h2
                    className="
                        text-center
                        text-3xl
                        font-bold
                        text-[var(--primary-dark)]
                    "
                >
                    Comentarios
                </h2>

                <p
                    className="
                        mt-3
                        mb-10
                        text-center
                        text-[var(--primary-light)]
                    "
                >
                    Conoce las experiencias de quienes han recibido atención.
                </p>

                <CommentList />

            </div>
        </section>
    );
}
