//"Quiero publicar un comentario"
//CommentForm ->comments.service.ts  ->Firestore

"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { addComment } from "@/services/comments.service";

interface CommentFormProps {
    onCommentAdded?: () => void;
}

export default function CommentForm({
    onCommentAdded,
}: CommentFormProps) {

    const { user } = useAuth();

    const [texto, setTexto] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        if (!user) {
            return;
        }

        if (user.rol !== "cliente") {
            return;
        }

        if (!texto.trim()) {
            return;
        }

        try {

            setLoading(true);

            await addComment({
                clienteId: user.uid,
                nombre: `${user.nombre} ${user.apellidoPaterno}`,
                texto: texto.trim(),
            });

            setTexto("");

            onCommentAdded?.();

        } catch (error) {

            console.error(
                "Error al publicar comentario:",
                error
            );

        } finally {

            setLoading(false);

        }
    }


    // Usuario no autenticado
    if (!user) {

        return (
            <div
                className="
                    mt-8
                    rounded-2xl
                    bg-[var(--card)]
                    p-6
                "
            >

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-[var(--primary-dark)]
                    "
                >
                    Deja un comentario
                </h3>

                <p
                    className="
                        mt-4
                        text-sm
                        text-[var(--primary-dark)]
                    "
                >
                    Para dejar un comentario necesitas
                    iniciar sesión.
                </p>

                <button
                    type="button"
                    onClick={() => {
                        window.location.href = "/login";
                    }}
                    className="
                        mt-5
                        w-full
                        rounded-xl
                        bg-[var(--primary)]
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[var(--primary-dark)]
                    "
                >
                    Iniciar sesión
                </button>

            </div>
        );
    }


    // Usuario autenticado pero no es cliente
    if (user.rol !== "cliente") {

        return null;

    }


    return (
        <form
            onSubmit={handleSubmit}
            className="
                mt-8
                rounded-2xl
                bg-[var(--card)]
                p-6
            "
        >

            <h3
                className="
                    text-xl
                    font-semibold
                    text-[var(--primary-dark)]
                "
            >
                Deja un comentario
            </h3>


            <textarea
                value={texto}
                onChange={(e) =>
                    setTexto(e.target.value)
                }
                placeholder="Escribe tu experiencia..."
                rows={5}
                disabled={loading}
                className="
                    mt-4
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-transparent
                    bg-white
                    px-4
                    py-4
                    text-sm
                    text-[var(--primary-dark)]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-[var(--primary)]
                    focus:ring-2
                    focus:ring-[var(--primary)]/20
                    disabled:opacity-60
                "
            />


            <button
                type="submit"
                disabled={loading || !texto.trim()}
                className="
                    mt-4
                    w-full
                    rounded-xl
                    bg-[var(--primary)]
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[var(--primary-dark)]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                {loading
                    ? "Publicando..."
                    : "Publicar comentario"
                }
            </button>

        </form>
    );
}