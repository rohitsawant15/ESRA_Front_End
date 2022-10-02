import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Reported } from "../auth/auth";
import { ReportAccidents } from "../services/userServices";
import Base from "./Base";
import Footer from "./Footer";
import { GeoLocation } from "./GeoLocation";

function ReportAccident() {
  const location = GeoLocation();
  const [data, setData] = useState({
    username: "",
    vehicleNo: "",
    count: "",
    latitude: "",
    longitude: "",
  });

  const getLocation = () => {
    if (location.loaded) {
      setData((preVal) => {
        return {
          ...preVal,
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng,
        };
      });
    }
  };

  const navigate = useNavigate();

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const resetData = () => {
    setData({
      username: "",
      vehicleNo: "",
      count: "",
      latitude: "",
      longitude: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ReportAccidents(data)
      .then((responseData) => {
        console.log("Reported");
        console.log(data);
        toast.success("Reported !");
        console.log(responseData);
        localStorage.setItem("nearestHospital", responseData);
        localStorage.setItem("nearestHospitalName", responseData.name);
        localStorage.setItem("nearestHospitalEmail", responseData.email);
        localStorage.setItem("nearestHospitalMobile", responseData.mobile);
        localStorage.setItem(
          "nearestHospitalAltMobile",
          responseData.altMobile
        );
        localStorage.setItem(
          "nearestHospitalCity",
          responseData.hospitalAddress.city
        );
        localStorage.setItem(
          "nearestHospitalCountry",
          responseData.hospitalAddress.country
        );
        localStorage.setItem(
          "nearestHospitalState",
          responseData.hospitalAddress.state
        );
        localStorage.setItem(
          "nearestHospitalDistrict",
          responseData.hospitalAddress.district
        );
        localStorage.setItem(
          "nearestHospitalStreet",
          responseData.hospitalAddress.streetLine
        );
        navigate("/securedpage/nearestHospital");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404)
          toast.error(error.response.data.message);
        else {
          toast.error("Error");
        }
      });
  };
  return (
    <div>
      <Base />
      <p class="p-2"></p>
      <div class="d-flex justify-content-center">
        <div class="form-body ">
          <div class="row">
            <div class="form-holder">
              <div class="form-content">
                <div class="form-items ">
                  <h3>Report Accident</h3>

                  <form class="requires-validation" novalidate>
                    <div class="col-md-10 pb-2 ">
                      <input
                        class="form-control"
                        type="text"
                        name="username"
                        placeholder="Full Name"
                        onChange={InputEvent}
                        required
                      />
                      <div class="valid-feedback">Username field is valid!</div>
                      <div class="invalid-feedback">
                        Username field cannot be blank!
                      </div>
                    </div>

                    <div class="col-md-10 pb-2">
                      <input
                        class="form-control"
                        type="text"
                        name="vehicleNo"
                        placeholder="Vehicle Number"
                        onChange={InputEvent}
                        required
                      />
                      <div class="valid-feedback">
                        Vehicle Number field is valid!
                      </div>
                      <div class="invalid-feedback">
                        Vehicle Number field cannot be blank!
                      </div>
                    </div>
                    <div class="col-md-10 pb-2">
                      <input
                        class="form-control"
                        type="number"
                        name="count"
                        placeholder="Passenger Involved"
                        onChange={InputEvent}
                        required
                      />
                    </div>

                    <h4>Live Location Of Accident:</h4>
                    <div class="col-md-10 pb-2">
                      <input
                        class="form-control"
                        type="text"
                        name="latitude"
                        placeholder="Latitude"
                        value={data.latitude}
                        onChange={InputEvent}
                        required
                      />
                    </div>
                    <div class="col-md-10 pb-2">
                      <input
                        class="form-control"
                        type="text"
                        name="longitude"
                        placeholder="Longitude"
                        value={data.longitude}
                        onChange={InputEvent}
                        required
                      />
                    </div>
                    <div class="col-md-10 pb-2">
                      <div
                        className="btn btn-outline-primary"
                        onClick={getLocation}
                      >
                        Get Live Location
                      </div>
                    </div>
                    <div class="form-button mt-3">
                      <button
                        id="submit"
                        type="submit"
                        class="btn btn-primary mx-auto"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <button
                        id="reset"
                        type="reset"
                        class="btn btn-danger mx-5"
                        onClick={resetData}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="p-3"></p>
      <Footer />
    </div>
  );
}

export default ReportAccident;
