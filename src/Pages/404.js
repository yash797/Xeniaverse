import React from "react";
import { connect } from "react-redux";

const Notfound = () => {
  return (
    <div className="notfound flex flex-col-reverse w-4/5 mx-auto mt-4 xl:flex-row xl:justify-between xl:items-center">
      <div className="notfound-left my-4">
        <img src="https://i.ibb.co/ctdQRqW/dashboard.png" alt="not found" />
      </div>
      <div className="notfound-right">
        <h1
          className="text-white text-center text-6xl xl:text-9xl"
          style={{ fontFamily: "Gotham Ultra" }}
        >
          {" "}
          404!
        </h1>
        <p
          className="text-white text-center text-2xl my-4 xl:text-3xl"
          style={{ fontFamily: "Adam Medium" }}
        >
          Seems Like you lost in the METAVERSE
        </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Notfound);
