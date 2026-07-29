//Facilita acceder al contexto_
// evita hacer useContext(AuthContext) cientos de veces
//en su lugar esto: const { user } = useAuth();
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";


export default function useAuth() {
    return useContext(AuthContext);
}
