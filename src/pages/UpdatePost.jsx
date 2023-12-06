import { Navigate } from "react-router-dom";

// Components
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileInfo } from "../components/ProfileInfo";
import { FormAnnouncement } from "../components/FormAnnouncement";

import "./styles/Profile.scss";

export default function UpdatePost() {
  const user = JSON.parse(localStorage.getItem("user"));

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
