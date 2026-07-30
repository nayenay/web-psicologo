export default function NoAutorizado() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">

                <h1 className="text-4xl font-bold text-red-600">
                    Acceso denegado
                </h1>

                <p className="mt-4 text-lg">
                    No tienes permisos para acceder a esta página.
                </p>

            </div>
        </div>
    );
}