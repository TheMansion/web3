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
      {badges.map((badge) => {
        return (
          <Link to={`./post/${badge._id}`} key={badge._id}>
            <div className="character">
              <header>
                <img
                  className="character_img"
                  src={
                    badge.images[0].slice(0, 48) +
                    "w_240,h_355,c_fill,f_auto/a_310,fl_tiled,l_brand,o_20,r_0,z_1.1,w_95" +
                    badge.images[0].slice(47)
                  }
                  alt=""
                  loading="lazy"
                />
              </header>
              <footer>
                <div className="left-col">
                  <div className="name_wrapper">
                    <h2 className="name">{badge.name}</h2>
                    {badge.verified && <Badge></Badge>}
                  </div>
                  <p className="desc">{badge.nationality.label}</p>
                </div>
                <div className="right-col">
                  <h2 className="price" alt="precio">
                    S/ {badge.rate_1h}
                  </h2>
                  <p className="time">1 Hora</p>
                </div>
              </footer>
            </div>
          </Link>
        );
      })}
    </main>
  );
};
