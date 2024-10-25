import { Link } from "react-router-dom";

const CardMotorcycle = ({ image, name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:cursor-pointer my-2">
      <div className="h-48 w-full overflow-hidden flex items-center justify-center">
        {/* Clase para ajustar la imagen */}
        <img src={image} alt={name} className="object-cover h-full w-full m-4" />
      </div>
      <h3 className="text-xl font-bold mb-2 uppercase">{name}</h3>
      <p>Motos eléctricas, para mayor eficiencia</p>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <Link className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 text-center">
          Comprar
        </Link>
        <Link className="w-full border-2 border-blue-600 text-blue-600 rounded-lg py-2 px-4 text-center">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default CardMotorcycle;
