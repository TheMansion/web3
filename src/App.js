import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";

import Home from "./pages/Home";
const Post = lazy(() => import("./pages/Post"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const UpdatePost = lazy(() => import("./pages/UpdatePost"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="lds-wrapper">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }
      >
        <HelmetProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/post/:id" element={<Post />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/perfil" element={<Profile />}></Route>
            <Route exact path="/perfil/post" element={<CreatePost />}></Route>
            <Route
              exact
              path="/perfil/post/editar"
              element={<UpdatePost />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </HelmetProvider>
      </Suspense>
    </Router>
  );
}

export default App;
