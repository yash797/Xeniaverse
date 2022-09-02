import React from "react";
import { connect } from "react-redux";

const Webteam = () => {
  const teamDetails = [
    {
      name: "Atharva Kinikar",
      linkedin: "https://www.linkedin.com/in/atharva-kinikar/",
      img: "https://drive.google.com/uc?export=view&id=1QGMSaoN_8bQ134gh2mkrd6oh_jEmncpl",
    },
    {
      name: "Raj Shende",
      linkedin: "https://www.linkedin.com/in/raj-shende-350718204",
      img: "https://drive.google.com/uc?export=view&id=1edL_WDwawKgoR2fF7xTq_b7ATR2XDUHx",
    },
    {
      name: "Yash Pande",
      linkedin: "https://www.linkedin.com/in/yash-pande-1a5812206/",
      img: "https://drive.google.com/uc?export=view&id=1Om4lUl9akrfLyKo7J7XAxIBdpWKTUVm7",
    },
    {
      name: "Shivakumar Ranade ",
      linkedin: "https://www.linkedin.com/in/shivakumar-ranade-96a51b227",
      img: "https://drive.google.com/uc?export=view&id=10WnBxDnkaKEuNoRHl5r1Uf5x5D9AXbxa",
    },
    {
      name: "Rajsing Jadhav",
      linkedin: "https://www.linkedin.com/in/rajsing-jadhav-a494a9206",
      img: "https://drive.google.com/uc?export=view&id=1kaj6BB0ZKOTJTb4vRFP5Ljb-Df95VUqF",
    },
    {
      name: "V Raghavendra Reddy",
      linkedin: "https://www.linkedin.com/in/raghavendra-reddy-4501271b6/",
      img: "https://drive.google.com/uc?export=view&id=1PlJzEm0mlRvgtXIm4AbQQsBiUjAUX_7v",
    },
    {
      name: "Advait Naik",
      linkedin: "https://www.linkedin.com/in/advait-naik-080439223/",
      img: "https://drive.google.com/uc?export=view&id=1SA-4wwiu4OpnBA9L8veEyyBTdgZWD1tF",
    },
    {
      name: "Vaishnavi Katkar ",
      linkedin: "https://www.linkedin.com/in/vaishnavi-katkar-0a61a9211",
      img: "https://drive.google.com/uc?export=view&id=1l6HHFropHUfXwSFBs16oPrOzpvAfAmfu",
    },
    {
      name: "Sakshi Masurkar",
      linkedin: "https://www.linkedin.com/in/sakshi-masurkar-7a5440211",
      img: "https://drive.google.com/uc?export=view&id=121mjA_X75S_sx5V5VOTWwXH3Ok5ZfW1K",
    },
    {
      name: "Ruturaj Panditrao",
      linkedin: "https://www.linkedin.com/in/ruturaj-panditrao-0a54b5212",
      img: "https://drive.google.com/uc?export=view&id=1W0O6xIqos8shgP_l6VxA2LmIm_upZ5ez",
    },
    {
      name: "Neha Pol",
      linkedin: "https://www.linkedin.com/in/neha-pol-8b9aa6206",
      img: "https://drive.google.com/uc?export=view&id=1oarMpziN72jiRkXDIwFVqrZwvYjOClEe",
    },
    {
      name: "Ameya Dhake",
      linkedin: "http://linkedin.com/in/ameya-dhake-a69b2b218",
      img: "https://drive.google.com/uc?export=view&id=1-gN1r0cuvmpvjjRPghr01a5LA4Zlta-k",
    },
    {
      name: "Mahaveer Navlakha",
      linkedin: "http://linkedin.com/in/mahaveer-navlakha-844b5a156",
      img: "https://drive.google.com/uc?export=view&id=1NQmTvlupqT9PQrtq5XYw_7pAofCTshI7",
    },
    {
      name: "Brincy Mathew ",
      linkedin: "https://www.linkedin.com/in/brincy-mathew-1a9b81205",
      img: "https://drive.google.com/uc?export=view&id=1b0Y3Kghrp0B4pp48qY1-CZ2ekqESpd1P",
    },
    {
      name: "Riya Mulay",
      linkedin: "https://www.linkedin.com/in/riya-mulay-647022185/",
      img: "https://drive.google.com/uc?export=view&id=1l68P2ve7nXCLvbGS8Ug6vM6OQ1rihLT7",
    },
    {
      name: "Vaishnavi Raut",
      linkedin: "https://www.linkedin.com/in/vaishnavi-raut-4a0228224",
      img: "https://drive.google.com/uc?export=view&id=1KqOwlyUnWbQgvr4lBsl3Oyg7vBPLRbPB",
    },
    // {
    //   name: "Vedant Daigavane",
    //   linkedin: "https://www.linkedin.com/in/vedant-daigavane-25785315a/",
    //   img: "https://pcsbxenia.com/static/media/vedant.83cb716c.jpeg",
    // },
    // {
    //   name: "Amit Purohit",
    //   linkedin: "https://www.linkedin.com/in/amitpurohit47/",
    //   img: "https://pcsbxenia.com/static/media/amit.cf6eea69.jpg",
    // },
  ];

  return (
    <div className="web-team">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 mt-8"
        style={{ fontFamily: "Quicksand" }}
      >
        WEB TEAM
      </h1>
      <div className="web-team-main flex justify-evenly flex-wrap w-full xl:w-4/5 xl:mx-auto">
        {teamDetails.map((member, i) => (
          <div
            key={`member${i}`}
            className="w-[200px] transition-all p-3 hover:bg-blue-300 hover:bg-opacity-20 inline-block m-4 cursor-pointer rounded-xl "
          >
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <div className="h-[150px] w-[150px] ml-2">
                <img
                  className="max-h-full max-w-full rounded-full h-[150px] w-[150px]"
                  src={member.img}
                  alt="smart boy"
                />
              </div>
              <div>
                <br />
                <p className="text-white text-center bg-h-14 bg-gradient-to-r from-purple-500 to-pink-500 p-text-white text-allign:center bg-neutral-500 py-5 px-8 rounded-2xl font-bold  cursor-pointer   ">
                  {member.name}
                </p>
              </div>
            </a>
          </div>
        ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Webteam);
