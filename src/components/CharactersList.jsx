import { Badge } from "./icons";

import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

import "./styles/CharactersList.scss";

export const CharactersList = ({ badges }) => {
  if (badges.length === 0) {
    return (
      <main className="pb-16">
        {[...Array(10)].map((e, i) => (
          <div className="character" key={i}>
            <header>
              <Skeleton variant="rect" animation="wave" height={355} />
            </header>
            <footer>
              <div className="left-col">
                <h2 className="name">
                  <Skeleton variant="text" animation="wave" />
                </h2>
                <p className="desc">
                  <Skeleton variant="text" animation="wave" />
                </p>
              </div>
              <div className="right-col">
                <h2 className="price" alt="precio">
                  <Skeleton variant="text" animation="wave" />
                </h2>
                <p className="time">
                  <Skeleton variant="text" animation="wave" />
                </p>
              </div>
            </footer>
          </div>
        ))}
      </main>
    );
  }
  return (
    <main className="pb-16">
      {badges.map((badge, index) => {
        return (
          <Link
            to={`./post/${badge._id}`}
            target="_blank"
            key={badge._id}
            aria-label={
              "Anuncio de " + badge.name + " kine " + badge.nationality.label
            }
          >
            <div className="character">
              <header>
                <img
                  className="character_img"
                  src={
                    badge.images[0].slice(0, 48) +
                    "e_improve/w_240,h_355,c_fill,f_auto" +
                    badge.images[0].slice(47)
                  }
                  srcSet={
                    badge.images[0].slice(0, 48) +
                    "e_improve/w_140,h_190,c_fill,f_auto" +
                    badge.images[0].slice(47) +
                    " 140w," +
                    badge.images[0].slice(0, 48) +
                    "e_improve/w_240,h_355,c_fill,f_auto" +
                    badge.images[0].slice(47) +
                    " 240w,"
                  }
                  sizes="(max-width: 601px) 140px, 240px"
                  alt=""
                  height={355}
                  width={240}
                  loading={index > 10 ? "lazy" : "eager"}
                  fetchpriority={index <= 10 ? "high" : "low"}
                />
              </header>
              <footer>
                <div className="left-col">
                  <div className="name_wrapper">
                    <h2 className="name">{badge.name}</h2>
                    {badge.verified && <Badge />}
                  </div>
                  <p className="desc">
                    {badge.rate_1h ? "S/" : null} {badge.rate_1h} ·{" "}
                    {badge.nationality.label}
                  </p>
                  <div className="name_wrapper">
                    {badge?.districtValue?.length > 0 && (
                      <>
                        <svg
                          fill="#fff"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          viewBox="595 796 200 200"
                          enable-background="new 595 796 200 200"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M700.539,993.184c-1.29,1.77-3.349,2.816-5.539,2.816c-2.191,0-4.249-1.047-5.539-2.817l-55.964-76.807 c-9.428-13.026-14.404-28.398-14.404-44.47C619.093,830.051,653.145,796,695,796s75.907,34.051,75.907,75.906 c0,16.087-4.971,31.46-14.375,44.455L700.539,993.184z M695,808.734c-34.834,0-63.174,28.339-63.174,63.172 c0,13.373,4.141,26.163,11.976,36.987l51.199,70.271l51.228-70.284c7.81-10.793,11.945-23.583,11.945-36.973 C758.174,837.073,729.834,808.734,695,808.734z M695,906.293c-18.96,0-34.386-15.425-34.386-34.387 c0-18.959,15.426-34.385,34.386-34.385c18.961,0,34.388,15.425,34.388,34.385C729.388,890.868,713.961,906.293,695,906.293z M695,850.255c-11.939,0-21.652,9.712-21.652,21.651c0,11.94,9.713,21.654,21.652,21.654c11.94,0,21.654-9.714,21.654-21.654 C716.654,859.967,706.94,850.255,695,850.255z" />
                            </g>
                          </g>
                        </svg>
                        <p className="desc ml-1">
                          {badge?.districtValue[0]?.nombre_ubigeo || ""}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </footer>
            </div>
          </Link>
        );
      })}
    </main>
  );
};
