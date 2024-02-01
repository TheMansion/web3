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
                  srcSet={
                    badge.images[0].slice(0, 48) +
                    "e_improve/w_120,h_175,c_fill,f_auto" +
                    badge.images[0].slice(47) +
                    "480w"
                  }
                  src={
                    badge.images[0].slice(0, 48) +
                    "e_improve/w_240,h_355,c_fill,f_auto" +
                    badge.images[0].slice(47)
                  }
                  alt=""
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
                    S/ {badge.rate_1h} · {badge.nationality.label}
                  </p>
                </div>
              </footer>
            </div>
          </Link>
        );
      })}
    </main>
  );
};
