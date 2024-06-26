import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import confetti from "canvas-confetti";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import "./styles/FormAnnouncement.scss";
import "./styles/FormButton.scss";
import "./styles/CustomDatePicker.scss";

import Departamentos from "../../src/assets/departamentos.json";
import Provincias from "../../src/assets/provincias.json";
import Distritos from "../../src/assets/distritos.json";

// Select Options
const degreeOptions = [
  { value: "1", label: "Primarios" },
  { value: "2", label: "Secundarios" },
  { value: "3", label: "Universitarios" },
];

const langOptions = [
  { value: "al", label: "Alemán" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Frances" },
  { value: "en", label: "Inglés" },
  { value: "it", label: "Italiano" },
  { value: "pt", label: "Portugués" },
  { value: "ru", label: "Ruso" },
];

const professionOptions = [
  { value: "1", label: "Actriz Famosa" },
  { value: "2", label: "Actriz Porno" },
  { value: "3", label: "Azafata" },
  { value: "4", label: "Enfermera" },
  { value: "5", label: "Gogo" },
  { value: "6", label: "Masajista Erotica" },
  { value: "7", label: "Modelo" },
  { value: "8", label: "Secretaria" },
  { value: "9", label: "Streaper" },
];

const hairOptions = [
  { value: "1", label: "Castaño" },
  { value: "2", label: "Negro" },
  { value: "3", label: "Pelirrojo" },
  { value: "4", label: "Rubio" },
];

const eyeOptions = [
  { value: "1", label: "Azules" },
  { value: "5", label: "Castaños" },
  { value: "6", label: "Grises" },
  { value: "2", label: "Marrones" },
  { value: "3", label: "Negros" },
  { value: "7", label: "Pardos" },
  { value: "4", label: "Verdes" },
];

const countrieOptions = [
  { value: "AR", label: "Argentina" },
  { value: "BO", label: "Boliviana" },
  { value: "BR", label: "Brasileña" },
  { value: "CL", label: "Chilena" },
  { value: "CO", label: "Colombiana" },
  { value: "CR", label: "Costarricense" },
  { value: "CU", label: "Cubana" },
  { value: "DO", label: "Dominicana" },
  { value: "EC", label: "Ecuatoriana" },
  { value: "MX", label: "Méxicana" },
  { value: "PA", label: "Panameña" },
  { value: "PY", label: "Paraguaya" },
  { value: "PE", label: "Peruana" },
  { value: "PR", label: "Puertorriqueña" },
  { value: "UY", label: "Uruguaya" },
  { value: "VE", label: "Venezolana" },
];

const servicesOptions = [
  { value: "1", label: "69" },
  { value: "2", label: "Atención a parejas" },
  { value: "3", label: "Besos con lengua" },
  { value: "4", label: "Beso negro" },
  { value: "5", label: "Beso blanco" },
  { value: "6", label: "Eyaculación corporal" },
  { value: "7", label: "Eyaculación facial" },
  { value: "8", label: "Fetichismo" },
  { value: "9", label: "Fiestas" },
  { value: "10", label: "Garganta profunda" },
  { value: "11", label: "Lésbico" },
  { value: "12", label: "Lluvia dorada" },
  { value: "13", label: "Masajes eróticos" },
  { value: "14", label: "Oral con condón" },
  { value: "15", label: "Oral natural" },
  { value: "16", label: "Orgias" },
  { value: "17", label: "Rusa" },
  { value: "18", label: "Sado" },
  { value: "19", label: "Sado light" },
  { value: "20", label: "Sexo anal" },
  { value: "21", label: "Squirting" },
  { value: "22", label: "Trato de pareja" },
  { value: "23", label: "Trío" },
  { value: "24", label: "Video llamadas" },
  { value: "25", label: "Pack de fotos" },
];

const payOptions = [
  { value: "1", label: "Efectivo" },
  { value: "2", label: "Transferencia" },
  { value: "3", label: "Depósito" },
  { value: "4", label: "Visa" },
  { value: "5", label: "Yape" },
  { value: "6", label: "Plin" },
  { value: "7", label: "Paypal" },
];

const placeOptions = [
  { value: "1", label: "Hotel" },
  { value: "2", label: "Domicilio" },
  { value: "3", label: "Depa propio" },
  { value: "4", label: "Eventos y fiestas" },
];

// Custom Lang for Datepicker
const myCustomLocale = {
  // months list by order
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],

  // week days by order
  weekDays: [
    {
      name: "Domingo", // used for accessibility
      short: "D", // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: "Lunes",
      short: "L",
    },
    {
      name: "Martes",
      short: "M",
    },
    {
      name: "Miercoles",
      short: "M",
    },
    {
      name: "Jueves",
      short: "J",
    },
    {
      name: "Viernes",
      short: "V",
    },
    {
      name: "Sábado",
      short: "S",
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit) {
    return digit;
  },

  // texts in the date picker
  nextMonth: "Next Month",
  previousMonth: "Previous Month",
  openMonthSelector: "Open Month Selector",
  openYearSelector: "Open Year Selector",
  closeMonthSelector: "Close Month Selector",
  closeYearSelector: "Close Year Selector",
  defaultPlaceholder: "Select...",

  // for input range value
  from: "from",
  to: "to",

  // used for input value when multi dates are selected
  digitSeparator: ",",

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};

const d = new Date();

const maximumDate = {
  year: d.getFullYear() - 18,
  month: d.getMonth() + 1,
  day: d.getDate(),
};

const minimumDate = {
  year: d.getFullYear() - 40,
  month: d.getMonth() + 1,
  day: d.getDate(),
};

export const FormAnnouncement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [anounceHasError, setAnounceHasError] = useState(false);

  const [_id, set_Id] = useState("");
  const [uuid, setUuid] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState(false);
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(maximumDate);
  const [nationality, setNationality] = useState("");
  // const [degree, setDegree] = useState("");
  const [languages, setLanguages] = useState([]);
  const [profession, setProfession] = useState([]);
  const [presentation, setPresentation] = useState("");
  const [hair, setHair] = useState("");
  const [eye, setEye] = useState("");
  const [dimensions, setDimensions] = useState({ 1: "90", 2: "60", 3: "90" });
  const [height, setHeight] = useState("165");
  const [weight, setWeight] = useState("55");
  const [rate_30m, setRate_30m] = useState("");
  const [rate_1h, setRate_1h] = useState("");
  const [rate_2h, setRate_2h] = useState("");
  const [rate_3h, setRate_3h] = useState("");
  const [rate_allNight, setRate_allNight] = useState("");
  const [rate_travel, setRate_travel] = useState("");
  const [pay_method, setPay_method] = useState([]);
  const [services, setServices] = useState([]);
  const [place, setPlace] = useState([]);
  const [images, setImages] = useState([]);
  const [departmentValue, setDepartmentValue] = useState([]);
  const [provinceValue, setProvinceValue] = useState(null);
  const [districtValue, setDistrictValue] = useState(null);

  // Datos de Ubigeo
  const [provincias, setProvincias] = useState([]);
  const [distritos, setDistritos] = useState([]);

  function onchangeDepartamento(value) {
    console.log(departmentValue);
    setDepartmentValue(value);
    setProvincias(value ? Provincias[value.id_ubigeo] : []);
    setProvinceValue(null);
    setDistrictValue(null);
    setDistritos([]);
  }

  function onchangeProvincia(value) {
    setDistritos(value ? Distritos[value.id_ubigeo] : []);
    setProvinceValue(value);
    setDistrictValue(null);
  }

  function onchangeDistrito(value) {
    setDistrictValue(value);
  }

  const fetchData = async () => {
    // localStorage.setItem('postExists', false);
    const uuid = JSON.parse(localStorage.getItem("user"))._id;
    await fetch(`${process.env.REACT_APP_API}/posts/me/${uuid}`)
      .then((response) => response.json())
      .then((data) => {
        set_Id(data[0]._id);
        setUuid(data[0].uuid);
        setEmail(data[0].email);
        setName(data[0].name);
        setVerified(data[0].verified);
        setStatus(data[0].status);
        setPhone(data[0].phone + "");
        setAge(data[0].age);
        setNationality(data[0].nationality);
        // setDegree(data[0].degree);
        setLanguages(data[0].languages);
        setProfession(data[0].profession);
        setPresentation(data[0].presentation);
        setHair(data[0].hair);
        setEye(data[0].eye);
        setDimensions(data[0].dimensions);
        setHeight(data[0].height);
        setWeight(data[0].weight);
        setRate_30m(data[0].rate_30m);
        setRate_1h(data[0].rate_1h);
        setRate_2h(data[0].rate_2h);
        setRate_3h(data[0].rate_3h);
        setRate_allNight(data[0].rate_allNight);
        setRate_travel(data[0].rate_travel);
        setPay_method(data[0].pay_method);
        setServices(data[0].services);
        setPlace(data[0].place);
        setImages(data[0].images);
        setDepartmentValue(data[0].departmentValue);
        setProvinceValue(data[0].provinceValue);
        setDistrictValue(data[0].districtValue);
        setAlwaysOn(data[0].alwaysOn);
        setDays(data[0].days);
        setIniTime(data[0].iniTime);
        setEndTime(data[0].endTime);
      });
  };

  const handleChange = (e) => {
    setAnounceHasError(false);
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "presentation") {
      setPresentation(e.target.value);
    }
    if (e.target.name === "height") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setHeight(e.target.value);
      }
    }
    if (e.target.name === "weight") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setWeight(e.target.value);
      }
    }
    if (e.target.name === "rate_30m") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setRate_30m(e.target.value);
      }
    }
    if (e.target.name === "rate_1h") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setRate_1h(e.target.value);
      }
    }
    if (e.target.name === "rate_2h") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setRate_2h(e.target.value);
      }
    }
    if (e.target.name === "rate_3h") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setRate_3h(e.target.value);
      }
    }
    if (e.target.name === "rate_allNight") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setRate_allNight(e.target.value);
      }
    }
    if (e.target.name === "rate_travel") {
      if (/^[0-9]*$/.test(e.target.value)) {
        setRate_travel(e.target.value);
      }
    }
  };

  const handleChangeAge = (value) => {
    setAge(value);
  };

  const handleChangeNationality = (value) => {
    setNationality(value);
  };

  // const handleChangeDegree = (value) => {
  //   setDegree(value);
  // };

  const handleChangeLang = (value) => {
    setLanguages(value);
  };

  const handleChangeProfession = (value) => {
    setProfession(value);
  };

  const handleChangeHair = (value) => {
    setHair(value);
  };

  const handleChangeEye = (value) => {
    setEye(value);
  };

  const handleChangeDimensions = (e) => {
    if (/^[0-9]*$/.test(e.target.value)) {
      setDimensions({ ...dimensions, [e.target.name]: e.target.value });
    }
  };

  const handleChangePay = (value) => {
    setPay_method(value);
  };

  const handleChangeServices = (value) => {
    setServices(value);
  };

  const handleChangePlace = (value) => {
    setPlace(value);
  };

  const showWidget = () => {
    // window.cloudinary = cloudinary;
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
        multiple: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prevImages) => [...prevImages, result.info.secure_url]);
        }
      }
    );
    widget.open();
  };

  const handleDeleteImage = (image) => {
    let _images = images.filter((el) => el !== image);
    setImages(_images);
  };

  const validateAnounce = () => {
    const phoneRegex =
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}$/;

    function validatePhone(phone) {
      let proneIsValid = phoneRegex.test(phone);
      console.log(proneIsValid);
      if (!proneIsValid) {
        return false;
      } else {
        return true;
      }
    }

    function validateImages(images) {
      let imagesIsValid = images.length > 0;
      if (!imagesIsValid) {
        return false;
      } else {
        return true;
      }
    }

    let existsImages = validateImages(images);
    let existsPhone = validatePhone(phone);

    if (existsImages && existsPhone) {
      return true;
    } else {
      setAnounceHasError(true);
      return false;
    }
  };

  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validateAnounce()) {
      if (localStorage.getItem("postExists") === "true") {
        await fetch(`${process.env.REACT_APP_API}/posts/${_id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            uuid: uuid,
            email: email,
            name: name,
            verified: verified,
            status: status,
            phone: phone,
            age: age,
            nationality: nationality,
            // degree: degree,
            languages: languages,
            profession: profession,
            presentation: presentation,
            hair: hair,
            eye: eye,
            dimensions: dimensions,
            height: height,
            weight: weight,
            rate_30m: rate_30m,
            rate_1h: rate_1h,
            rate_2h: rate_2h,
            rate_3h: rate_3h,
            rate_allNight: rate_allNight,
            rate_travel: rate_travel,
            pay_method: pay_method,
            services: services,
            place: place,
            images: images,
            departmentValue: departmentValue,
            provinceValue: provinceValue,
            districtValue: districtValue,
            alwaysOn: alwaysOn,
            days: days,
            iniTime: iniTime,
            endTime: endTime,
          }),
        })
          .then((response) => response.status)
          .then((status) => {
            if (status === 204) {
              fire(0.25, {
                spread: 26,
                startVelocity: 55,
              });
              fire(0.2, {
                spread: 60,
              });
              fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
              });
              fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
              });
              fire(0.1, {
                spread: 120,
                startVelocity: 45,
              });
              setIsLoading(false);
              window.location.href = "/perfil";
              return true;
            } else if (status === 401) {
              return;
            }
          })
          .catch((error) => {
            console.log(error);
            console.log("no se pudo actualizar el recurso :(");
            setIsLoading(false);
          });
      } else {
        await fetch(`${process.env.REACT_APP_API}/posts`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            uuid: uuid,
            email: email,
            name: name,
            verified: verified,
            phone: phone,
            age: age,
            nationality: nationality,
            // degree: degree,
            languages: languages,
            profession: profession,
            presentation: presentation,
            hair: hair,
            eye: eye,
            dimensions: dimensions,
            height: height,
            weight: weight,
            rate_30m: rate_30m,
            rate_1h: rate_1h,
            rate_2h: rate_2h,
            rate_3h: rate_3h,
            rate_allNight: rate_allNight,
            rate_travel: rate_travel,
            pay_method: pay_method,
            services: services,
            place: place,
            images: images,
            departmentValue: departmentValue,
            provinceValue: provinceValue,
            districtValue: districtValue,
            alwaysOn: alwaysOn,
            days: days,
            iniTime: iniTime,
            endTime: endTime,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 201) {
              setIsLoading(false);
              window.location.href = "/perfil";
              return true;
            } else if (data.status === 401) {
              setIsLoading(false);
              console.log(data.message);
              return;
            }
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
            console.log("no se pudo crear el recurso :(");
          });
      }
    } else {
      setAnounceHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("postExists") === "true") {
      fetchData();
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      setUuid(user._id);
      setEmail(user.email);
      setName(user.name);
      setVerified(user.verified);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isVideo = /\.(mp4|mov|ogg)$/;

  // Disponibilidad
  const [alwaysOn, setAlwaysOn] = useState(true);

  const handleChangeAlways = (e) => {
    if (e.target.value === "true") {
      setAlwaysOn(true);
    } else {
      setAlwaysOn(false);
    }
  };

  const dayOptions = [
    { value: 1, label: "Lunes" },
    { value: 2, label: "Martes" },
    { value: 3, label: "Miercoles" },
    { value: 4, label: "Jueves" },
    { value: 5, label: "Viernes" },
    { value: 6, label: "Sabado" },
    { value: 0, label: "Domingo" },
  ];

  const [days, setDays] = useState([
    { value: 1, label: "Lunes" },
    { value: 2, label: "Martes" },
    { value: 3, label: "Miercoles" },
    { value: 4, label: "Jueves" },
    { value: 5, label: "Viernes" },
    { value: 6, label: "Sabado" },
    { value: 0, label: "Domingo" },
  ]);

  const handleChangeDays = (value) => {
    setDays(value);
  };

  const iniTimes = [
    // { value: 0, label: "00:00 AM" },
    // { value: 1, label: "01:00 AM" },
    // { value: 2, label: "02:00 AM" },
    // { value: 3, label: "03:00 AM" },
    // { value: 4, label: "04:00 AM" },
    // { value: 5, label: "05:00 AM" },
    // { value: 6, label: "06:00 AM" },
    // { value: 7, label: "07:00 AM" },
    { value: 8, label: "08:00 AM" },
    { value: 9, label: "09:00 AM" },
    { value: 10, label: "10:00 AM" },
    { value: 11, label: "11:00 AM" },
    { value: 12, label: "12:00 PM" },
    { value: 13, label: "01:00 PM" },
    { value: 14, label: "02:00 PM" },
    // { value: 15, label: "03:00 PM" },
    // { value: 16, label: "04:00 PM" },
    // { value: 17, label: "05:00 PM" },
    // { value: 18, label: "06:00 PM" },
    // { value: 19, label: "07:00 PM" },
    // { value: 20, label: "08:00 PM" },
    // { value: 21, label: "09:00 PM" },
    // { value: 22, label: "10:00 PM" },
    // { value: 23, label: "11:00 PM" },
  ];

  const endTimes = [
    { value: 0, label: "00:00 AM" },
    { value: 1, label: "01:00 AM" },
    { value: 2, label: "02:00 AM" },
    // { value: 3, label: "03:00 AM" },
    // { value: 4, label: "04:00 AM" },
    // { value: 5, label: "05:00 AM" },
    // { value: 6, label: "06:00 AM" },
    // { value: 7, label: "07:00 AM" },
    // { value: 8, label: "08:00 AM" },
    // { value: 9, label: "09:00 AM" },
    // { value: 10, label: "10:00 AM" },
    // { value: 11, label: "11:00 AM" },
    // { value: 12, label: "12:00 PM" },
    // { value: 13, label: "01:00 PM" },
    // { value: 14, label: "O2:00 PM" },
    // { value: 15, label: "03:00 PM" },
    // { value: 16, label: "04:00 PM" },
    // { value: 17, label: "05:00 PM" },
    // { value: 18, label: "06:00 PM" },
    // { value: 19, label: "07:00 PM" },
    { value: 20, label: "08:00 PM" },
    { value: 21, label: "09:00 PM" },
    { value: 22, label: "10:00 PM" },
    { value: 23, label: "11:00 PM" },
  ];

  const [iniTime, setIniTime] = useState({ value: 8, label: "08:00 AM" });
  const [endTime, setEndTime] = useState({ value: 22, label: "10:00 PM" });

  const handleChangeIniTime = (value) => {
    setIniTime(value);
  };

  const handleChangeEndTime = (value) => {
    setEndTime(value);
  };

  return (
    <>
      <section className="announcement">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Imágenes y Videos *</label>
            <div className="thumbnails">
              {images
                ?.filter((archivo) => !isVideo.test(archivo))
                .map((image, i) => {
                  return (
                    <div className="thumbnail-wrapper" key={i}>
                      <img src={image} alt="item" className="thumbnail"></img>
                      <div
                        className="delete"
                        onClick={() => handleDeleteImage(image)}
                      >
                        <svg
                          width="50"
                          height="50"
                          fill="#000"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />{" "}
                        </svg>
                      </div>
                    </div>
                  );
                })}
              {images
                ?.filter((archivo) => isVideo.test(archivo))
                .map((image, i) => {
                  return (
                    <div className="thumbnail-wrapper">
                      <video
                        src={image}
                        alt="item"
                        className="thumbnail"
                        key={i}
                      ></video>
                      <div
                        className="delete"
                        onClick={() => handleDeleteImage(image)}
                      >
                        <svg
                          width="50"
                          height="50"
                          fill="#000"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />{" "}
                        </svg>
                      </div>
                    </div>
                  );
                })}
              <div className="thumbnail" onClick={showWidget}>
                <p>Agregar</p>
              </div>
            </div>
          </fieldset>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <fieldset>
              <label htmlFor="phone">Número de celular *</label>
              {/* <input
                onChange={handleChange}
                className="input"
                type="number"
                id="phone"
                name="phone"
                value={phone}
              /> */}
              <PhoneInput
                defaultCountry="pe"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="phone-input-wrapper"
                inputClassName="phone-input"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="age">Fecha de Nacimiento *</label>
              <DatePicker
                onChange={handleChangeAge}
                wrapperClassName="d-block"
                colorPrimary="#ff0080"
                locale={myCustomLocale}
                maximumDate={maximumDate}
                minimumDate={minimumDate}
                inputClassName="input"
                inputPlaceholder="Fecha de nacimiento"
                id="age"
                name="age"
                value={age}
                shouldHighlightWeekends
              />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <fieldset>
              <label htmlFor="departamentos">Departamento *</label>
              <Select
                options={Departamentos}
                id="departamentos"
                name="departamentos"
                value={departmentValue}
                getOptionValue={(option) => `${option["id_ubigeo"]}`}
                getOptionLabel={(option) => `${option.nombre_ubigeo}`}
                onChange={onchangeDepartamento}
                className="react-select-container"
                classNamePrefix="react-select"
              ></Select>
            </fieldset>
            <fieldset>
              <label htmlFor="provincias">Provincia *</label>
              <Select
                options={provincias}
                id="provincias"
                name="provincias"
                value={provinceValue}
                getOptionValue={(option) => `${option["id_ubigeo"]}`}
                getOptionLabel={(option) => `${option.nombre_ubigeo}`}
                onChange={onchangeProvincia}
                className="react-select-container"
                classNamePrefix="react-select"
              ></Select>
            </fieldset>
            <fieldset>
              <label htmlFor="distritos">Distrito *</label>
              <Select
                options={distritos}
                id="distritos"
                name="distritos"
                value={districtValue}
                isMulti
                getOptionValue={(option) => `${option["id_ubigeo"]}`}
                getOptionLabel={(option) => `${option.nombre_ubigeo}`}
                onChange={onchangeDistrito}
                className="react-select-container"
                classNamePrefix="react-select"
              ></Select>
            </fieldset>
          </div>

          <fieldset>
            <label htmlFor="nationality">País de origen *</label>
            <Select
              onChange={handleChangeNationality}
              id="nationality"
              name="nationality"
              options={countrieOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={nationality}
            ></Select>
          </fieldset>
          {/* <fieldset>
            <label htmlFor="degree">Estudios</label>
            <Select
              onChange={handleChangeDegree}
              id="degree"
              name="degree"
              options={degreeOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={degree}
            ></Select>
          </fieldset> */}
          <fieldset>
            <label htmlFor="languages">Idiomas *</label>
            <Select
              onChange={handleChangeLang}
              id="languages"
              name="languages"
              isMulti
              options={langOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={languages}
            ></Select>
          </fieldset>
          <fieldset>
            <label htmlFor="profession">Profesión *</label>
            <Select
              onChange={handleChangeProfession}
              id="profession"
              name="profession"
              options={professionOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={profession}
            ></Select>
          </fieldset>
          <fieldset>
            <label htmlFor="presentation">Presentación *</label>
            <textarea
              onChange={handleChange}
              className="text-area"
              id="presentation"
              name="presentation"
              placeholder="Agrega una descripción"
              value={presentation}
            ></textarea>
          </fieldset>
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label htmlFor="hair">Color de pelo *</label>
              <Select
                onChange={handleChangeHair}
                id="hair"
                name="hair"
                options={hairOptions}
                className="react-select-container"
                classNamePrefix="react-select"
                value={hair}
                placeholder="Elegir color"
              ></Select>
            </fieldset>
            <fieldset>
              <label htmlFor="eye">Color de ojos *</label>
              <Select
                onChange={handleChangeEye}
                id="eye"
                name="eye"
                options={eyeOptions}
                className="react-select-container"
                classNamePrefix="react-select"
                value={eye}
                placeholder="Elegir color"
              ></Select>
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor="dimensions">Medidas (centimetros)*</label>
            <div className="grid grid-cols-3 gap-4">
              <input
                onChange={handleChangeDimensions}
                className="input"
                type="text"
                id="1"
                name="1"
                placeholder="90"
                value={dimensions?.[1]}
              />
              <input
                onChange={handleChangeDimensions}
                className="input"
                type="text"
                id="2"
                name="2"
                placeholder="60"
                value={dimensions?.[2]}
              />
              <input
                onChange={handleChangeDimensions}
                className="input"
                type="text"
                id="3"
                name="3"
                placeholder="90"
                value={dimensions?.[3]}
              />
            </div>
          </fieldset>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <fieldset>
              <label htmlFor="height">Estatura (Centimetros)*</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="height"
                name="height"
                placeholder="160"
                value={height}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="weight">Peso (Kilogramos)*</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="weight"
                name="weight"
                placeholder="60"
                value={weight}
              />
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor="services">Servicios</label>
            <Select
              onChange={handleChangeServices}
              id="services"
              name="services"
              isMulti
              options={servicesOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={services}
            ></Select>
          </fieldset>
          <fieldset>
            <label htmlFor="place">Atención en *</label>
            <Select
              onChange={handleChangePlace}
              id="place"
              name="place"
              isMulti
              options={placeOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={place}
            ></Select>
          </fieldset>
          <fieldset>
            <label htmlFor="pay_method">Método de pago *</label>
            <Select
              onChange={handleChangePay}
              id="pay_method"
              name="pay_method"
              isMulti
              options={payOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              value={pay_method}
            ></Select>
          </fieldset>
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label htmlFor="rate_30m">1/2 Hora</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="rate_30m"
                name="rate_30m"
                placeholder="100"
                value={rate_30m || ""}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="rate_1h">1 Hora *</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="rate_1h"
                name="rate_1h"
                placeholder="150"
                value={rate_1h || ""}
              />
            </fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label htmlFor="rate_2h">2 Horas</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="rate_2h"
                name="rate_2h"
                placeholder="200"
                value={rate_2h || ""}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="rate_3h">3 Horas</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="rate_3h"
                name="rate_3h"
                placeholder="250"
                value={rate_3h || ""}
              />
            </fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label htmlFor="rate_allNight">Toda la Noche</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="rate_allNight"
                name="rate_allNight"
                placeholder="1000"
                value={rate_allNight || ""}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="rate_travel">Viajes</label>
              <input
                onChange={handleChange}
                className="input"
                type="text"
                id="rate_travel"
                name="rate_travel"
                placeholder="5000"
                value={rate_travel || ""}
              />
            </fieldset>
          </div>
          <div className="p-5 mt-4 rounded-md bg-blue-50">
            <fieldset>
              <label htmlFor="">Disponibilidad</label>
              <div className="flex mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="radio-1"
                    aria-describedby="helper-radio-text"
                    type="radio"
                    value="true"
                    checked={alwaysOn?.toString() === "true"}
                    onChange={handleChangeAlways}
                    name="alwaysOn"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="radio-1"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Siempre disponible
                  </label>
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Lunes a Domingo las 24 Horas
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="radio-2"
                    aria-describedby="helper-radio-text"
                    type="radio"
                    value="false"
                    checked={alwaysOn?.toString() === "false"}
                    onChange={handleChangeAlways}
                    name="alwaysOn"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="radio-2"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Personalizado
                  </label>
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Elige días especificos con rangos de horas
                  </p>
                </div>
              </div>
            </fieldset>
            <fieldset>
              {alwaysOn ? null : (
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <p className="mb-2 font-normal text-gray-900">
                      Dias de la semana
                    </p>
                    <Select
                      onChange={handleChangeDays}
                      id="days"
                      name="days"
                      isMulti
                      options={dayOptions}
                      isSearchable={false}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      value={days}
                    ></Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="mb-2 font-normal text-gray-900">
                        Desde las *
                      </p>
                      <Select
                        onChange={handleChangeIniTime}
                        id="iniTime"
                        name="iniTime"
                        options={iniTimes}
                        isSearchable={false}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        value={iniTime}
                      ></Select>
                    </div>
                    <div>
                      <p className="mb-2 font-normal text-gray-900">
                        Hasta las *
                      </p>
                      <Select
                        onChange={handleChangeEndTime}
                        id="endTime"
                        name="endTime"
                        options={endTimes}
                        isSearchable={false}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        value={endTime}
                      ></Select>
                    </div>
                  </div>
                </div>
              )}
            </fieldset>
          </div>
          <fieldset>
            {anounceHasError && (
              <label className="text-red-600">
                Verifica tu numero de celular, fotos y que los campos con *
                estén completos
              </label>
            )}
          </fieldset>
          <button className="btn" disabled={isLoading}>
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
            {localStorage.getItem("postExists") === "true"
              ? "Actualizar Anuncio"
              : "Anunciar"}
          </button>
        </form>
      </section>
    </>
  );
};
