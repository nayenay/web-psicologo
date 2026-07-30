import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

import {
    doc,
    setDoc,
} from "firebase/firestore";

import auth from "@/firebase/auth";
import db from "@/firebase/firestore";

//una interfaz para que en lugar de usar una función, solo tenga que pasar un objeto
interface RegisterData {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    correo: string;
    telefono: number;
    password: string;
}


export async function login(
    email: string,
    password: string,
) {

    return await signInWithEmailAndPassword(
        auth,
        email,
        password,
    );

}

export async function logout(
    //idk what the fuk put here now, a problem for the future myself 

){

}
//funcion de registro
export async function register(data: RegisterData) {
    //crear el usuario de authenticación
    const credential =
        await createUserWithEmailAndPassword(

            auth,
            data.correo,
            data.password,

        );
    //obtener UID
    const uid = credential.user.uid;

    //crear el documento  
    await setDoc( //usar setDoc y no addDoc Firestore no genere un UID aleatorio

        doc(db, "usuarios", uid),
        {
            nombre: data.nombre,
            apellidoPaterno: data.apellidoPaterno,
            apellidoMaterno: data.apellidoMaterno ?? "",
            correo: data.correo,
            telefono: data.telefono,
            rol: "cliente",
            activo: true,
        }
    ); 
    return credential.user; 
}