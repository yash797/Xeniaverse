import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Requests } from "../configuration";
import { nameRequired, stringRequired } from "../Utils/Validators";

function JoinTeam(props) {
  const { eventId } = useParams();
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    !props.loggedIn && navigate("/");
  }, [props.loggedIn]);

  return (
    <div className=" max-w-6xl p-8 bg-black/10 mx-auto my-4  text-gray-200 space-y-4 h-[50vh]">
      <div className="max-w-[400px] mx-auto box-content text-gray-500">
        <Formik
          initialValues={{
            teamId: "",
          }}
          validationSchema={Yup.object({
            teamId: stringRequired,
          })}
          onSubmit={async (values) => {
            setError("");
            setSuccessMessage("");
            Requests.joinTeam(
              props.userData._id,
              eventId,
              values.teamId,
              props.userData.name
            )
              .then((res) => {
                setSuccessMessage("Successfully joined the team");
                setTimeout(() => {
                  navigate("/");
                }, 3000);
              })
              .catch((err) => {
                setError(err.response.data);
              });
          }}
        >
          {(formik) => {
            return (
              <div className="space-y-4">
                <div className="text-2xl text-white">Join a Team</div>
                <Field
                  className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                  name="teamId"
                  placeholder="Enter Team Id"
                ></Field>
                {formik.errors.teamId && (
                  <div className="text-red-500 font-bold">
                    {formik.errors.teamId}
                  </div>
                )}
                <button
                  className="p-2 px-4 border border-purple-400 text-purple-400"
                  onClick={formik.handleSubmit}
                >
                  Join
                </button>
              </div>
            );
          }}
        </Formik>

        <div className="text-green-500 font-bold">{successMessage}</div>
        <div className="text-red-500 font-bold">{error}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(JoinTeam);
