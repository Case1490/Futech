import CalendaryIcon from "../icons/CalendaryIcon"
import DeliveryIcon from "../icons/DeliveryIcon"
import SecurityIcon from "../icons/SecurityIcon"
import SupportIcon from "../icons/SupportIcon"

const ServiceHome = () => {
  return (
    <div className="bg-Blue">
      <div className="w-[80%] m-auto space-y-5 md:flex items-center text-white py-8 justify-center md:gap-x-8">
        <div className="flex flex-col items-center text-center flex-1">
          <SecurityIcon />

          <h1 className="font-bold mt-3 text-xl">Seguridad</h1>
          <p className="text-md text-gray-300">100% pagos seguros y confiables</p>
        </div>

        <div className="flex flex-col items-center text-center flex-1">
          <CalendaryIcon />

          <h1 className="font-bold mt-3 text-xl">1 año de garantía</h1>
          <p className="text-md text-gray-300">Garantizamos cambios y devoluciones</p>
        </div>

        <div className="flex flex-col items-center text-center flex-1">
          <SupportIcon />

          <h1 className="font-bold mt-3 text-xl">Soporte 24/7</h1>
          <p className="text-md text-gray-300">¡Contáctanos¡ Resolvemos tus dudas al instante</p>
        </div>
        <div className="flex flex-col items-center text-center flex-1">
          <DeliveryIcon />

          <h1 className="font-bold mt-3 text-xl">Delivery gratis</h1>
          <p className="text-md text-gray-300">Nosotros te llevamos tu producto</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceHome