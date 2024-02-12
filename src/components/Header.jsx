import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./styles/Header.scss";
import logo from "../icons/logo.png";
import pe from "../assets/flags/pe.svg";
import us from "../assets/flags/us.svg";
import { useState } from "react";

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
    <div className="relative w-[48px] md:w-[150px]" ref={wrapperRef}>
      {children}
    </div>
  );
};

export const Header = () => {
  const [language, setLanguage] = useState({ key: pe, label: "Español (PE)" });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleToggleLang = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsLangDropdownOpen(false);
  };

  const handleChangeLang = ({ key, label }) => {
    setLanguage({
      key,
      label,
    });
    setIsLangDropdownOpen(false);
  };

  return (
    <header className="header z-50">
      <div className="container-fluid bg-black menu-wrapper">
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
                  Escorts en Lima
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <HideOnClickOutside
                className="relative w-[48px] md:w-[150px]"
                onOutsideClick={handleOutsideClick}
              >
                <button
                  type="button"
                  onClick={handleToggleLang}
                  className="inline-flex gap-2 items-center font-medium justify-center  lg:w-[100%] px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img src={language.key} alt="" height={20} width={20} />
                  <span className="hidden lg:block">{language.label}</span>
                </button>
                <div
                  className={
                    isLangDropdownOpen
                      ? "absolute transition-all opacity-100 scale-1 origin-top z-50 w-[150px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                      : "absolute transition-all opacity-0 scale-0 origin-top z-50 w-[150px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                  }
                  id="language-dropdown-menu"
                >
                  <ul className="py-2 font-medium" role="none">
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleChangeLang({ key: us, label: "English (US)" })
                      }
                    >
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex gap-2 items-center">
                          <img src={us} alt="" height={20} width={20} />
                          Inglés (US)
                        </div>
                      </div>
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() =>
                        handleChangeLang({ key: pe, label: "Español (PE)" })
                      }
                    >
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex gap-2 items-center">
                          <img src={pe} alt="" height={20} width={20} />
                          Español (PE)
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </HideOnClickOutside>
              <Link to="/login" id="box" className="button gradient-border">
                Anuncia gratis
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
