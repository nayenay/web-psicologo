//"Dame todos los comentarios y muéstralos"
"use client";

import { useEffect, useState } from "react";
import {
    Comment,
    getComments,
} from "@/services/comments.service";

export default function CommentList() {

    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadComments() {

            try {

                const data = await getComments();

                setComments(data);

            } catch (error) {

                console.error(
                    "Error al cargar comentarios:",
                    error
                );

            } finally {

                setLoading(false);

            }
        }

        loadComments();

    }, []);


    if (loading) {

        return (
            <div
                className="
                    rounded-2xl
                    bg-[var(--card)]
                    p-8
                    text-center
                "
            >
                <p className="text-[var(--primary-light)]">
                    Cargando comentarios...
                </p>
            </div>
        );

    }


    if (comments.length === 0) {

        return (
            <div
                className="
                    rounded-2xl
                    bg-[var(--card)]
                    p-8
                    text-center
                "
            >
                <p className="text-[var(--primary-light)]">
                    Aún no hay comentarios.
                </p>
            </div>
        );

    }


    return (

        <div
            className="
                w-full
                rounded-2xl
                bg-[var(--card)]
                px-8
                py-2
            "
        >

            {comments.map((comment, index) => (

                <article
                    key={comment.id}
                    className={`
                        py-3
                        ${index !== comments.length - 1
                            ? "border-b border-white/70"
                            : ""
                        }
                    `}
                >

                    <p
                        className="
                            text-lg
                            font-medium
                            text-[var(--primary-light)]
                        "
                    >
                        {comment.nombre}
                    </p>


                    <p
                        className="
                            mt-2
                            text-sm
                            leading-relaxed
                            text-[var(--primary-dark)]
                        "
                    >
                        {comment.texto}
                    </p>

                </article>

            ))}

        </div>

    );
}