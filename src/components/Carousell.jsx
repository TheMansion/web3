import { Link } from "react-router-dom";
import { PrevArrow, NextArrow } from "./icons";

import fernanda from "../icons/carousell/fernanda.png";
import fernandaWebp from "../icons/carousell/fernanda.webp";
import lorena from "../icons/carousell/lorena.png";
import lorenaWebp from "../icons/carousell/lorena.webp";
import greimar from "../icons/carousell/greimar.png";
import greimarWebp from "../icons/carousell/greimar.webp";
import lesly from "../icons/carousell/lesly.png";
import leslyWebp from "../icons/carousell/lesly.webp";
import melissa from "../icons/carousell/melissa.png";
import melissaWebp from "../icons/carousell/melissa.webp";
import alessandra from "../icons/carousell/alessandra.png";
import alessandraWebp from "../icons/carousell/alessandra.webp";
import kiara from "../icons/carousell/kiara.png";
import kiaraWebp from "../icons/carousell/kiara.webp";
import jimena from "../icons/carousell/jimena.png";
import jimenaWebp from "../icons/carousell/jimena.webp";
import gabriela from "../icons/carousell/gabriela.png";
import gabrielaWebp from "../icons/carousell/gabriela.webp";
import alejandra from "../icons/carousell/alejandra.png";
import alejandraWebp from "../icons/carousell/alejandra.webp";

export const Carousell = () => {
  return (
    <section>
      <div id="carousell" className="carousell glide">
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
            aria-label="Retroceder al Slide Anterior"
          >
            <PrevArrow></PrevArrow>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            aria-label="Avanzar al Siguiente Slide"
          >
            <NextArrow></NextArrow>
          </button>
        </div>
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <Link to="/post/5f10c5d814238e00088f2594">
                <picture>
                  <source srcSet={kiaraWebp} type="image/webp" />
                  <img src={kiara} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5efbef1cdf8be90008f3d12a">
                <picture>
                  <source srcSet={greimarWebp} type="image/webp" />
                  <img src={greimar} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5f3321242d0ea70008a6b165">
                <picture>
                  <source srcSet={alessandraWebp} type="image/webp" />
                  <img src={alessandra} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5efd1e68ccc31713d8db9732">
                <picture>
                  <source srcSet={fernandaWebp} type="image/webp" />
                  <img src={fernanda} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5f3045c9b3d8190007676d02">
                <picture>
                  <source srcSet={jimenaWebp} type="image/webp" />
                  <img src={jimena} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5f341f87353334000841853a">
                <picture>
                  <source srcSet={melissaWebp} type="image/webp" />
                  <img src={melissa} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5f11138e49dbfe00076b4cb8">
                <picture>
                  <source srcSet={leslyWebp} type="image/webp" />
                  <img src={lesly} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5efdfbfdccb33400071d08e5">
                <picture>
                  <source srcSet={lorenaWebp} type="image/webp" />
                  <img src={lorena} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5f527fa5f600410008ebe84f">
                <picture>
                  <source srcSet={gabrielaWebp} type="image/webp" />
                  <img src={gabriela} alt="" />
                </picture>
              </Link>
            </li>
            <li className="glide__slide">
              <Link to="/post/5f5fca144a6d2b0007ee586c">
                <picture>
                  <source srcSet={alejandraWebp} type="image/webp" />
                  <img src={alejandra} alt="" />
                </picture>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
