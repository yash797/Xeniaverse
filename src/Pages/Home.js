import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../Assets/Styles/Home.css";

const Home = () => {
  return (
    <div className="home md:-mt-16">
      <div className="home-main flex items-center md:justify-between w-full flex-col xl:flex-row">
        <div className="home-left p-8 flex flex-col items-center justify-center xl:block xl:p-20">
          <h1 className="text-4xl text-white xl:text-8xl">XENIAVERSE</h1>
          <p className="text-xl text-center text-white my-4 uppercase xl:text-3xl xl:text-left">
            where imagination turns into reality
          </p>
          <h3 className="text-white text-2xl xl:text-4xl">14th to 20th Feb</h3>
          <Link to="/events" style={{ textDecoration: "none" }}>
            <button className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Participate!
            </button>
          </Link>
        </div>
        <div className="home-right">
          <img
            src="https://drive.google.com/uc?export=view&id=1j8GKWFBp478GG1KtL3uhqRricA64fmP-"
            alt="xeniaverse"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
