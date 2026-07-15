import Container from "../layout/Container";


export default function Conoceme(){
    return (
        <section id="servicios"
                    className="py-20 bg-[var(--background)]">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className=" text-4xl font-bold text-[var(--primary-dark)]">
                                Ubicación
                            </h2>             
                            <div className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "/>
                        </div > 
   
                        <div className="text-center mb-16">
                            <h3  className="  mb-3  text-2xl  font-semibold  text-justify  text-[var(--primary-light)]  "  >
                                Dirección
                            </h3>
                            <p className="text-xl leading-9 text-justify text-[var(--primary-dark)]">Roberto Cabral del Hoyo
                                Gustavo Diaz Ordaz 1Ra Sección 
                                Zacatecas 98020</p>
                        </div> 
                        
                        <iframe
                            src="https://maps.app.goo.gl/kLfQNKT1s5yMxJ9b6"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                        />
                    </Container>
                </section>


    )   
}     
