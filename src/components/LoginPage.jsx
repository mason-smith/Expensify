import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth.jsx";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__subtitle">Keep your money shit together</p>
      <button
        className="login__button btn btn__login btn__ripple"
        onClick={startLogin}
      >
        Sign in with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
