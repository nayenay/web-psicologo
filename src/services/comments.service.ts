import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";

import db from "@/firebase/firestore";

export interface Comment {
    id: string;
    clienteId: string;
    nombre: string;
    texto: string;
    fechaCreacion: Timestamp;
}


export async function getComments(): Promise<Comment[]> {

    const commentsRef = collection(db, "comentarios"); // indica que traba en la colección de comentarios

    const commentsQuery = query(
        commentsRef,
        orderBy("fechaCreacion", "desc")//ordenalos por fecha, comenzando por el comentario más reciente
    );

    const snapshot = await getDocs(commentsQuery); //ejecuta la consulta

    return snapshot.docs.map((document) => ({
        id: document.id,
        ...(document.data() as Omit<Comment, "id">),
    }));
}

//para crear comentarios pongo la interfas AssComentData y addComment
interface AddCommentData {
    clienteId: string;
    nombre: string;
    texto: string;
}

export async function addComment(
    data: AddCommentData
) {

    const commentsRef = collection(db, "comentarios");

    await addDoc(commentsRef, {
        clienteId: data.clienteId,
        nombre: data.nombre,
        texto: data.texto,
        fechaCreacion: Timestamp.now(),
    });
}

//eliminar comentario
export async function deleteComment(
    commentId: string
) {

    const commentRef = doc(
        db,
        "comentarios",
        commentId
    );

    await deleteDoc(commentRef);
}