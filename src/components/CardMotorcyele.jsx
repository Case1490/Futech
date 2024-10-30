import { Link } from "react-router-dom";

const CardMotorcycle = ({ id, image, name, description, onClick }) => {
  const mensajeWhatsApp = `https://wa.me/51902040118?text=Hola, estoy interesado en ${name}, quisiera más información`;

  const handleWhatsAppClick = (e) => {
    e.stopPropagation(); // Detiene la propagación del clic
    window.open(mensajeWhatsApp, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="bg-white shadow-xl rounded-lg p-6 text-center hover:cursor-pointer my-2 motorcycle"
      onClick={onClick}
    >
      <div className="h-48 w-full overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain h-full w-full m-4"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 uppercase">{name}</h3>
      <p className="description">{description}</p>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 text-center"
        >
          Comprar
        </button>
        <Link
          to={`/motos-electricas/${id}`}
          className="w-full border-2 border-blue-600 text-blue-600 rounded-lg py-2 px-4 text-center hover:bg-blue-100"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default CardMotorcycle;
