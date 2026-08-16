import CommentList from "@/components/comments/CommentList";

export default function Comentarios() {

    return (
        <section
            id="comentarios"
            className="
                py-1
                bg-[var(--background)]
            "
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-6
                "
            >

                <h2
                    className="
                        text-center
                        text-3xl
                        font-bold
                        text-[var(--primary)]
                    "
                >
                    Comentarios
                </h2>

                <div className="mt-6">

                    <CommentList />

                </div>

            </div>

        </section>
    );
}