import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { startLogout } from "../actions/auth.jsx";

export const Header = ({ startLogout }) => (
  <AppBar className="header--wrapper" position="fixed">
    <Toolbar className="header">
      {/* <IconButton color="inherit" aria-label="Menu">
        <i className="material-icons">menu</i>
      </IconButton> */}
      <Link className="header__title" to="/dashboard">
        <Typography variant="title" color="inherit" className="flex">
          Expensify
        </Typography>
      </Link>

      <Button color="inherit" className="header__logout" onClick={startLogout}>
        Logout
      </Button>
    </Toolbar>
  </AppBar>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
