
const Suscribe = () => {
  return (
    <div className="background-scroll text-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8 w-[80%] m-auto text-center">
        <h1 className="font-bold text-5xl ">
          Sé el Primero en Conocer Nuestras Promociones
        </h1>

        <p className="text-xl">
          Déjanos tu correo para recibir descuentos especiales, novedades y
          ofertas personalizadas en nuestros productos favoritos
        </p>

        <div className="flex items-center">
          <input
            placeholder="Tu email"
            className="inputSubscribe"
            name="email"
            type="email"
          />
          <button className="buttonSubscribe">Quiero Ofertas!</button>
        </div>
      </div>
    </div>
  );
}

export default Suscribe