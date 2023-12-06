import React from "react";
import { Link } from "react-router-dom";

import { Badge } from "./icons";

import avatar from "../icons/avatar.jpg";

import "./styles/ProfileInfo.scss";

export const ProfileInfo = ({ page, postExists, isVerified, username }) => {
  const handleDelete = async () => {
    const uuid = JSON.parse(localStorage.getItem("user"))._id;
    await fetch(`${process.env.REACT_APP_API}/posts/${uuid}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.status === 204) {
        window.location.href = "/perfil";
      }
    });
  };

  const renderButton = () => {
    if (page === "perfil") {
      if (postExists) {
        return (
          <>
            <Link
              to="/perfil/post/editar"
              type="button"
              className="form-btn mr-3"
            >
              Editar anuncio
            </Link>
            <button className="form-btn" onClick={() => handleDelete()}>
              Eliminar anuncio
            </button>
          </>
        );
      }
      return (
        <Link to="/perfil/post" type="button" className="form-btn mr-3">
          Crear anuncio
        </Link>
      );
    } else {
      return (
        <Link to="/perfil" type="button" className="form-btn mr-3">
          Volver
        </Link>
      );
    }
  };

  return (
    <>
      <section className="profile-info">
        <div className="info-avatar">
          <img className="profile-avatar" src={avatar} alt="" />
          {isVerified && (
            <div className="badge">
              <Badge></Badge>
            </div>
          )}
        </div>
        <div className="info-content">
          <h1 className="profile-name">{username}</h1>
          <p className="profile-locality">Lima, Perú</p>
          <p className="profile-specialization">Escort</p>
          <div className="actions">{renderButton()}</div>
        </div>
      </section>
    </>
  );
};
