import ProtectedRoute from "@/auth/ProtectedRoute";

export default function Dashboard() {

    return (

        <ProtectedRoute roles={["psicologo"]}>

            <h1>Dashboard</h1>

        </ProtectedRoute>

    );

}