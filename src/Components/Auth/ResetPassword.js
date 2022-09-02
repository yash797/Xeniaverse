import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { resetPassword } from "../../configuration/requests";

function ResetPassword(props) {
  const { userId, token } = useParams();

  const [msg, setMsg] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (props.loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full p-4 h-[500px]">
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={Yup.object({
          password: Yup.string().required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Enter Password"),
        })}
        onSubmit={async (values) => {
          setMsg(null);
          resetPassword(userId, token, values.password)
            .then((res) => {
              navigate("/");
            })
            .catch((err) => {
              setMsg(err.response.data);
            });
        }}
      >
        {(formik) => {
          return (
            <div className="max-w-[400px] bg-gray-100/20 p-4 flex mx-auto flex-col space-y-4">
              <div className="text-2xl text-purple-500">Reset Password</div>
              <Field
                className="p-2 rounded outline-none"
                name="password"
                placeHolder="Password"
                type="password"
              ></Field>
              {formik.errors.password && (
                <div className="text-red-500 font-bold">
                  {formik.errors.password}
                </div>
              )}
              <Field
                className="p-2 rounded outline-none"
                name="confirmPassword"
                placeHolder="Confirm Password"
                type="password"
              ></Field>

              {formik.errors.confirmPassword && (
                <div className="text-red-500 font-bold">
                  {formik.errors.confirmPassword}
                </div>
              )}

              <div className=" text-blue-400 font-bold">{msg}</div>
              <div className="space-x-2">
                <button
                  className="p-2 px-4 bg-purple-500 hover:bg-purple-600 transition"
                  onClick={formik.handleSubmit}
                >
                  Reset
                </button>
                <Link to="/">
                  <button className="p-2 px-4 bg-red-500 hover:bg-red-600 transition">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(ResetPassword);
