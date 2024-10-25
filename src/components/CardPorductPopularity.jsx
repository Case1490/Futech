import { Link } from "react-router-dom";
import Image from "../images/motos/M005.png";

const CardProductPopularity = () => {
  return (
    <div className="w-[30%] rounded-xl overflow-hidden">
      <div className="bg-white">
        <img src={Image} alt="" className="w-full h-auto rounded-t-xl" />
      </div>
      <div className="bg-Blue p-4 text-white">
        <h1 className="text-center font-bold text-2xl">Nombre</h1>
        <h2 className="text-center my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          iusto error quae nesciunt dicta natus.
        </h2>
        <Link className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 text-center block">
          Lo quiero ya!
        </Link>
      </div>
    </div>
  );
};

export default CardProductPopularity;
