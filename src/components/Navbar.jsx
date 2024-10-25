import SearchIcon from '../icons/SearchIcon';
import Logo from '../images/logo.png';

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-LightGray shadow-lg fixed w-full z-50">
      <div className="w-[80%] m-auto flex items-center justify-between">
        <div className="w-[120px]">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>

        <nav className="w-[80%]">
          <ul className="flex justify-center gap-x-8 text-lg uppercase">
            <li>
              <NavLink to="/" className="link" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/motos-electricas" className="link" activeClassName="active">
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

        <div className="flex items-center gap-x-1">
          <SearchIcon />
          <span>Buscar</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar