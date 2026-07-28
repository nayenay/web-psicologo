//Voy a escuchar a Firebase, guardar el usuario y compartirlo con toda la aplicación.
//Llena ese contexto con datos-
//después escribiré algo como se muestra a continuación, para que toda la aplicación conozca al usuario autenticado.

/*
<AuthProvider>
    {children}
</AuthProvider>

*/

"use client";

import { ReactNode, useState } from "react";

import AuthContext from "@/context/AuthContext";
import { AppUser } from "@/types/user";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "@/firebase/auth";

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({
    children,
}: AuthProviderProps) {
    console.log("AuthProvider montado");
    const [user, setUser] = useState<AppUser | null>(null);//crear el estado del usuario
    const [loading, setLoading] = useState(true);//crear otro estado
    useEffect(() => {
        //escuchar firebase
        const unsubscribe = onAuthStateChanged( //"Cuando destruyas este componente, deja de escuchar Firebase."
            auth, //recibe el parametro auth para escuchar authentication
            (firebaseUser) => {//función que es un parametro

                console.log(firebaseUser);// si no inicia sesión firebaseUser === null, sino tiene los datos del usuario

            }
        );

        return () => unsubscribe(); //cuando destruye este componente deja de escuchar Firebase

    }, []); //[] significa que eejecuta el codigo una sola vez ciando el componente se monta
    return (
        //todo lo que esté dentro del componente podrá acceder al Context
        <AuthContext.Provider
            value={{//envia informacion
                user,
                loading,
            }}
        >

            {children}//todo lo que está dentro tendrá acceso al context

        </AuthContext.Provider>

    );

}


