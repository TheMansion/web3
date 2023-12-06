import { useEffect, useState } from "react";
import { Header, Footer, Carousell, CharactersList } from "../components";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import "./styles/Home.scss";

export default function Home() {
  const [badges, setBadges] = useState([]);

  const fetchData = async () => {
    await fetch(`${process.env.REACT_APP_API}/posts`)
      .then((response) => response.json())
      .then((data) => setBadges(data))
      .catch((error) => {
        setBadges([]);
      });
  };

  useEffect(() => {
    const glide1 = new Glide("#carousell", {
      type: "carousel",
      autoplay: 2400,
      animationDuration: 500,
      animationTimingFunc: "linear",
      perView: 10,
      // focusAt: 'center',
      gap: 0,
      breakpoints: {
        1280: {
          perView: 8,
        },
        1022: {
          perView: 6,
        },
        768: {
          perView: 4,
        },
        500: {
          perView: 3,
        },
      },
    });
    glide1.mount();
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container px-10">
          <Carousell></Carousell>
          <section>
            <h2 className="home-subtitle">
              Aquí encontrarás las mejores escorts de lujo en Lima y todo el
              Perú.
            </h2>
            <p className="home-detail">
              Bienvenidos a Cucas, guía de escorts en Lima, Perú. Nuestro
              objetivo como siempre es garantizar un experiencia al usuario de
              alta calidad donde todo el contenido esté trabajado al detalle y
              satisfacer así a los paladares más exquisitos.
            </p>
          </section>
          <CharactersList badges={badges}></CharactersList>
        </div>
      </div>
      <Footer />
    </>
  );
}
