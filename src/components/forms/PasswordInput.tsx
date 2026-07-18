import Input from "./Input";
import { ChangeEvent } from "react";

interface PasswordInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
    value,
    onChange,
}: PasswordInputProps) {
    return (
        <Input
            label="Contraseña"
            type="password"
            placeholder="********"
            value={value}
            onChange={onChange}
        />
    );  
}