import "./styles/Register.scss";

import { AuthSidebar } from "../components/AuthSidebar";
import { FormLogin } from "../components/FormLogin";

import "./styles/Register.scss";

export default function Login() {
  return (
    <>
      <div className="main-container">
        <AuthSidebar />
        <FormLogin />
      </div>
    </>
  );
}
