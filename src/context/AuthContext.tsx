//this file are going to be the brain 
//usuario autenticado + rol + loading +login() +logout() +refreshUser()
//guardará informacion y funciones
//evita hacer muchas llamadas de autenticación de firebase 
//solo define que información existe

//Define qué almacena el contexto
"use client";//este archivo es un Client Component

import { createContext } from "react";
import { AppUser } from "@/types/user";


interface AuthContextType {
    user: AppUser | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}