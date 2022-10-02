import { useState } from "react";
import Base from "./Base";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { register1 } from "../services/userServices";

const Register = () => {
  const [data, setData] = useState({
    fullName: "",
    country: "",
    mobileNumber: "",
    state: "",
    district: "",
    email: "",
    city: "",
    password: "",
    confirmPassword: "",
    pin: "",
    address: "",
  });
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
      fullName: "",
      country: "",
      mobileNumber: "",
      state: "",
      district: "",
      email: "",
      city: "",
      password: "",
      confirmPassword: "",
      pin: "",
      address: "",
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    register1(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("user registered");
        setData({
          fullName: "",
          country: "",
          mobileNumber: "",
          state: "",
          district: "",
          email: "",
          city: "",
          password: "",
          confirmPassword: "",
          pin: "",
          address: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        toast.error("error");
      });

    alert(`${data.fullName} - ${data.country} - ${data.mobileNumber} - ${data.state} - ${data.district} - ${data.city} -
      ${data.email} - ${data.password} - ${data.confirmPassword} - ${data.pin} - ${data.address}`);
  };

  return (
    <div>
      <Base />
      <p className="p-2"></p>
      <div className="">
        <section className="vh-80 ">
          <div className="d-flex align-items-center h-80">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-80">
                <div className="col-sm-6">
                  <div className="card" style={{ borderradius: "15px" }}>
                    <div className="card-body p-2">
                      <h2 className="text-uppercase text-center mb-4">
                        Register Here
                      </h2>

                      <form onSubmit={formSubmit}>
                        <div className="row">
                          <div className="col-5">
                            <label className="form-label" for="fullName1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="fullName1"
                              name="fullName"
                              className="form-control form-control-sm"
                              value={data.fullName}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                          <div className="col-5">
                            <label className="form-label" for="country1">
                              Country
                            </label>
                            <input
                              type="text"
                              id="country1"
                              name="country"
                              className="form-control form-control-sm"
                              value={data.country}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <label className="form-label" for="mobileNumber1">
                              Mobile Number
                            </label>
                            <input
                              type="number"
                              id="mobileNumber1"
                              name="mobileNumber"
                              className="form-control form-control-sm"
                              value={data.mobileNumber}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                          <div className="col-5">
                            <label className="form-label" for="state1">
                              State
                            </label>
                            <input
                              type="text"
                              id="state1"
                              name="state"
                              className="form-control form-control-sm"
                              value={data.state}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <label className="form-label" for="email1">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email1"
                              name="email"
                              className="form-control form-control-sm"
                              value={data.email}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                          <div className="col-5">
                            <label className="form-label" for="city1">
                              City
                            </label>
                            <input
                              type="text"
                              id="city1"
                              name="city"
                              className="form-control form-control-sm"
                              value={data.city}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <label className="form-label" for="password1">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password1"
                              name="password"
                              className="form-control form-control-sm"
                              value={data.password}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                          <div className="col-5">
                            <label className="form-label" for="district1">
                              District
                            </label>
                            <input
                              type="text"
                              id="district1"
                              name="district"
                              className="form-control form-control-sm"
                              value={data.district}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <label
                              className="form-label"
                              for="confirmPassword1"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="confirmPassword1"
                              name="confirmPassword"
                              className="form-control form-control-sm"
                              value={data.confirmPassword}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                          <div className="col-5">
                            <label className="form-label" for="pin1">
                              Pin
                            </label>
                            <input
                              type="number"
                              id="pin1"
                              name="pin"
                              className="form-control form-control-sm"
                              value={data.pin}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-10">
                          <label className="form-label" for="address1">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address1"
                            name="address"
                            className="form-control form-control-sm"
                            value={data.address}
                            onChange={InputEvent}
                            required
                          />
                        </div>

                        <div className="d-flex justify-content-center pt-4">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block btn-md text-body mx-3"
                          >
                            Register Yourself
                          </button>
                          <button
                            type="reset"
                            onClick={resetData}
                            className="btn btn-danger btn-block btn-md text-body"
                          >
                            Cancel
                          </button>
                        </div>

                        {/* <p className="text-center text-muted mt-2 mb-0">
                            Have already an account?{" "}
                            <a href="#!" className="fw-bold text-body">
                              <u>Login here</u>
                            </a>
                          </p> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <p className="p-1"></p>
      <Footer />
    </div>
  );
};

export default Register;
