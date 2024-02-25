import { Helmet } from "react-helmet-async";
import { AuthSidebar } from "../components/AuthSidebar";
import { FormRegister } from "../components/FormRegister";

import "./styles/Register.scss";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register | Latin Girls</title>
      </Helmet>
      <div className="main-container">
        <AuthSidebar></AuthSidebar>
        <FormRegister></FormRegister>
      </div>
    </>
  );
}
