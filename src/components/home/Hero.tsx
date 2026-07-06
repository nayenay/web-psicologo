import Image from "next/image";
import Container from "../layout/Container";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {

    return (
        <section 
            className="
                min-h-[300px]  bg-gradient-to-b  from-[var(--primary)] via-[#4A9BB8] to-[var(--background)] "
                >
            <Container>
                <div  className=" grid  grid-cols-[20%_75%]  items-center  gap-10 py-5 "
                >
                    <div className="flex justify-center">
                        <Image
                            src="/images/FotoPerfilPsicologo.png"
                            alt="Lic. Manuel Carrillo Quintero"
                            width={300}
                            height={300}
                            priority
                            className="rounded-full object-cover shadow-xl"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className={`${playfair.className} text-5xl font-bold text-white`}>
                            Lic. Manuel Carrillo Quintero
                        </h1>
                        
                        <h2 className="text-2xl text-white/90">
                            Psicología Forense y Psicología Holística
                        </h2>

                        <p className="text-lg text-white/80">
                            Zacatecas, Zac., México
                        </p>
                    </div>
                </div>
                
            </Container>

        </section>
    );

}