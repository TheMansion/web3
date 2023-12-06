import { AuthSidebar } from "../components/AuthSidebar";
import { FormRegister } from "../components/FormRegister";

import "./styles/Register.scss";

export default function Register() {
  return (
    <>
      <div className="main-container">
        <AuthSidebar></AuthSidebar>
        <FormRegister></FormRegister>
      </div>
    </>
  );
}
