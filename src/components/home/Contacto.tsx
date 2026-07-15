import Container from "../layout/Container";
import { Globe } from "lucide-react";
import {
    Phone,
    Mail,
    
    MessageCircle,
} from "lucide-react";

const contactos = [
    {
        nombre: "WhatsApp",
        icono: MessageCircle,
        enlace: "https://wa.me/5214921234567",
    },
    {
        nombre: "Correo",
        icono: Mail,
        enlace: "mailto:correo@ejemplo.com",
    },
    {
        nombre: "Facebook",
        icono: Globe,
        enlace: "https://www.facebook.com/profile.php?id=100063555849752&locale=es_LA",
    },
    {
        nombre: "Teléfono",
        icono: Phone,
        enlace: "tel:+524921234567",
    },
];

export default function Contacto() {

    return (
        <section
            id="contacto"
            className="py-20 bg-[var(--background)]"
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

                        const Icon = contacto.icono;

                        return (

                            <a
                                key={contacto.nombre}
                                href={contacto.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
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

                                <Icon
                                    size={48}
                                    className="
                                        mx-auto
                                        mb-4
                                        text-[var(--primary)]
                                    "
                                />

                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                        text-[var(--primary-dark)]
                                    "
                                >
                                    {contacto.nombre}
                                </h3>

                            </a>

                        );
                    })}

                </div>
            </Container>
        </section>
    );
}