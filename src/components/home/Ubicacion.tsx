import Container from "../layout/Container";


export default function Ubicacion(){
    return (
        <section id="ubicacion"
                    className="py-2 bg-[var(--background)]">
                    <Container>
                        <div className="text-center mb-10">
                            <h2 className=" text-4xl font-bold text-[var(--primary-dark)]">
                                Ubicación
                            </h2>             
                            <div className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "/>
                        </div > 
   
                        <div className="text-center mb-8">
                            <p className="text-xl leading-9 text-justify text-[var(--primary-dark)]">Roberto Cabral del Hoyo
                                Gustavo Diaz Ordaz 1Ra Sección 
                                Zacatecas 98020</p>
                        </div> 
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4471752282802!2d-102.57137922523675!3d22.785888525120324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e82120ac0b7%3A0x1d6e0e9c815d80ff!2sRoberto%20Cabral%20del%20Hoyo%20Norberto%20Aguirre%20131%2C%20Gustavo%20Diaz%20Ordaz%201ra%202da%20y%203ra%20Secc%2C%2098020%20Zacatecas%2C%20Zac.!5e0!3m2!1ses!2smx!4v1784092273050!5m2!1ses!2smx"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </Container>
                </section>
       )   
}     
