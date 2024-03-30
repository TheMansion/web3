import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./styles/Header.scss";
import logo from "../icons/logo.png";
import pe from "../assets/flags/pe.svg";
import us from "../assets/flags/us.svg";
import pt from "../assets/flags/pt-br.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HideOnClickOutside = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div className="relative w-[48px] md:w-[170px]" ref={wrapperRef}>
      {children}
    </div>
  );
};

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState({ key: pe, label: "Español (PE)" });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleToggleLang = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsLangDropdownOpen(false);
  };

  const handleChangeLang = ({ key, label, code }) => {
    setLanguage({
      key,
      label,
    });
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setIsLangDropdownOpen(false);
  };

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (lang === "en") {
      setLanguage({ key: us, label: "English (US)" });
    }
    if (lang === "es") {
      setLanguage({ key: pe, label: "Español (PE)" });
    }
    if (lang === "pt") {
      setLanguage({ key: pt, label: "Português (BR)" });
    }
  }, []);

  return (
    <header className="header z-50">
      <div className="container-fluid menu-wrapper ">
        <div className="container px-2.5">
          <nav className="menu">
            <ul>
              <li className="brand">
                <a
                  href="/"
                  aria-label="Logo que redirige a la pagina de inicio"
                >
                  <img src={logo} alt="" />
                </a>
              </li>
              <li>
                <Link to="/" className="menu-option">
                  {t("escortsInLima")}
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <HideOnClickOutside
                className="relative w-[48px] md:w-[170px]"
                onOutsideClick={handleOutsideClick}
              >
                <button
                  type="button"
                  onClick={handleToggleLang}
                  aria-label="Cambiar idioma"
                  className="inline-flex gap-2 items-center font-medium justify-center  lg:w-[100%] px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-100"
                >
                  <img src={language.key} alt="" height={20} width={20} />
                  <span className="hidden lg:block">{language.label}</span>
                </button>
                <div
                  className={
                    isLangDropdownOpen
                      ? "absolute transition-all opacity-100 scale-1 origin-top z-50 w-[170px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
                      : "absolute transition-all opacity-0 scale-0 origin-top z-50 w-[170px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
                  }
                  id="language-dropdown-menu"
                >
                  <ul className="py-2 font-medium">
                    {/* Ingles */}
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleChangeLang({
                          key: us,
                          label: "English (US)",
                          code: "en",
                        })
                      }
                    >
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                        <div className="inline-flex gap-2 items-center">
                          <img src={us} alt="" height={20} width={20} />
                          {t("english")} (US)
                        </div>
                      </div>
                    </li>
                    {/* Español */}
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleChangeLang({
                          key: pe,
                          label: "Español (PE)",
                          code: "es",
                        })
                      }
                    >
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="inline-flex gap-2 items-center">
                          <img src={pe} alt="" height={20} width={20} />
                          {t("spanish")} (PE)
                        </div>
                      </div>
                    </li>
                    {/* Portuges */}
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleChangeLang({
                          key: pt,
                          label: "Português (BR)",
                          code: "pt",
                        })
                      }
                    >
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="inline-flex gap-2 items-center">
                          <img src={pt} alt="" height={20} width={20} />
                          {t("portuguese")} (BR)
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </HideOnClickOutside>
              <Link to="/login" id="box" className="button">
                {t("advertiseFree")}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
