import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

// Components
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileInfo } from "../components/ProfileInfo";
import { FormAnnouncement } from "../components/FormAnnouncement";

import "./styles/Profile.scss";

export default function UpdatePost() {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remover el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Actualizar anuncio | Latin Girls</title>
      </Helmet>
      {localStorage.getItem("token") ? (
        <>
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
