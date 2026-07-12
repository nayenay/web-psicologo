import Container from "../layout/Container";
export default function Conoceme(){
    return (
        <section id="servicios"
            className="py-20 bg-[var(--background)]">
            <Container>
                <div className="text-center mb-16">
                    <h2 className=" text 4x1 font-bold text-[var-primary-dark)]">
                        Conóceme
                    </h2>
                    <div className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "/>
                </div >
            </Container>
        </section>
    )
}