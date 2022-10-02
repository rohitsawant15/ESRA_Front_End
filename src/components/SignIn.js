import { useState } from "react";
import Base from "./Base";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Login } from "../services/userServices";
import {
  adminData,
  doLogin,
  hospitalData,
  policeStationData,
} from "../auth/auth";
import Footer from "./Footer";

const SignIn = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
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
      username: "",
      password: "",
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    if (data.username.trim === "" || data.password.trim === "") {
      toast.error("Username or Password required !");
      return;
    }

    Login(data)
      .then((responseData) => {
        console.log("Logged In !");
        toast.success("Logged In !");
        console.log(responseData.token);
        console.log(responseData.role);

        localStorage.setItem("token", responseData.token);
        if (responseData.role === "ROLE_ADMIN") {
          adminData(responseData, () => {
            console.log(responseData);
            navigate("/admin/dashboard");
          });
        } else if (responseData.role === "ROLE_HOSPITAL") {
          hospitalData(responseData, () => {
            navigate("/hospital/dashboard");
          });
        } else if (responseData.role === "ROLE_POLICESTATION") {
          policeStationData(responseData, () => {
            navigate("/policestation/dashboard");
          });
        }
        // doLogin(responseData, () => {
        //   console.log("data saved");
        //   navigate("/admin/dashboard");
        // });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404)
          toast.error(error.response.data.message);
        else {
          toast.error("Error");
        }
      });
  };

  return (
    <>
      <Base />
      <div>
        {/* <section className="h-100 gradient-form"> */}
        <p className="p-2"></p>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          className="image_sign"
                          src="https://www.pngitem.com/pimgs/m/213-2133765_24-hour-service-24x7-emergency-hd-png-download.png
                          "
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Safety First !</h4>
                      </div>

                      <form onSubmit={handleFormSubmit} method="POST">
                        <h5>
                          <strong>Please login to your account</strong>
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            name="username"
                            className="form-control"
                            placeholder="Enter Email address"
                            value={data.username}
                            onChange={InputEvent}
                            required
                          />
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={InputEvent}
                            required
                          />
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg  mb-3 "
                            type="submit"
                          >
                            <strong>Log in</strong>
                          </button>
                          <button
                            type="reset"
                            onClick={resetData}
                            className="btn btn-danger btn-block fa-lg  mb-3 mx-3"
                          >
                            <strong>clear</strong>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2 display-6">
                    <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
                      <h1 className="mb-4">We are Happy to Help You</h1>
                      <p className="small mb-0">
                        You are on India's Fastest Platform for Accidential Help
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
      <p className="p-1"></p>
      <Footer />
    </>
    /*
    <div>
      <Base />
      <p className="p-2"></p>
      <div className="">
        <section className="vh-80 ">
          <div className="d-flex align-items-center h-80">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-80">
                <div className="col-sm-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-2">
                      <h2 className="text-uppercase text-center mb-4">
                        Sign In
                      </h2>
                      <form onSubmit={handleFormSubmit} method="POST">
                        <div className="row">
                          <div className="col-5">
                            <label className="form-label" for="email1">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email1"
                              name="username"
                              className="form-control form-control-sm"
                              value={data.username}
                              onChange={InputEvent}
                              required
                            />
                          </div>
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
                        </div>
                        <div className="d-flex justify-content-center pt-4">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block btn-md text-body mx-3"
                          >
                            Sign In
                          </button>
                          <button
                            type="reset"
                            onClick={resetData}
                            className="btn btn-danger btn-block btn-md text-body"
                          >
                            Cancel
                          </button>
                        </div>
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
    */
  );
};

export default SignIn;
