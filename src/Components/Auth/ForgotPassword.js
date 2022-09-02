import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Validators } from "../../Utils/Index";
import "./Auth.css";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Requests } from "../../configuration";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  return (
    <div className="w-full p-4 h-[500px]">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Validators.emailRequired,
        })}
        onSubmit={async (values) => {
          setMessage("");
          Requests.forgotPassword(values.email).then((res) => {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            setMessage("Reset Password link sent to: " + values.email);
          });
        }}
      >
        {(formik) => (
          <div className="max-w-[400px] bg-gray-100/20 p-4 flex mx-auto flex-col space-y-4">
            <div className="text-2xl text-purple-500">Forgot Password</div>
            <div className="text-sm text-white">
              A link will be sent on your email through which you can reset your
              password.
            </div>
            <Field
              className="p-2 rounded outline-none"
              name="email"
              placeHolder="Enter your Email"
            ></Field>
            {formik.errors.email && (
              <div className="text-red-500 font-bold">
                {formik.errors.email}
              </div>
            )}
            <div className="text-green-400">{message}</div>
            <div className="space-x-2 text-sm">
              <button
                className="p-2 px-4 bg-purple-500 hover:bg-purple-600 transition"
                onClick={formik.handleSubmit}
              >
                Send Mail
              </button>
              <Link to="/">
                <button className="p-2 px-4 bg-red-500 hover:bg-red-600 transition">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
