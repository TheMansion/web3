import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Header, Footer, CharactersList } from "../components";
import { useTranslation } from "react-i18next";
import Ubigeos from "../../src/assets/ubigeos.json";

import bg1 from "../../src/assets/search-bg/search-bg-1.webp";
import bg2 from "../../src/assets/search-bg/search-bg-2.webp";
import bg3 from "../../src/assets/search-bg/search-bg-3.webp";
import bg4 from "../../src/assets/search-bg/search-bg-4.webp";
import bg7 from "../../src/assets/search-bg/search-bg-7.webp";

import bgsm1 from "../../src/assets/search-bg/search-bg-sm-1.webp";
import bgsm2 from "../../src/assets/search-bg/search-bg-sm-2.webp";
import bgsm3 from "../../src/assets/search-bg/search-bg-sm-3.webp";
import bgsm4 from "../../src/assets/search-bg/search-bg-sm-4.webp";
import bgsm7 from "../../src/assets/search-bg/search-bg-sm-7.webp";

import "./styles/Home.scss";

const backgrounds = [bg1, bg2, bg3, bg4, bg7];
const backgroundsMobile = [bgsm1, bgsm2, bgsm3, bgsm4, bgsm7];

const imagenDesktop =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];
const imagenMobile =
  backgroundsMobile[Math.floor(Math.random() * backgrounds.length)];

export default function Home() {
  const [t] = useTranslation();
  const [ubigeos, setUbigeos] = useState([]);
  const [districtValue, setDistrictValue] = useState(null);
  const [badges, setBadges] = useState([]);
  const [filteredBadges, setFilteredBadges] = useState([]);

  const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(
    navigator.userAgent
  );

  let limit = 25;
  if (isMobile) {
    limit = 10;
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    await fetch(
      `${process.env.REACT_APP_API}/posts?limit=${limit}&page=${nextPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBadges([...badges, ...data.posts.docs]);
        if (!districtValue) {
          setFilteredBadges([...filteredBadges, ...data.posts.docs]);
        }
        setNextPage(data.posts.nextPage);
        setIsLoading(false);
      })
      .catch((error) => {
        setBadges([]);
        setFilteredBadges([]);
        setIsLoading(false);
      });
  };

  function onchangeDistrito(value) {
    setDistrictValue(value);
  }

  useEffect(() => {
    let _ubigeos = Ubigeos.map((el) => {
      return {
        value: el.id_ubigeo,
        label: el.etiqueta_ubigeo,
      };
    });
    setUbigeos(_ubigeos);
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (districtValue) {
      handleSearchPost(districtValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badges]);

  const handleSearchPost = (value) => {
    if (value.length > 0) {
      let filteredBadges = badges.filter((badge) => {
        if (badge?.districtValue) {
          return value.some(
            (el) => el.value === badge.districtValue[0]?.id_ubigeo
          );
        } else {
          return null;
        }
      });
      setFilteredBadges(filteredBadges);
    }
  };

  const handleClearFilter = () => {
    setFilteredBadges(badges);
    setDistrictValue(null);
  };

  return (
    <>
      <Helmet>
        <title>Kinesiólogas en Perú | Latin Girls</title>
        <meta property="og:title" content="Latin Girls Escort (By CUCAS)" />
        <meta
          property="og:description"
          content="Aquí encontrarás las mejores escorts, kinesiologas y putas de lujo en Lima y todo el Perú"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/mansion/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1704700809/girls_cpix3e.jpg?_s=public-apps"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        {/* Preload de imagenes para mobile */}
        <link
          rel="preload"
          href={imagenMobile}
          as="image"
          media="(max-width: 600px)"
        ></link>
        {/* Preload de imagenes para escritorio */}
        <link
          rel="preload"
          href={imagenDesktop}
          as="image"
          media="(min-width: 601px)"
        ></link>
      </Helmet>
      <Header />
      <div className="container-fluid">
        <div className="container relative h-40 lg-h-32">
          <div className="filter grid gap-3 lg:gap-2 grid-cols-8 w-full px-5 lg:px-20 py-8 lg:py-14 z-10 absolute">
            <Select
              options={ubigeos}
              id="ubigeos"
              name="ubigeos"
              value={districtValue}
              isMulti
              onChange={onchangeDistrito}
              className="react-select-container col-span-8 lg:col-span-6 md:col-span-4"
              classNamePrefix="react-select"
              placeholder={t("whereAreYou")}
              isOptionDisabled={() => districtValue?.length >= 5}
            ></Select>
            <button
              className="lg:col-span-1 col-span-4 md:col-span-2 bg-white/80 hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-1 px-4 border border-pink-700 rounded"
              onClick={() => handleSearchPost(districtValue)}
              disabled={!districtValue}
              aria-label="Boton buscar"
            >
              {t("search")}
            </button>
            <button
              className="lg:col-span-1 col-span-4 md:col-span-2 bg-white/80 hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-1 px-4 border border-pink-500 hover:border-transparent rounded"
              onClick={handleClearFilter}
              aria-label="Boton limpiar"
            >
              {t("clear")}
            </button>
          </div>
          <picture>
            <source media="(max-width: 500px)" srcSet={imagenMobile} />
            <img
              src={imagenDesktop}
              alt=""
              className="w-[100%] h-[100%] object-cover absolute bg-pink-200"
            />
          </picture>
        </div>
        <div className="container px-2.5 pt-8">
          <CharactersList badges={filteredBadges}></CharactersList>
          <div className="flex justify-center">
            {nextPage ? (
              <button
                onClick={() => setCurrentPage(nextPage)}
                disabled={nextPage === null ? true : false}
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                {isLoading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {t("seeMore")}
              </button>
            ) : (
              <p>{t("endOfList")}</p>
            )}
          </div>
          <section>
            <h1 className="h1">{t("homeh1")}</h1>
            <h2 className="home-subtitle">{t("homeh2")}</h2>
            <p className="home-detail">{t("welcomeText")}</p>
          </section>
          <a
            href="https://api.whatsapp.com/send?phone=51902757137&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20como%20anunciar."
            className="float flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Boton flotante para contactar a soporte via Whatsapp"
          >
            <svg
              fill="#ffffff"
              height="35px"
              width="35px"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 308 308"
              xmlSpace="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_468_">
                  <path
                    id="XMLID_469_"
                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                  />
                  <path
                    id="XMLID_470_"
                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
