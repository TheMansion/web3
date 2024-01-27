import { Link } from "react-router-dom";
import "./styles/Header.scss";
import logo from "../icons/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid bg-black menu-wrapper">
        <div className="container px-10">
          <h1 className="h1">
            Anuncios de Putas y Kinesiologas en Lima - Encuentra Servicios de
            Acompañantes
          </h1>
          <nav className="menu">
            <ul>
              <li className="brand">
                <a
                  href="/"
                  aria-label="Logo que redirige a la pagina de inicio"
                >
                  <img src={logo} alt="" />
                </a>
              </li>
              <li>
                <Link to="/" className="menu-option">
                  Escorts en Lima
                </Link>
              </li>
            </ul>
            <Link to="/login" id="box" className="button gradient-border">
              Anuncia gratis
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
