
import Container from "../layout/Container";


export default function Conoceme(){
    return (
        <section id="servicios"
            className="py-20 bg-[var(--background)]">
            <Container>
                <div className="text-center mb-16">
                    <h2 className=" text-4xl font-bold text-[var(--primary-dark)]">
                        Conóceme
                    </h2>             
                    <div className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "/>
                </div >    
                <div className="text-center mb-16">
                    <h3  className="  mb-3  text-2xl  font-semibold  text-justify  text-[var(--primary-light)]  "  >
                        ¿Quién soy?
                    </h3>
                    <p className="text-xl leading-9 text-justify text-[var(--primary-dark)]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                </div> 
                <div className="text-center mb-16">   
                    <h3  className="  mb-3  text-2xl  font-semibold  text-justify  text-[var(--primary-light)]  "  >
                        Forma de trabajo
                    </h3>
                    <p className="text-xl leading-9 text-justify text-[var(--primary-dark)]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                </div>
                
            </Container>
        </section>
    )
}