import { Link } from "react-router-dom";

const CardProductPopularity = ({nombre, imagen, description}) => {
  return (
    <div className=" w-full sm:w-[90%] md:w-[80%] lg:w-[30%] rounded-xl overflow-hidden">
      <div className="bg-white">
        <img src={imagen} alt="" className="w-full h-[350px] rounded-t-xl object-contain" />
      </div>
      <div className="bg-Blue p-4 text-white">
        <h1 className="text-center font-bold text-2xl">{nombre}</h1>
        <h2 className="text-center my-4">
          {description}
        </h2>
        <Link className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 text-center block">
          Lo quiero ya!
        </Link>
      </div>
    </div>
  );
};

export default CardProductPopularity;
