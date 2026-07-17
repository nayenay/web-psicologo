interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
}

export default function Input({
    label,
    type = "text",
    placeholder,
}: InputProps) {
    return (
        <div className="space-y-2">

            <label
                className="
                    block
                    text-sm
                    font-semibold
                    text-[var(--primary-dark)]
                "
            >
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[var(--primary)]
                    focus:ring-2
                    focus:ring-[var(--primary)]/20
                "
            />

        </div>
    );
}