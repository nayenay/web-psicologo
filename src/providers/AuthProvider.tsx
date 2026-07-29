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
import db from "@/firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({
    children,
}: AuthProviderProps) {
    const [user, setUser] = useState<AppUser | null>(null);//crear el estado del usuario
    const [loading, setLoading] = useState(true);//crear otro estado
    useEffect(() => {
        //escuchar firebase
            //"Cuando destruyas este componente, deja de escuchar Firebase."
            //recibe el parametro auth para escuchar authentication
        const unsubscribe = onAuthStateChanged( auth, async (firebaseUser) => {//función que es un parametro
                console.log("Firebase:");//----------------------
                console.log(firebaseUser);// si no inicia sesión firebaseUser === null, sino tiene los datos del usuario
                if (!firebaseUser) {//si no hay usuarioauthenticado, user=null, loading=false
                    setUser(null);
                    setLoading(false);
                    return;
                }
                //obtener el documento
                const userDoc = await getDoc(//await getDoc: ve a Firestore y traeme el documento uid
                    doc(db, "usuarios", firebaseUser.uid)//apunta al documento
                );
                if (!userDoc.exists()) {
                    console.error("No existe el documento del usuario.");
                    setUser(null);
                    setLoading(false);
                    return;
                }
                const appUser: AppUser = {
                    uid: firebaseUser.uid,
                    ...(userDoc.data() as Omit<AppUser, "uid">),
                };
    
                console.log("Firestore:");//----------------------------
                console.log(appUser);//---------------------------------
                setUser(appUser);
                setLoading(false);
                
            }
        );
        
        return () => unsubscribe(); //cuando destruye este componente deja de escuchar Firebase

    }, []); //[] significa que eejecuta el codigo una sola vez ciando el componente se monta
    //-------------
    //Prueba en la consola
    /*
    useEffect(() => {

            console.log("Estado user cambió:");

            console.log(user);

        }, [user]);
    */    
    //--------
    
    return (
        //todo lo que esté dentro del componente podrá acceder al Context
        <AuthContext.Provider
            value={{ user, loading }}//envia informacion
        >
            {children}//todo lo que está dentro tendrá acceso al context

        </AuthContext.Provider>

    );

}


