import CardHealthy from "./CardHealthy";

// IMPORTANDO IMAGENES DE LOS BENEFICIOS
import Image1 from '../images/beneficios/llenar-combustible.jpg';
import Image2 from '../images/beneficios/contaminacion.jpeg';
import Image3 from '../images/beneficios/autonomia.png';
import Image4 from '../images/beneficios/silenciosa.webp';

const Healthy = () => {

  const benefits = [
    {
      image: Image1,
      title: "Ahorra en combustible",
      description:
        "Olvídate de la gasolina y reduce costos con una moto eléctrica que requiere menos mantenimiento.",
    },
    {
      image: Image2,
      title: "Conduce sin contaminar",
      description:
        "Disfruta de viajes libres de emisiones mientras contribuyes a un futuro más sostenible.",
    },
    {
      image: Image3,
      title: "Autonomía eficiente para tus trayectos diarios",
      description:
        "Con hasta 60 km de autonomía, cubre tus trayectos diarios sin preocuparte por recargas frecuentes.",
    },
    {
      image: Image4,
      title: "Silenciosa y cómoda",
      description:
        "Experimenta una conducción suave y sin ruidos, ideal para trayectos relajados y más tranquilos.",
    },
  ];

  return (
    <div className="w-[80%] m-auto mt-8">
      <h1 className="text-center text-4xl text-Black font-bold">
        Beneficios de usar Moto Eléctrica
      </h1>

      <div className="grid-container">
        {benefits.map((benefit, index) => (
          <CardHealthy
            key={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Healthy