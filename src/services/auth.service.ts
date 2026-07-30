import {
    signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "@/firebase/auth";

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