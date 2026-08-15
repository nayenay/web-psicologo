import { ChangeEvent } from "react";
interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    required?: boolean;
    autoComplete?: string;
    error?: String;

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    type = "text",
    placeholder,
    value,
    required = false,
    autoComplete,
    error,
    onChange,
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
                value={value}
                onChange={onChange}
                required={required}
                autoComplete={autoComplete}
                className={`
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-20
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    bg-white

                    
                    ${
                        error? "border-red-400 focus:ring-red-300"
                            : "border-gray-300 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                    }
                `}
            />//no veo cambios de color en el borde del input, 

        </div>
    );
}