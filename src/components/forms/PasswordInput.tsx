import Input from "./Input";
import { ChangeEvent } from "react";

interface PasswordInputProps {
    label?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
    label="Contraseña",
    value,
    onChange,
}: PasswordInputProps) {
    return (
        <Input
            label={label}
            type="password"
            placeholder="********"
            value={value}
            onChange={onChange}
        />
    );  
}