import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Store/Actions";

const Navbar = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "Schedule", link: "schedule" },
    { name: "Events", link: "events" },
    { name: "Seminars", link: "seminars" },
    { name: "Profile", link: "profile", auth: true },
  ];

  const navigate = useNavigate();

  function closeMobileNav() {
    setShowMobileNav(false);
  }

  function toggleNav() {
    setShowMobileNav(!showMobileNav);
  }

  function closeMobileNavOnResize() {
    if (window.innerWidth > "1200") {
      setShowMobileNav(false);
    }
  }

  window.onresize = closeMobileNavOnResize;

  return (
    <div className="py-2 flex justify-between items-center px-8 z-10">
      {/* Main Logo */}
      <NavLink to="/">
        <img
          alt=""
          src="https://drive.google.com/uc?export=view&id=1tPizLQkITezHB_Qwc6jJgOYCfpVnDzb8"
          className="h-16 w-16 rounded-xl"
        ></img>
      </NavLink>

      {/* Desktop Navbar */}
      <div className="hidden space-x-8 md:flex">
        {links.map((item) =>
          item.auth ? (
            props.loggedIn && (
              <NavLink
                className={({ isActive }) => {
                  return ` text-gray-200 border-b border-purple-500 tracking-widest p-2 px-8 transition hover:bg-purple-400 font-bold hover:scale-125 transform ${
                    isActive ? "bg-purple-600" : ""
                  }`;
                }}
                to={item.link}
              >
                <div>{item.name}</div>
              </NavLink>
            )
          ) : (
            <NavLink
              className={({ isActive }) => {
                return ` text-gray-200 border-b border-purple-500 tracking-widest p-2 px-8 transition hover:bg-purple-400 font-bold hover:scale-125 transform ${
                  isActive ? "bg-purple-600" : ""
                }`;
              }}
              to={item.link}
            >
              <div>{item.name}</div>
            </NavLink>
          )
        )}
      </div>
      <div className=" flex space-x-2 items-center">
        {props.loggedIn ? (
          <button
            className="p-2 px-8 border-white text-white font-semibold bg-red-500 rounded-full z-0"
            activeClassName="active-nav"
            onClick={() => {
              localStorage.removeItem("xeniaverse");
              props.logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 px-8 border-white text-white font-semibold bg-blue-500 rounded-full z-0"
            activeClassName="active-nav"
            onClick={props.openAuthModal}
          >
            Login
          </button>
        )}
        {/* Mobile Navbar Bars */}
        <div
          onClick={() => setShowMobileNav(true)}
          className={` text-gray-200 text-3xl block md:hidden `}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
      {/* Mobile Navbar */}
      {showMobileNav && (
        <div
          className={
            "md:hidden fixed left-0 top-0 w-full py-20 space-y-8 flex flex-col px-8 bg-black bg-opacity-80 backdrop-blur-sm transition transform z-10"
          }
        >
          {/* Mobile navbar close button */}
          <div className="md:hidden fixed top-4 right-4 text-white text-2xl transition">
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={closeMobileNav}
            ></i>
          </div>
          {links.map((item) => (
            <NavLink
              onClick={closeMobileNav}
              className={({ isActive }) => {
                return ` text-gray-200 border-b border-purple-500 tracking-widest p-2 px-8 transition hover:bg-purple-400 font-bold hover:scale-105 transform ${
                  isActive ? "bg-purple-600" : ""
                }`;
              }}
              to={item.link}
            >
              <div>{item.name}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
