import { Link } from "react-router-dom";

import "./styles/AuthSidebar.scss";
import logo from "../icons/logo.webp";

import girls from "../icons/girls.jpg";
import girlsWebp from "../icons/girls.webp";

export const AuthSidebar = () => {
  return (
    <>
      <section className="auth-sidebar">
        <div className="auth-sidebar-content">
          <header>
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
            <h1 className="mb-4">¿Quieres trabajar a tope?</h1>
            <h2 className="leading-normal">
              Publicar tus anuncios en Latin Girls hará que aumentes tus
              ingresos y mejores la calidad de los contactos.
            </h2>
          </header>
          <div className="artwork">
            <picture>
              <source srcSet={girlsWebp} type="image/webp" />
              <img src={girls} alt="" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};
