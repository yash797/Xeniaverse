import React from "react";
import "./Auth.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Validators } from "../../Utils/Index";
import { connect } from "react-redux";
import { login } from "../../Store/Actions";
import { Requests } from "../../configuration";
import { Link } from "react-router-dom";

const Register = (props) => {
  const validate = Yup.object({
    email: Validators.emailRequired,
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Enter Password"),
    name: Validators.nameRequired,
    mobile: Validators.mobileRequired,
    branch: Validators.name,
    college: Validators.name,
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email: "",
          password: "",
          confirmPassword: "",
          college: "",
          branch: "",
        }}
        validationSchema={validate}
        onSubmit={async (values) => {
          Requests.register(values)
            .then((res) => {
              props.login(res.data);
              localStorage.setItem("xeniaverse", res.data.token);
              props.closeModal();
            })
            .catch(() => {});
        }}
      >
        {(formik) => (
          <div className="p-2 space-y-4">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            {fields.map((ele) => {
              return (
                <div className="">
                  <Field
                    className="w-full bg-gray-100 rounded border border-gray-200 p-2"
                    placeholder={ele.label}
                    name={ele.name}
                    type={ele.type || "text"}
                    onChange={formik.handleChange}
                  />
                  {formik.errors[ele.name] && (
                    <div className="text-red-500 font-bold">
                      {formik.errors[ele.name]}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-baseline justify-between">
              <button
                className="px-6 py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-900 transition"
                type="button"
                onClick={formik.handleSubmit}
              >
                Register
              </button>
              <Link
                class="text-medium text-blue-600 hover:underline"
                to="/forgotpassword"
                onClick={() => props.closeModal()}
              >
                Forgot Password ?
              </Link>
            </div>
            <div>
              <div>Already have an account ? </div>
              <div
                className="text-white font-bold cursor-pointer"
                onClick={props.toggle}
              >
                Login
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const fields = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "mobile",
    label: "Mobile Number",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
  {
    name: "college",
    label: "College Name",
  },
  {
    name: "branch",
    label: "Branch",
  },
];
