import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Requests } from "../configuration";
import { nameRequired } from "../Utils/Validators";

function CreateTeamComponent(props) {
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    !props.loggedIn && navigate("/");
  }, [props.loggedIn]);

  return (
    <div className=" text-gray-200 space-y-2 text-center">
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: nameRequired,
        })}
        onSubmit={async (values) => {
          setError("");
          Requests.createTeam(props.userData._id, values.name, props.eventId)
            .then((res) => {
              setTimeout(() => {
                navigate("/");
              }, 3000);
              setSuccessMessage("Team Created Successfully");
            })
            .catch((err) => {
              setError(err.response.data);
            });
        }}
      >
        {(formik) => {
          return (
            <div className="min-w-[300px] space-y-2">
              <div className="text-lg text-white">Create a new Team</div>
              <Field
                className="w-full rounded border bg-gray-100/10 border-gray-200 text-gray-200 p-2"
                name="name"
                placeholder="Enter Team Name"
              ></Field>
              {formik.errors.name && (
                <div className="text-red-500 font-bold text-sm">
                  {formik.errors.name}
                </div>
              )}
              <button
                className="p-1 px-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition"
                onClick={formik.handleSubmit}
              >
                Create
              </button>
            </div>
          );
        }}
      </Formik>
      <div className="text-green-500 font-bold">{successMessage}</div>
      <div className="text-red-500 font-bold">{error}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(CreateTeamComponent);
