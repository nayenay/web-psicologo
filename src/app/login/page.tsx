"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Card from "@/components/forms/Card";
import Input from "@/components/forms/Input";
import PasswordInput from "@/components/forms/PasswordInput";
import SubmitButton from "@/components/forms/SubmitButton";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log("Correo:", email);
    console.log("Contraseña:", password);
    return (
        <section className="min-h-screen bg-[var(--background)] flex items-center">

            <Container>

                <Card>

                    <div className="flex justify-center mb-6">

                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={70}
                            height={70}
                        />

                    </div>

                    <h1
                        className="
                            text-center
                            text-3xl
                            font-bold
                            text-[var(--primary-dark)]
                        "
                    >
                        Bienvenido
                    </h1>

                    <p
                        className="
                            mt-3
                            mb-8
                            text-center
                            text-[var(--primary-light)]
                        "
                    >
                        Inicia sesión para acceder a tu agenda.
                    </p>

                    <form className="space-y-5">

                        <Input
                            label="Correo electrónico"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <SubmitButton>
                            Iniciar sesión
                        </SubmitButton>

                    </form>

                    <div className="mt-8 text-center">

                        <Link
                            href="/"
                            className="
                                text-[var(--accent)]
                                hover:underline
                            "
                        >
                            ← Volver al inicio
                        </Link>

                    </div>

                </Card>

            </Container>

        </section>
    );
}