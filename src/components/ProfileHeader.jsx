import { Link } from "react-router-dom";

import logo from "../icons/logo.png";
import avatar from "../icons/avatar.jpg";

import "./styles/ProfileInfo.scss";

export const ProfileHeader = () => {
  const handleClick = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("postExists");
    window.location.href = "/login";
  };

  return (
    <>
      <header className="nav-wrapper">
        <div className="links-container">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="actions-container">
          <img className="profile-avatar" src={avatar} alt="" />
          <button className="logout-btn" onClick={handleClick}>
            Cerrar sesión
          </button>
        </div>
      </header>
    </>
  );
};
