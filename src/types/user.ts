//rol del usuario
export type UserRole =
    | "cliente"
    | "autor"
    | "psicologo"
    | "administrador";

// la interfaz
export interface AppUser {

    uid: string;

    nombre: string;

    apellidoPaterno: string;

    apellidoMaterno?: string;

    correo: string;

    telefono?: string;

    rol: UserRole;

    activo: boolean;
}    