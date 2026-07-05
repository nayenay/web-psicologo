"use client"; /*se ejecutará en el navegador */
/* usar Link para navegar y useState para el menú hamburguesa*/
import Link from "next/link"; 
import { useEffect, useState } from "react";
import Container from "./Container";
import { usePathname } from "next/navigation";
import Image from "next/image";

/*Arreglos del menú*/
const menuItems = [
    {label: "Servicios", href: "#servicios"}, //href en un atributo que indica la ruta de destino
    {label: "Conóceme", href: "#conoceme" },
    {label: "Ubicación", href: "#ubicacion" },
    {label: "Contacto", href: "#contacto" },
];

const specialtyItems = [
    { label: "Psicología Forense", href: "/forense" },
    { label: "Psicología Holística", href: "/holistica" },
];//con esto los puedo recorrer con .map() sin repetir código

const navigationItems = [
    menuItems[0],          // Servicios
    ...specialtyItems,
    menuItems[1],          // Conóceme
    menuItems[2],          // Ubicación
    menuItems[3],          // Contacto
];

/* Crear componente */
export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);//guarda varable scrolled
    useEffect(() => { //es iun hook que se ejecuta cuando aparece el componente, cuando el navbar aparece empieza a escuchar el scroll
    const handleScroll = () => {
        setScrolled(window.scrollY > 40);// cantidad de pixeles que el usuario ha bajado
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    //ocupo una variable para identificar los dos tipos de link del arreglo compuesto
       
    return (   //estructura principal
     
    <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
            scrolled ? "shadow-lg" : "shadow-md"
        }`}>
        
        <div className="max-w-screen-2xl mx-auto px-6">   
        <div 
        className={`flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-0.5" : "py-1"
        }`} >
            <Link href="/" className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo Psicólogo Manuel Carrillo"
                    width={45}
                    height={10}
                    priority
                />


            </Link>

            <nav className="flex items-center gap-24">
                {navigationItems.map((item) => {

                    const isSpecialty = item.href.startsWith("/");

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-lg font-bold transition-all duration-300 ${
                                isSpecialty
                                    ? pathname === item.href
                                        ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                                        : "text-[var(--primary)] hover:text-[var(--accent)]"
                                    : "text-[var(--primary)] hover:text-[var(--accent)]"
                            }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>



            <Link href="/login"   
                className="
                    bg-[var(--primary)]
                    text-white
                    px-5
                    py-2
                    text-lg
                    rounded-full
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-[var(--primary-dark)]
                    hover:scale-105
                    "
                    >

                Iniciar sesión

            </Link>
        </div>
        </div> 
        






    </header>
    );
    
}
