//"Dame todos los comentarios y muéstralos"

"use client";

import { useEffect, useState } from "react";
import { Comment, getComments } from "@/services/comments.service";

export default function CommentList() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadComments() {
            try {
                const data = await getComments();
                setComments(data);
            } catch (error) {
                console.error("Error al cargar comentarios:", error);
            } finally {
                setLoading(false);
            }
        }

        loadComments();
    }, []);

    if (loading) {
        return (
            <p className="text-center text-[var(--primary-light)]">
                Cargando comentarios...
            </p>
        );
    }

    if (comments.length === 0) {
        return (
            <p className="text-center text-[var(--primary-light)]">
                Aún no hay comentarios.
            </p>
        );
    }

    return (
        <div className="space-y-5">

            {comments.map((comment) => (

                <article
                    key={comment.id}
                    className="
                        rounded-2xl
                        bg-white
                        p-5
                        shadow-sm
                    "
                >

                    <p
                        className="
                            font-semibold
                            text-[var(--primary-dark)]
                        "
                    >
                        {comment.nombre}
                    </p>

                    <p
                        className="
                            mt-2
                            text-gray-700
                        "
                    >
                        {comment.texto}
                    </p>

                </article>

            ))}

        </div>
    );
}