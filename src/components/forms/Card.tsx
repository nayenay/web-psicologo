interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className= "", }: CardProps) {

    return (
        <div
            className='
                mx-auto
                w-full
                rounded-3xl
                bg-[var(--card)]
                p-5
                shadow-xl
                ${className || "max-w-md"}
            '
        >
            {children}
        </div>
    );
}