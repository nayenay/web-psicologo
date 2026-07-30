import ProtectedRoute from "@/auth/ProtectedRoute";

export default function Dashboard() {

    return (

        <ProtectedRoute roles={["psicologo"]}>

            <h1>Dashboard del psicologo</h1>

        </ProtectedRoute>

    );

}