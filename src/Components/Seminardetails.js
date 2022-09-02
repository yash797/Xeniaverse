import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Requests } from "../configuration";

const Seminardetails = () => {
  let id = useParams();
  const [details, setDetails] = useState({});
  // const [loading, setLoading] = useState(true);

  let history = useNavigate();

  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = async () => {
    Requests.getSeminarMoreInfo(id.seminarId)
      .then((res) => {
        setDetails(res);

        console.log(res);
      })
      .catch((err) => {});
  };
  console.log(details);

  return <div className="overflow-x-hidden overflow-y-hidden"></div>;
};
const mapStateToProps = (state) => {
  return {};
};
const mapActionToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapActionToProps)(Seminardetails);
