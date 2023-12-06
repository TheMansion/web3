import React, { useEffect, useState } from "react";
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
    }
  }, []);

  return (
    <>
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
