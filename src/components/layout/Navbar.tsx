"use client"; /*se ejecutará en el navegador */
/* usar Link para navegar y useState para el menú hamburguesa*/
import Link from "next/link"; 
import {useState} from "react";

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

/* Crear componente */
export default function Navbar() {
    return (   //estructura principal 
    <header className="sticky top-0 z-50 bg-white shadow-md"> 
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            <Link href="/"
                className="text-2xl font-bold text-[var(--primary-dark)]">
                Logo
            </Link>
            <nav className="flex gap-8">
                {menuItems.map((item) => (
                    <Link  key={item.label}  href={item.href}
                    className="text-black hover:text-[var(--accent)] transition-colors">
                    {item.label}
                    </Link>
                ))}
            </nav>
            <Link href="/login"   
                className="rounded-lg bg-[var(--primary)] px-5 py-2 text-white transition hover:bg-[var(--primary-dark)]">

                Iniciar sesión

            </Link>
        </div>
        <div className="border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex justify-center gap-12 py-3">
                {specialtyItems.map((item) => (
                    <Link  key={item.label}  href={item.href}  className="font-medium text-[var(--primary-dark)] transition hover:text-[var(--accent)]">

                        {item.label}

                    </Link>
                ))}
            </div>
        </div>
    </header>
    );

}//por ahora solo dejo eta estrucutra

/* Paso 5: Crear la estrucura visual */

/*Paso 6: Agregar los enlaces */
