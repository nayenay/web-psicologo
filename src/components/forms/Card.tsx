interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div
            className="
                mx-auto
                w-full
                max-w-md
                rounded-3xl
                bg-[var(--card)]
                p-10
                shadow-xl
            "
        >
            {children}
        </div>
    );
}