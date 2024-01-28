import "./styles/Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="top grid grid-col-1 md:grid-cols-3">
            <nav className="p-12">
              <h3 className="mb-6 font-bold">Soluciones</h3>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Independientes
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Agencias
              </a>
            </nav>
            <nav className="p-12">
              <h3 className="mb-6 font-bold">Servicios</h3>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Particulares
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Promociones
              </a>
            </nav>
            <nav className="p-12">
              <h3 className="mb-6 font-bold">Acerca de</h3>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Nosotros
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Contacto
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                Términos y condiciones
              </a>
            </nav>
          </div>
          <div className="bottom pb-12">
            <p className="text-center mb-10">
              © 2023 Latin Girls Inc. Todos los derechos reservados.
            </p>
            <p className="mb-4">
              La responsabilidad sobre el contenido de los anuncios recae
              completamente en los anunciantes.
            </p>
            <p className="mb-4">
              Este sitio web es una plataforma de anuncios clasificados
              destinada exclusivamente para adultos y tiene como objetivo
              facilitar la publicación de anuncios por parte de damas de
              compañía independientes.
            </p>
            <p className="mb-4">
              Al acceder y utilizar este sitio, aceptas cumplir con todas las
              leyes y regulaciones aplicables.
            </p>
            <p className="mb-4">
              Latin Girls Inc. no asume ninguna responsabilidad por la
              veracidad, legalidad o contenido de los anuncios publicados en
              este sitio.
            </p>
            <p className="mb-4">
              La participación en este servicio implica que los anunciantes
              deben cumplir con todas las leyes locales y nacionales
              relacionadas con la promoción de servicios para adultos.
            </p>
            <p className="mb-4">
              Latin Girls Inc. se reserva el derecho de eliminar cualquier
              anuncio que incumpla con estas leyes o que viole nuestras
              políticas. Este sitio web no respalda ni garantiza la calidad de
              los servicios ofrecidos por los anunciantes. Los usuarios asumen
              toda la responsabilidad por cualquier interacción o transacción
              realizada con los anunciantes.
            </p>
            <p className="mb-4">
              Para obtener más información sobre nuestras políticas o reportar
              contenido inapropiado, por favor contáctenos en
              team@cucasperu.com.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
