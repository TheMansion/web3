import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

// Components
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileInfo } from "../components/ProfileInfo";
import { ProfilePost } from "../components/ProfilePost";

import "./styles/Profile.scss";

export default function Profile() {
  const [postExists, setPostExists] = useState(false);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const fetchData = async () => {
    // localStorage.setItem('postExists', false);
    const uuid = JSON.parse(localStorage.getItem("user"))._id;
    await fetch(`${process.env.REACT_APP_API}/posts/me/${uuid}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        if (data.length > 0) {
          setPostExists(true);
          localStorage.setItem("postExists", true);
        } else {
          setPostExists(false);
          localStorage.setItem("postExists", false);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Mi perfil | Latin Girls</title>
      </Helmet>
      {localStorage.getItem("token") ? (
        <>
          <ProfileHeader></ProfileHeader>
          <ProfileInfo
            username={user.name}
            isVerified={user.verified}
            postExists={postExists}
            page="perfil"
          ></ProfileInfo>

          <ProfilePost postExists={postExists} badges={data}></ProfilePost>
        </>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </>
  );
}
