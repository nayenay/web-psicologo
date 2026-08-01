interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className= "", }: CardProps) {

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
                ${className}
            "
        >
            {children}
        </div>
    );
}