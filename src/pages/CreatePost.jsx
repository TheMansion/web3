import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

// Components
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileInfo } from "../components/ProfileInfo";
import { FormAnnouncement } from "../components/FormAnnouncement";

import "./styles/Profile.scss";

export default function CreatePost() {
  // const [postExists, setPostExists] = useState(false)
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    name: "",
    verified: "",
  });

  useEffect(() => {
    if (localStorage.getItem("postExists") === "true") {
      window.location.href = "/perfil";
      setToken(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("user")));
      // setPostExists(false)
    } else {
      const script = document.createElement("script");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup: remover el script cuando el componente se desmonte
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      {localStorage.getItem("token") ? (
        <>
          <Helmet>
            <title>Crear Anuncio | Latin Girls</title>
          </Helmet>
          <ProfileHeader></ProfileHeader>
          <ProfileInfo
            username={user.name}
            isVerified={user.verified}
            postExists={localStorage.getItem("postExists") === "true"}
          ></ProfileInfo>

          <FormAnnouncement></FormAnnouncement>
        </>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </>
  );
}
