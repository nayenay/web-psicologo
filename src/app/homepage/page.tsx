import ProtectedRoute from "@/auth/ProtectedRoute";

export default function Homepage() {

    return (

        <ProtectedRoute roles={["cliente"]}>
            
            <h1>Homepage</h1>

        </ProtectedRoute>

    );

}