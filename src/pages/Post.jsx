import { Helmet } from "react-helmet-async";
import { Header, Footer } from "../components";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Badge, Whatsapp } from "../components/icons";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./styles/Post.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkerComponent from "../icons/marker";

export default function Post() {
  const { id } = useParams();

  const [data, setData] = useState({
    _id: "",
    uuid: "",
    email: "",
    name: "",
    phone: "",
    age: {
      day: 0,
      month: 0,
      year: 0,
    },
    nationality: "",
    degree: "",
    languages: [],
    profession: {},
    presentation: "",
    hair: "",
    eye: "",
    dimensions: [],
    height: "",
    weight: "",
    rate_30m: "",
    rate_1h: "",
    rate_2h: "",
    rate_3h: "",
    rate_allNight: "",
    rate_travel: "",
    pay_method: [],
    services: [],
    place: [],
    images: [],
  });

  const handleGetPost = async () => {
    await fetch(`${process.env.REACT_APP_API}/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        window.location = "/404";
      });
  };

  useEffect(() => {
    handleGetPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isVideo = /\.(mp4|mov|ogg)$/;

  return (
    <>
      <Helmet>
        <title>{`Kinesióloga: ${data.name} ${data.phone}`}</title>
        <meta
          property="og:title"
          content={`${data.name} ${data.phone} | Escort Latina`}
        />
        <meta
          property="og:description"
          content={`${data?.presentation?.slice(0, 120)}`}
        />
        <meta
          property="og:image"
          content={`${
            data.images
              .filter((archivo) => !isVideo.test(archivo))[0]
              ?.slice(0, 48) +
            "e_improve/w_600,h_400,c_fill,f_auto" +
            data.images
              .filter((archivo) => !isVideo.test(archivo))[0]
              ?.slice(47)
          }`}
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
      </Helmet>
      <Header></Header>
      <div className="container pt-10 sm:px-0 px-4">
        <h1 className="title">
          <div className="name_wrapper">
            <p className="mr-2">{data.name}</p>
            {data.verified && <Badge></Badge>}
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=${data.phone}&text=Hola ${data.name}, te he visto en LatinGirls (Cucas) y me gustaría quedar contigo.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Boton flotante para contactar a soporte via Whatsapp"
          >
            <Whatsapp></Whatsapp>
            {data.phone}
          </a>
        </h1>

        <div className="name_wrapper">
          {data.districtValue?.[0] && <MarkerComponent />}
          <p className="mt-1">{data.districtValue?.[0]?.etiqueta_ubigeo}</p>
        </div>
        <h2 className="description whitespace-pre-wrap leading-snug">
          {data.presentation}
        </h2>
      </div>
      <div className="container sm:px-0 px-4 grid grid-rows-1 grid-cols-6 gap-8 py-10 text-sm">
        <div className="md:col-start-1 col-span-6 md:col-span-2 bg-gray-100 p-4">
          <div className="py-2 mb-2 border-solid border-pink-500 border-b">
            <p className="text-pink-600 font-bold">Información y datos</p>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Edad</div>
            <div>{new Date().getFullYear() - data.age.year} Años</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Idiomas</div>
            <div>
              {data.languages.map((language, i) => {
                return <span key={i}>{language.label}. </span>;
              })}
            </div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Profesión</div>
            <div>{data.profession.label}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Color de pelo</div>
            <div>{data.hair.label}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Color de ojos</div>
            <div>{data.eye.label}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Estatura</div>
            <div>{data.height} cm</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Peso</div>
            <div>{data.weight} kg</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Medidas</div>
            <div>
              {data.dimensions[1]} - {data.dimensions[2]} - {data.dimensions[3]}
            </div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Nacionalidad</div>
            <div>{data.nationality.label}</div>
          </div>
          <div className="flex justify-between py-2">
            <p>Atención en</p>
            <div>
              {data.place.map((item, i) => {
                return (
                  <p key={i} className="mb-2">
                    {item.label}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:col-start-3 col-span-6 md:col-span-2 bg-gray-100 p-4">
          <div className="py-2 mb-2 border-solid border-pink-500 border-b">
            <p className="text-pink-600 font-bold">Servicios</p>
          </div>
          <div className="mb-8">
            {data.services.map((service, i) => {
              return (
                <button
                  key={i}
                  className="bg-pink-600 text-white py-1 px-3 mt-2 mr-2 rounded-md"
                >
                  {service.label}
                </button>
              );
            })}
          </div>
          <div className="py-2 mb-2 border-solid border-pink-500 border-b">
            <p className="text-pink-600 font-bold">Distritos</p>
          </div>
          <div>
            {data.districtValue?.map((district, i) => {
              return (
                <button
                  key={i}
                  className="bg-pink-600 text-white py-1 px-3 mt-2 mr-2 rounded-md"
                >
                  {district.nombre_ubigeo}
                </button>
              );
            })}
          </div>
        </div>
        <div className="md:col-start-5 col-span-6 md:col-span-2 bg-gray-100 p-4">
          <div className="py-2 mb-2 border-solid border-pink-500 border-b">
            <p className="text-pink-600 font-bold">Tarifas</p>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>30 Minutos</div>
            <div>S/. {data.rate_30m || "Consultar"}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>1 Hora</div>
            <div>S/. {data.rate_1h || "Consultar"}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>2 Horas</div>
            <div>S/. {data.rate_2h || "Consultar"}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>3 Horas</div>
            <div>S/. {data.rate_3h || "Consultar"}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Toda la noche</div>
            <div>S/. {data.rate_allNight || "Consultar"}</div>
          </div>
          <div className="flex justify-between py-2 border-solid border-gray-300 border-b">
            <div>Viajes</div>
            <div>S/. {data.rate_travel || "Consultar"}</div>
          </div>
          <div className="flex justify-between py-2 ">
            <div>Método de Pago</div>
            <div className="payment-methods">
              {data.pay_method.map((method, i) => {
                return (
                  <p key={i} className="mb-2">
                    {method.label}.
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container sm:px-0 px-4 pb-20">
        <div className="title">
          <div className="name">
            Fotos (
            {data.images.filter((archivo) => !isVideo.test(archivo)).length})
          </div>
        </div>
        <PhotoProvider>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 800: 2, 1200: 3 }}
          >
            <Masonry gutter="10px">
              {data.images
                .filter((archivo) => !isVideo.test(archivo))
                .map((image, i) => {
                  return (
                    <PhotoView
                      src={
                        image.slice(0, 48) +
                        "e_improve:outdoor/q_90/l_watermark,o_50,w_1.0/f_webp" +
                        image.slice(47)
                      }
                      key={i}
                    >
                      <img
                        src={
                          image.slice(0, 48) +
                          "e_improve:outdoor/q_40/l_watermark,o_50,w_1.0/f_webp" +
                          image.slice(47)
                        }
                        alt="item"
                        className="block w-full cursor-pointer"
                        loading="lazy"
                      ></img>
                    </PhotoView>
                  );
                })}
            </Masonry>
          </ResponsiveMasonry>
        </PhotoProvider>
      </div>
      <div className="container sm:px-0 px-4 pb-20">
        <div className="title">
          <div className="name">
            Videos(
            {data.images.filter((archivo) => isVideo.test(archivo)).length})
          </div>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {data.images
              .filter((archivo) => isVideo.test(archivo))
              .map((video, i) => {
                return (
                  <video controls key={i}>
                    <source
                      src={
                        video.slice(0, 48) +
                        "l_watermark,o_50,w_1.0" +
                        video.slice(47)
                      }
                      type="video/mp4"
                    />
                    <source
                      src={
                        video.slice(0, 48) +
                        "l_watermark,o_50,w_1.0" +
                        video.slice(47)
                      }
                      type="video/ogg"
                    />
                    <source
                      src={
                        video.slice(0, 48) +
                        "l_watermark,o_50,w_1.0" +
                        video.slice(47)
                      }
                      type="video/mov"
                    />
                    Your browser does not support the video tag.
                  </video>
                );
              })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </>
  );
}
