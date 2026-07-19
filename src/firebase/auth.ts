//funciones de autentificación
//1. iniciar sesion
//2. cerrar sesión
//3. obener usuario
//4. registrar usuario

import { getAuth } from "firebase/auth";
import app from "./config";

const auth = getAuth(app);

export default auth;
