import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Footer() {
    return (
        <footer className="bg-[var(--primary-dark)] text-white">

            <Container>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-8">

                    {/* Logo */}

                    <div className="flex flex-col items-center text-center">

                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={70}
                            height={70}
                            
                        />

                        <p className="mt-5 leading-7 text-center text-white/80">
                            Atención psicológica profesional con un enfoque
                            ético, humano y personalizado.
                        </p>

                    </div>

                    {/* Navegación */}

                    <div>

                        <h3 className="mb-4 text-xl font-bold">
                            Navegación
                        </h3>

                        <div className="flex flex-col gap-2">

                            <Link href="#servicios">
                                Servicios
                            </Link>

                            <Link href="#conoceme">
                                Conóceme
                            </Link>

                            <Link href="#ubicacion">
                                Ubicación
                            </Link>

                            <Link href="#contacto">
                                Contacto
                            </Link>

                        </div>

                    </div>

                    {/* Contacto */}

                    <div>

                        <h3 className="mb-5 text-xl font-bold">
                            Contacto
                        </h3>

                        <div className="space-y-3">

                            <p>
                                 +52 492 121 6655
                            </p>

                            <p>
                                 correo@ejemplo.com
                            </p>

                            <p>
                                Zacatecas, Zacatecas
                            </p>

                        </div>

                    </div>
                    <div className="flex flex-col items-center text-center">

                        <div className="mb-2 flex flex-col gap- ">
                        <Image
                            src="/logo/LogoBMblanco.png"
                            alt="Logo"
                            width={100}
                            height={70}
                        />
                        <p className="mt-1 leading-7 text-center text-white/80">
                            Berenice Madrid
                        </p>
                        </div>

                        <div className="mb-1 flex flex-col ">

                            <Link href="/avisolegal">
                                Aviso legal
                            </Link>
                        </div>  
                    </div>    

                </div>

                <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">

                    © 2026 Lic. Manuel Carrillo Quintero · Todos los derechos reservados.

                </div>
                          

            </Container>

        </footer>
    );
}