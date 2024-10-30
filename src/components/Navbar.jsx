import { useState } from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  // Estado para controlar el menú desplegable
  const [isOpen, setIsOpen] = useState(false);

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-LightGray shadow-lg fixed w-full z-50">
      {/* Contenedor principal */}
      <div className="w-[80%] m-auto flex items-center justify-between h-[120px]">
        {/* Logo */}
        <div className="w-[120px]">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>

        {/* Botón de menú en pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Menú de navegación (oculto en pantallas pequeñas) */}
        <nav className="hidden md:flex w-[70%] justify-center gap-x-8 text-lg uppercase">
          <ul className="flex gap-x-8">
            <li>
              <NavLink to="/" className="link" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/motos-electricas"
                className="link"
                activeClassName="active"
              >
                Motos Eléctricas
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className="link" activeClassName="active">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Componente de búsqueda en pantallas grandes */}
        <div className="hidden md:block">
          <Search />
        </div>
      </div>

      {/* Componente de búsqueda en pantallas pequeñas, debajo del logo */}
      <div className="md:hidden w-full text-center p-4 ml-5">
        <Search />
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-LightGray w-full text-center">
          <ul className="flex flex-col gap-y-4 p-4">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="link"
                activeClassName="active"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/motos-electricas"
                onClick={toggleMenu}
                className="link"
                activeClassName="active"
              >
                Motos Eléctricas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                onClick={toggleMenu}
                className="link"
                activeClassName="active"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
