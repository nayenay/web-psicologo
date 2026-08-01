import Input from "./Input";
import { ChangeEvent } from "react";

interface PasswordInputProps {
    label?: string;
    value: string;
    required?: boolean;
    autoComplete?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
    label="Contraseña",
    value,
    required = false,
    autoComplete,
    onChange,
}: PasswordInputProps) {
    return (
        <Input
            label={label}
            type="password"
            placeholder="********"
            value={value}
            required={required}
            autoComplete={autoComplete}
            onChange={onChange}
        />
    );  
}