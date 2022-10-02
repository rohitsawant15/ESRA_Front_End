import React from "react";
//import HomePage from './HomePage'
import { NavLink } from "react-router-dom";

function Base() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid p-2 my-2">
          <span className="navbar-brand" style={{ marginRight: "200px" }}>
            <h1> Emergency Service For Road Accidents</h1>
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active px-2" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-2" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-2" to="/reportaccident">
                  Report Accident
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-2" to="/feedback">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-2" to="/signin">
                  Sign In
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link px-2" to="/register">
                  Register
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <span className="d-block p-3 bg-danger text-white mx-2 text-center">
        Are you looking for a hospital that provides the best emergency service
        for road accidents? Here you will get all the leading inpatient and
        outpatient hospitals with the most advanced medical equipment.
      </span>
    </div>
  );
}

export default Base;
