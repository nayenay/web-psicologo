interface SubmitButtonProps {
    children: React.ReactNode;
}

export default function SubmitButton({
    children,
}: SubmitButtonProps) {
    return (
        <button
            className="
                w-full
                rounded-full
                bg-[var(--primary)]
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[var(--primary-dark)]
            "
        >
            {children}
        </button>
    );
}