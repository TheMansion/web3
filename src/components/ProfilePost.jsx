import { Badge } from "./icons";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles/ProfilePost.scss";

export const ProfilePost = ({ postExists, badges }) => {
  const { t } = useTranslation();
  const validateAvailability = (alwaysOn, days, iniTime, endTime) => {
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();

    if (alwaysOn) {
      return alwaysOn;
    }

    if (days?.length > 0) {
      let inDayRange = days.map((el) => el.value).includes(currentDay);
      if (endTime.value <= 6 && currentHour <= 6) {
        // Trabaja por la madrugada
        return true;
      } else {
        // Trabaja durante el día
        let minHour = iniTime.value;
        let maxHour = endTime.value;

        let inHourRange = minHour <= currentHour && currentHour <= maxHour;

        return inDayRange && inHourRange;
      }
    } else {
      return false;
    }
  };

  const isVideo = /\.(mp4|mov|ogg)$/;

  return (
    <>
      <article className="container">
        <div className="post-wrapper flex justify-center">
          <div className="w-2/2 md:w-1/2 border-dashed border-pink-400 border-2 rounded-md p-10 flex justify-center max-w-screen-sm">
            {postExists ? (
              <div>
                <p className="mb-5">
                  Tienes un anuncio publicado{" "}
                  <span role="img" aria-label="smile emoji">
                    🤗🎉🙌
                  </span>
                </p>
                <div className="flex">
                  {badges.map((badge) => {
                    return (
                      <Link
                        to={`./post/${badge._id}`}
                        target="_blank"
                        key={badge._id}
                        aria-label={
                          "Anuncio de " +
                          badge.name +
                          " kine " +
                          badge.nationality.label
                        }
                      >
                        <div className="character">
                          <picture>
                            <source
                              media="(max-width: 500px)"
                              srcSet={
                                badge.images[0].slice(0, 48) +
                                "e_improve/w_160,h_216,c_fill,f_auto" +
                                badge.images[0].slice(47)
                              }
                            />
                            <img
                              src={
                                badge.images[0].slice(0, 48) +
                                "e_improve/w_240,h_355,c_fill,f_auto" +
                                badge.images[0].slice(47)
                              }
                              alt=""
                              className="character_img"
                            />
                          </picture>
                          <footer>
                            <div className="name_wrapper">
                              <h2 className="name">{badge.name}</h2>
                              {validateAvailability(
                                badge?.alwaysOn,
                                badge?.days,
                                badge?.iniTime,
                                badge?.endTime
                              ) && (
                                <span className="relative flex h-3 w-3 mr-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                              )}
                            </div>
                            <div className="desc">
                              {badge.rate_1h ? "S/" : null} {badge.rate_1h} ·{" "}
                              {badge.nationality.label}
                            </div>
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
                                    enableBackground="new 595 796 200 200"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                      <g>
                                        <path d="M700.539,993.184c-1.29,1.77-3.349,2.816-5.539,2.816c-2.191,0-4.249-1.047-5.539-2.817l-55.964-76.807 c-9.428-13.026-14.404-28.398-14.404-44.47C619.093,830.051,653.145,796,695,796s75.907,34.051,75.907,75.906 c0,16.087-4.971,31.46-14.375,44.455L700.539,993.184z M695,808.734c-34.834,0-63.174,28.339-63.174,63.172 c0,13.373,4.141,26.163,11.976,36.987l51.199,70.271l51.228-70.284c7.81-10.793,11.945-23.583,11.945-36.973 C758.174,837.073,729.834,808.734,695,808.734z M695,906.293c-18.96,0-34.386-15.425-34.386-34.387 c0-18.959,15.426-34.385,34.386-34.385c18.961,0,34.388,15.425,34.388,34.385C729.388,890.868,713.961,906.293,695,906.293z M695,850.255c-11.939,0-21.652,9.712-21.652,21.651c0,11.94,9.713,21.654,21.652,21.654c11.94,0,21.654-9.714,21.654-21.654 C716.654,859.967,706.94,850.255,695,850.255z" />
                                      </g>
                                    </g>
                                  </svg>
                                  <p className="desc ml-1">
                                    {badge?.districtValue[0]?.nombre_ubigeo ||
                                      ""}
                                  </p>
                                </>
                              )}
                            </div>
                          </footer>
                          <div className="badge-wrapper">
                            {badge.verified && (
                              <div className="badge-verified">
                                <Badge width="24px" height="24px" />
                                <span>{t("verified")}</span>
                              </div>
                            )}
                            {badge.vip && (
                              <div className="badge-vip">
                                <span>vip</span>
                              </div>
                            )}
                            {badge.profession.value === "2" && (
                              <div className="badge-porn">
                                <span>porn</span>
                                <span>star</span>
                              </div>
                            )}
                            {badge.images.filter((archivo) =>
                              isVideo.test(archivo)
                            ).length > 0 && (
                              <div className="badge-video">
                                <span>video</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <p>
                  Aún {postExists} no has publicado un anuncio
                  <span role="img" aria-label="sleep emoji">
                    😪
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
