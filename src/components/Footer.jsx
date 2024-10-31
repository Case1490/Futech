import { Link } from "react-router-dom";
import SocialNetworks from "./SocialNetworks";

export default function Footer() {
  return (
    <footer className=" bg-Blue text-white">
      <div className="w-[80%] m-auto flex flex-col text-center space-y-10 lg:flex lg:flex-row py-8 lg:justify-between lg:gap-x-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">FutchPeru</h1>
          <h2 className="text-xl">Motos eléctricas</h2>
          <p className="my-2 text-gray-300">
            En Futech, transformamos la movilidad urbana con nuestras motos
            eléctricas innovadoras y sostenibles. Nos comprometemos a ofrecer
            vehículos eficientes que brindan una experiencia de conducción
            emocionante, haciendo de cada viaje una oportunidad para cuidar el
            medio ambiente.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <ul className=" space-y-4 text-center font-bold text-xl">
            <li>
              <Link className=" hover:text-Black" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className=" hover:text-Black" to="/motos-electricas">
                Motos eléctricas
              </Link>
            </li>
            <li>
              <Link className=" hover:text-Black" to="/contacto">
                Contacto
              </Link>
            </li>
            <li>
              <Link className=" hover:text-Black" to="/sobre-nosotros">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link className=" hover:text-Black" to="/cambios-devoluciones">
                Política de cambios y devoluciones
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-center text-3xl font-bold">
            ¡Síguenos en nuestras principales redes sociales!
          </h1>
          <SocialNetworks />
        </div>
      </div>

      <hr className=" w-[90%] m-auto py-2" />

      <h1 className="text-center py-6">
        &copy; {new Date().getFullYear()} FutechPeru. Todos los derechos
        reservados.
      </h1>
    </footer>
  );
}
