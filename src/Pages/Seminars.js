import React from "react";
import { connect } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pratik from "../Assets/DSC_0692.jpg";
import samuel from "../Assets/samuel.jpeg";

// Import Swiper styles

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, EffectFade } from "swiper";
import { NavLink } from "react-router-dom";
import { getSeminarDetails } from "../configuration/requests";
import PageHeader from "../Components/PageHeader";
import Loader from "../Components/Loader";
SwiperCore.use([Pagination, Navigation]);

const Seminars = (props) => {
  // const [details, setDetails] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const res = await getSeminarDetails();
  //     if (res.status === 200) {
  //       setDetails(res.data);
  //     }
  //     setLoading(false);
  //   } catch (error) {}
  // };

  return (
    <div>
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 mt-8"
        style={{ fontFamily: "Quicksand" }}
      >
        SEMINARS
      </h1>

      <div className="md:w-4/5 mx-auto bg-gray-100/10 flex flex-col md:flex-row p-4 my-6">
        <div className="flex flex-col items-center justify-center w-full md:w-3/12">
          <img
            src={samuel}
            alt="speaker"
            className="h-[200px] w-[200px] rounded-full"
          />
          <h3 className="md:text-white text-2xl md:text-3xl my-2 text-blue-500">
            Samuel Samson
          </h3>
        </div>
        <div className=" w-full md:w-9/12">
          <h1 className="text-2xl text-center md:text-left md:text-4xl text-white mb-2">
            Overseas Education Seminar
          </h1>
          <div className="grid auto-cols-auto md:grid-cols-4 gap-4 my-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Date
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">
                19<sup>th</sup> February, 2022
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Time
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">
                5:00pm - 5:45pm
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Platform
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">MS Teams</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Link
              </h3>
              <p>
                <a
                  href="https://teams.microsoft.com/l/meetup-join/19%3a4e7342607a3546e2a7d2cc3729d5fb91%40thread.tacv2/1645161097635?context=%7b%22Tid%22%3a%220a0aa63d-82d0-4ba1-b909-d7986ece4c4c%22%2c%22Oid%22%3a%22375f278a-baa2-4fcd-adad-f2043d4b2bb5%22%7d"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-4 text-sm md:text-xl text-white"
                >
                  Click here to join
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
              About Speaker
            </h3>
            <ul className="list-disc mx-4 my-2">
              <li className="text-sm md:text-xl text-white">
                Oversears Education Specialist
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
              Major Benefits
            </h3>
            <ul className="list-disc mx-4 my-2">
              <li className="text-sm md:text-xl text-white">
                Admission in Top 20 Colleges
              </li>
              <li className="text-sm md:text-xl text-white">Full Funding</li>
              <li className="text-sm md:text-xl text-white">
                Living Stipend upto $4000 monthly
              </li>
              <li className="text-sm md:text-xl text-white">
                Job opportunity ($150,000 - $6,00,000)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:w-4/5 mx-auto bg-gray-100/10 flex flex-col md:flex-row p-4 my-6">
        <div className="flex flex-col items-center justify-center w-full md:w-3/12">
          <img
            src={pratik}
            alt="speaker"
            className="h-[200px] w-[200px] rounded-full"
          />
          <h3 className="md:text-white text-2xl md:text-3xl my-2 text-blue-500">
            Pratik Patil
          </h3>
        </div>
        <div className=" w-full md:w-9/12">
          <h1 className="text-2xl text-center md:text-left md:text-4xl text-white mb-2">
            Blockchain and Web 3.0
          </h1>
          <div className="grid auto-cols-auto md:grid-cols-4 gap-4 my-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Date
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">
                17<sup>th</sup> February, 2022
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Time
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">6:30pm</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Platform
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">MS Teams</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Link
              </h3>
              <p>
                <a
                  href="https://bit.ly/XeniaverseBlockchainSeminar"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-4 text-sm md:text-xl text-white"
                >
                  Click here to join
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
              About Speaker
            </h3>
            <ul className="list-disc mx-4 my-2">
              <li className="text-sm md:text-xl text-white">PICT Alumni</li>
              <li className="text-sm md:text-xl text-white">
                Full Stack Blockchain Developer, CakeSoft Technologies
              </li>
              <li className="text-sm md:text-xl text-white">
                Smart India Hackathon Winner 2020
              </li>
              <li className="text-sm md:text-xl text-white">
                Smart India Hackathon Best Innovator 2018
              </li>
            </ul>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Seminars);
