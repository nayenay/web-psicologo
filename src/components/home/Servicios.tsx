import Container from "../layout/Container";
import ServiceCard from "../cards/ServiceCard";

const psicologiaClinica = [
  {
    nombre: "Terapia en línea",
    precio: "$250 MXN",
  },
  {
    nombre: "Terapia individual",
    precio: "$350 MXN",
  },
  {
    nombre: "Terapia de pareja",
    precio: "$400 MXN",
  },
  {
    nombre: "Terapia familiar",
    precio: "$400 MXN",
  },
  {
    nombre: "Intervención en crisis",
    precio: "$350 MXN",
  },
  {
    nombre: "Manejo de duelo",
    precio: "$350 MXN",
  },
  {
    nombre: "Evaluaciones clínicas",
    precio: "$500 MXN",
  },
  {
    nombre: "Rehabilitación domicilaria",
    precio: "$400 MXN",
  },
];

const psicologiaForense = [
"Evaluaciones y dictámenes psicológicos",
"Peritajes para juicios y audiencias",
"Informes y asesoría técnica‑psicológica",
"Intervención en conflictos, custodia, violencia o responsabilidad",

];

const psicologiaHolistica = [
"Atención integral: mente, cuerpo y emociones",
"Manejo de estrés, ansiedad, duelos y traumas",
"Recuperación del equilibrio y sentido de vida"

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
                        <div className="space-y-1">
                            {psicologiaClinica.map((consulta) => (
                                <div
                                    key={consulta.nombre}
                                    className="  flex  justify-between  items-center  border-b  border-white/60  pb-2  "
                                >

                                    <span className="text-[15px] text-black font-semibold">
                                        {consulta.nombre}
                                    </span>
                                    <span
                                        className="  rounded-full
                                            bg-white
                                            px-3
                                            py-1
                                            text-sm
                                            font-semibold
                                            text-[var(--primary-dark)]
                                            shadow-sm  "
                                    >
                                        {consulta.precio}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </ServiceCard>
                    <ServiceCard
                        title="Psicología Forense"
                        buttonText="Ver más"
                        buttonHref="/forense"
                    >
                        <ul className="space-y-6">

                            {psicologiaForense.map((servicio) => (

                                <li
                                    key={servicio}
                                    className="flex items-start gap-3"
                                >

                                    <span
                                        className="
                                            mt-2
                                            h-2
                                            w-2                            
                                            rounded-full
                                            bg-[var(--primary)]
                                        "
                                    />

                                    <span className="text-black">
                                        {servicio}
                                    </span>

                                </li>

                            ))}

                        </ul>
                    
                    </ServiceCard>
                    <ServiceCard
                        title="Psicología Holística"
                        
                        buttonText="Ver más"
                        buttonHref="/holistica"
                    >
                        <ul className="space-y-4">

                            {psicologiaHolistica.map((servicio) => (

                                <li
                                    key={servicio}
                                    className="flex items-start gap-3"
                                >

                                    <span
                                        className="
                                            mt-2
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[var(--primary)]
                                        "
                                    />

                                    <span className="text-black">
                                        {servicio}
                                    </span>

                                </li>

                            ))}

                        </ul>
                    
                    </ServiceCard>
                </div>    
            </Container>
        </section>
    );
}