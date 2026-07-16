import Container from "../layout/Container";
import WhatsAppIcon from "@/assets/icons/whatsapp1.svg";
import Image from "next/image";



const contactos = [
    {
        nombre: "WhatsApp",
        descripcion: "+52 1 4921216655",
        icono: "/icons/whatsapp1.svg",
        enlace: "https://wa.me/5214921216655",
    },
    {
        nombre: "Correo",
        descripcion: "correo@ejemplo.com",
        icono: "/icons/email1.svg",
        enlace: "mailto:correo@ejemplo.com",
    },
    {
        nombre: "Facebook",
        descripcion: "Terapias Orientales y Psicoterapia Zacatecas",
        icono: "/icons/facebook1.svg",
        enlace: "https://www.facebook.com/profile.php?id=100063555849752&locale=es_LA",
    },
    {
        nombre: "Teléfono",
        descripcion: "+52 4921216655",
        icono: "/icons/phone1.svg",
        enlace: "tel:+524921216655",
    },
];

export default function Contacto() {

    return (
        <section
            id="contacto"
            className="py-10 mt-10 bg-[var(--background)]"
        >
            <Container>

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[var(--primary-dark)]">
                        Contacto
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-[var(--primary)]" />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {contactos.map((contacto) => {

                        

                        return (

                            <a
                                key={contacto.nombre}
                                href={contacto.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    rounded-3xl
                                    bg-[var(--card)]
                                    p-8
                                    text-center
                                    shadow-md
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                "
                            >

                                <Image
                                    src={contacto.icono}
                                    alt={contacto.nombre}
                                    width={55}
                                    height={55}
                                    className="
                                        mx-auto
                                        mb-4
                                        
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />

                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                        mb-2
                                        text-[var(--primary-dark)]
                                    "
                                >
                                    {contacto.nombre}
                                </h3>
                                <h3
                                    className="
                                        text-xl
                                        font-normal
                                        text-[var(--primary-light)]
                                    "
                                >
                                    {contacto.descripcion}
                                </h3>

                            </a>

                        );
                    })}

                </div>

                


            </Container>
        </section>
    );
}