"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Card from "@/components/forms/Card";
import Input from "@/components/forms/Input";
import PasswordInput from "@/components/forms/PasswordInput";
import SubmitButton from "@/components/forms/SubmitButton";

import { register } from "@/services/auth.service";




export default function Register() {
    const router = useRouter();

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //función para validar los datos en un formulario y prepararlos antes de enviarlos
    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        try {

            await register({

                nombre,
                apellidoPaterno,
                apellidoMaterno,
                correo,
                telefono: Number(telefono),
                password,

            });

            router.push("/homepage");

        } catch (error) {

            console.error(error);

            alert("No fue posible crear la cuenta.");

        }
        
    }







    return (
        <section className="min-h-screen bg-[var(--background)] flex items-center">

            <Container>

                <Card className="max-w-5x1">
                    <h1
                        className="
                            text-center
                            text-3xl
                            font-bold
                            text-[var(--primary-dark)]
                        "
                    >
                        Crear cuenta
                    </h1>
                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid gap-5 md:grid-cols-2">
        
                            <Input
                                label="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />

                            <Input
                                label="Primer apellido"
                                value={apellidoPaterno}
                                onChange={(e) =>
                                    setApellidoPaterno(e.target.value)
                                }
                            />
                            
                            <Input
                                label="Segundo apellido (opcional)"
                                value={apellidoMaterno}
                                onChange={(e) =>
                                    setApellidoMaterno(e.target.value)
                                }
                            />

                                
                            <Input
                                label="Teléfono"
                                type="tel"
                                value={telefono}
                                onChange={(e) =>
                                    setTelefono(e.target.value)
                                }
                            />
                        </div>   

                        <Input
                            label="Correo electrónico"
                            type="email"
                            autoComplete="email"
                            required
                            value={correo}
                            onChange={(e) =>
                                setCorreo(e.target.value)
                            }
                        />


                        <PasswordInput
                            label="Contraseña"
                            value={password}
                            autoComplete="new-password"
                            required
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <PasswordInput
                            label="Confirmar contraseña"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                        />

                        <SubmitButton>

                            Crear cuenta

                        </SubmitButton>

                        <div className="mt-8 text-center">

                            <p className="text-sm">

                                ¿Ya tienes cuenta?

                            </p>

                            <Link
                                href="/login"
                                className="text-[var(--accent)] hover:underline"
                            >

                                Inicia sesión

                            </Link>

                        </div>

                    </form>


                </Card>

            </Container>

        </section>
    );
}

