import React, { useState } from "react";

import "./Auth.css";
import { connect } from "react-redux";
import Modal from "react-modal";
import Login from "./Login";
import Register from "./Register";

const AuthModal = (props) => {
  const [loginMode, setLoginMode] = useState(true);
  function toggle() {
    setLoginMode((state) => !state);
  }

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.close}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="text-right text-xl">
          <button onClick={props.close}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        {loginMode ? (
          <Login toggle={toggle} closeModal={props.close} />
        ) : (
          <Register toggle={toggle} closeModal={props.close} />
        )}
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
