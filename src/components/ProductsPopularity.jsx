import CardPorductPopularity from "./CardPorductPopularity"

const ProductsPopularity = () => {
  return (
    <div className="background-scroll">
      <div className="w-[80%] m-auto my-3 py-4">
        <h1 className="text-white text-5xl text-center font-bold mt-4">
          Las más Preferidas
        </h1>

        <div className="flex items-center justify-between my-10">
          <CardPorductPopularity />
          <CardPorductPopularity />
          <CardPorductPopularity />
        </div>
      </div>
    </div>
  );
}

export default ProductsPopularity