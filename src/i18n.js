import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        whereAreYou: "¿Dónde estás?",
        search: "Buscar",
        clear: "Limpiar",
        escortsInLima: "Escorts en Lima",
        english: "Inglés",
        spanish: "Español",
        advertiseFree: "Anuncia gratis",
        seeMore: "Ver mas",
        endOfList: "Fin de la lista",
        homeh1: "Putas y Kinesiólogas en Perú",
        homeh2:
          "kinesiologas Escorts en Lima Perú y extranjeras, videollamadas de kines A1 putas kines",
        welcomeText:
          "Bienvenidos a Latin Girls, guía de escorts en Lima, Perú. Nuestro objetivo como siempre es garantizar un experiencia al usuario de alta calidad donde todo el contenido esté trabajado al detalle y satisfacer así a los paladares más exquisitos.",
      },
    },
    en: {
      translation: {
        whereAreYou: "Where are you?",
        search: "Search",
        clear: "Clear",
        escortsInLima: "Escorts in Lima",
        english: "English",
        spanish: "Spanish",
        advertiseFree: "Advertise for free",
        seeMore: "See more",
        endOfList: "End of list",
        homeh1: "Whores and Kinesiologists in Peru",
        homeh2:
          "kinesiologists Escorts in Lima Peru and foreigners, video calls from kines A1 kines whores",
        welcomeText:
          "Welcome to Latin Girls, escort guide in Lima, Peru. Our goal, as always, is to guarantee a high-quality user experience where all content is worked in detail and thus satisfy the most exquisite palates.",
      },
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
