import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { isReported } from "../auth/auth";
import Base from "./Base";
import Footer from "./Footer";

function NearestHospital() {
  const navigate = useNavigate();
  const resetData = () => {
    localStorage.removeItem("nearestHospital");
    navigate("/reportaccident");
  };
  return (
    <div>
      {" "}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid p-2 my-2">
            <span className="navbar-brand" style={{ marginRight: "200px" }}>
              <h1> Emergency Service For Road Accidents</h1>
            </span>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
                <li className="nav-item">
                  <div className="nav-link px-2" onClick={resetData}>
                    Home
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <span className="d-block p-3 bg-danger text-white mx-2 text-center">
          Are you looking for a hospital that provides the best emergency
          service for road accidents? Here you will get all the leading
          inpatient and outpatient hospitals with the most advanced medical
          equipment.
        </span>
      </div>
      <div className="pt-2 mt-2">
        <table class="table table-warning table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hospital Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Alt No.</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">District</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{localStorage.getItem("nearestHospitalName")}</td>
              <td>{localStorage.getItem("nearestHospitalEmail")}</td>
              <td>{localStorage.getItem("nearestHospitalMobile")}</td>
              <td>{localStorage.getItem("nearestHospitalAltMobile")}</td>
              <td>{localStorage.getItem("nearestHospitalStreet")}</td>
              <td>{localStorage.getItem("nearestHospitalState")}</td>
              <td>{localStorage.getItem("nearestHospitalDistrict")}</td>
              <td>{localStorage.getItem("nearestHospitalCity")}</td>
              <td>{localStorage.getItem("nearestHospitalCountry")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default NearestHospital;
