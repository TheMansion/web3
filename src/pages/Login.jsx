import { Helmet } from "react-helmet-async";
import "./styles/Register.scss";

import { AuthSidebar } from "../components/AuthSidebar";
import { FormLogin } from "../components/FormLogin";

import "./styles/Register.scss";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login | Latin Girls</title>
      </Helmet>
      <div className="main-container">
        <AuthSidebar />
        <FormLogin />
      </div>
    </>
  );
}
