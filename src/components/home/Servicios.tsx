import Container from "../layout/Container";
import ServiceCard from "../cards/ServiceCard";

const psicologiaClinica = [
  {
    nombre: "Consulta Individual",
    precio: "$700 MXN",
  },
  {
    nombre: "Consulta de Pareja",
    precio: "$900 MXN",
  },
  {
    nombre: "Consulta Familiar",
    precio: "$1,200 MXN",
  },
];

const psicologiaForense = [
  "Peritajes psicológicos",
  "Evaluaciones de custodia",
  "Valoraciones familiares",
  "Ratificación de dictámenes",
  "Asesoría pericial",
];

const psicologiaHolistica = [
  "Terapia Holística",
  "Meditación guiada",
  "Mindfulness",
  "Desarrollo personal",
];

export default function Servicios() {
    return (
        <section
            id="servicios"
            className="py-24 bg-[var(--background)]"
        >
            <Container>
                <div className="text-center mb-16">
                    <h2
                        className="  text-4xl  font-bold  text-[var(--primary-dark)]  "
                    >
                        Servicios
                    </h2>

                    <div
                        className="  mx-auto  mt-5  h-1  w-28  rounded-full  bg-[var(--primary)]  "
                    />
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >
                    <ServiceCard
                        title="Psicología Clínica"
                        
                        buttonText="Agendar cita"
                        buttonHref="#agendarcita"
                    >
                        <p>Tabla de consultas</p>
                        {/* Aquí irá la tabla */}

                    </ServiceCard>
                    <ServiceCard
                        title="Psicología Forense"
                        
                        buttonText="Ver más"
                        buttonHref="/forense"
                    >
                        <p>Tabla de consultas</p>
                        {/* Aquí irá la lista */}
                    
                    </ServiceCard>
                    <ServiceCard
                        title="Psicología Holística"
                        
                        buttonText="Ver más"
                        buttonHref="/holistica"
                    >
                        <p>Tabla de consultas</p>
                        {/* Aquí irá la lista */}
                    
                    </ServiceCard>
                </div>    
            </Container>
        </section>
    );
}