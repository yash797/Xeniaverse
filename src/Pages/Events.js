import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Eventdetails from "../Components/Eventdetails";
import { Routes, Route, NavLink } from "react-router-dom";
import { getAllEvents } from "../configuration/requests";
import Loader from "../Components/Loader";
import PageHeader from "../Components/PageHeader";

function Events(props) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAllEvents();
      if (res.status === 200) {
        setDetails(res.data);
      }
      setLoading(false);
    } catch (error) {}
  };

  const [curEve, setCurEve] = useState(details[0]);

  return (
    <div className="md:p-10 pt-0 overflow-x-hidden">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12"
        style={{ fontFamily: "Quicksand" }}
      >
        EVENTS
      </h1>
      <Routes>
        <Route
          path=":eventid"
          element={
            <Eventdetails
              openAuthModal={props.openAuthModal}
              isDetailOpen={isDetailOpen}
              setIsDetailOpen={setIsDetailOpen}
              curEve={curEve}
            />
          }
        ></Route>
      </Routes>
      {loading ? (
        <div className="flex items-center justify-center h-[70vh] w-full">
          <Loader />
        </div>
      ) : (
        <div className="xl:w-11/12 xl:m-auto gap-8 xl:flex-nowrap xl:justify-none grid md:grid-cols-4">
          {details.map((detail, i) => (
            <div
              key={`event${i}`}
              className=" bg-gray-100/10 flex flex-col items-center hover:scale-105 transition-all w-full
             my-4 p-4 
              md:p-4
             xl:mx-0 xl:p-4 "
            >
              <h1 className="text-white text-3xl text-center uppercase">
                {detail.name}
              </h1>
              <div className="h-[200px] w-full">
                <img
                  src={detail.logo}
                  alt="event"
                  className="max-h-full max-w-full m-auto"
                />
              </div>
              <p className="text-white text-justify">{detail.description}</p>
              <NavLink to={`/events/${detail._id}`}>
                <button
                  className="text-white rounded-0
                py-2 px-4 mt-4
                md:py-2 md:px-4 md:mt-4
                xl:py-2 xl:px-4 xl:mt-4 bg-blue-400 hover:bg-blue-600 transition"
                  onClick={() => {
                    setIsDetailOpen(true);
                    setCurEve(detail._id);
                    window.scrollTo(0, 0);
                  }}
                >
                  Read More!
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
