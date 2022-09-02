import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Events from "./Pages/Events";
import Webteam from "./Pages/Webteam";
import Profile from "./Pages/Profile";
import Notfound from "./Pages/404";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Schedule from "./Pages/Schedule";
import Eventdetails from "./Components/Eventdetails";
import Seminars from "./Pages/Seminars";
import Seminardetails from "./Components/Seminardetails";
import { connect } from "react-redux";
import AuthModal from "./Components/Auth/AuthModal";
import { Requests } from "./configuration";
import { login } from "./Store/Actions";
import JoinTeam from "./Components/JoinTeam";
// import Seminardetails from "./Components/Seminardetails";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ResetPassword from "./Components/Auth/ResetPassword";
import Statastics from "./Pages/Statastics";

function App(props) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  function closeAuth() {
    setIsAuthOpen(false);
  }
  function openAuth() {
    setIsAuthOpen(true);
  }
  // function toggleAuth() {
  //   setIsAuthOpen((state) => !state);
  // }

  useEffect(() => {
    const preloader = document.getElementById("loader");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 3000);
    const token = localStorage.getItem("xeniaverse");
    if (token) {
      Requests.getUserByToken(token).then((res) => {
        props.login(res.data);
      });
    }
  }, []);

  return (
    <div>
      <Navbar openAuthModal={openAuth} />
      <AuthModal isOpen={isAuthOpen} close={closeAuth} />
      <div className="p-4">
        <Routes>
          <Route
            path="events/*"
            element={<Events openAuthModal={openAuth} />}
          ></Route>
          <Route path="webteam" element={<Webteam />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="auth" element={<Auth />}></Route>
          <Route path="schedule" element={<Schedule />}></Route>
          <Route path="seminars" element={<Seminars />}></Route>
          <Route path="seminardetails" element={<Seminardetails />}></Route>
          <Route path="eventdetails" element={<Eventdetails />}></Route>
          <Route path="jointeam/:eventId" element={<JoinTeam />}></Route>
          <Route
            path="forgotpassword"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route
            path="resetpassword/:userId/:token"
            element={<ResetPassword />}
          ></Route>
          <Route path="data/*" element={<Statastics />}></Route>
          {/* <Route path="seminardetails" element={<Seminardetails/>}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
