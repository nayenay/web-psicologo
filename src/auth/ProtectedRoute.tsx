"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";
export type UserRole =
    | "cliente"
    | "autor"
    | "psicologo"
    | "administrador";

interface ProtectedRouteProps {
    children: ReactNode;
    roles: UserRole[];
}

export default function ProtectedRoute({
    children, //recibe /dashboard ej
    roles, //recibe rol
}: ProtectedRouteProps) {
    //acceso al contexto
    const router = useRouter();

    const { user, loading } = useAuth();
    //crear useEfect
    useEffect(() => {

        if (loading) return;//esperar a que firebase termine

        if (!user) {//verificar si existe el usuario
            router.replace("/login");
            return;
        }

        if (!user.activo) {//verificar que el usuario no está activo
            router.replace("/login");
            return;
        }

        if (!roles.includes(user.rol)) {//verificar si el rol coinside
            router.replace("/no-autorizado");//regresar
            return;
        }

    }, [loading, user, roles, router]);

    if (loading || !user) {
        return null;//después puedo mostrar un spinner
    }

    return <>{children}</>;
}