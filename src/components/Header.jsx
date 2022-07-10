import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Header({ title }) {
  return (
    <>
      <div className="container">
        <div className="top-header-bar">
          <div className="row">
            <div className="col-md-12">
              <h2>{title}</h2>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <Link to="/">
                <Button variant="outlined" color="primary">
                  Home
                </Button>
              </Link>
            </div>
            <br></br>
            <div className="col-md-4">
              <Link to="/about">
                <Button variant="outlined" color="secondary">
                  About
                </Button>
              </Link>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

Header.defaultProps = {
  title: "Manage your tasks here!",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
