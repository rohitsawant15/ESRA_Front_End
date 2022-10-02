import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { toast } from "react-toastify";
import { useState } from "react";
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import { AddPoliceStation } from "../../services/userServices";
import { loggedOut } from "../../auth/auth";

function AddNewPoliceStation() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    altMobileNo: "",
    policeStationAddress: {
      city: "",
      district: "",
      state: "",
      country: "",
      streetLine: "",
      pinCode: "",
    },
    coordinates: {
      latitude: "",
      longitude: "",
    },
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
  const onChangeAddress = (event) => {
    setData({
      ...data,
      policeStationAddress: {
        ...data.policeStationAddress,
        [event.target.name]: event.target.value,
      },
    });
  };
  const onChangeLocation = (event) => {
    setData({
      ...data,
      coordinates: {
        ...data.coordinates,
        [event.target.name]: event.target.value,
      },
    });
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      mobileNo: "",
      altMobileNo: "",
      policeStationAddress: {
        city: "",
        district: "",
        state: "",
        country: "",
        streetLine: "",
        pinCode: "",
      },
      coordinates: {
        latitude: "",
        longitude: "",
      },
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    AddPoliceStation(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("Police Station registered");
        setData({
          name: "",
          email: "",
          password: "",
          mobileNo: "",
          altMobileNo: "",
          policeStationAddress: {
            city: "",
            district: "",
            state: "",
            country: "",
            streetLine: "",
            pinCode: "",
          },
          coordinates: {
            latitude: "",
            longitude: "",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        toast.error("error");
      });
  };
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const logout = () => {
    loggedOut(() => {
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <div>
      <>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography variant="h4" noWrap component="div">
                <strong>ESRA</strong> Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent">
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                <ListItem button disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/admin/dashboard");
                    }}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem button disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/myprofile");
                    }}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </ListItem>
              </List>

              <Divider />
              <List>
                <ListItem button disablePadding>
                  <ListItemButton onClick={logout}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Container>
              <div>
                <p className="p-2"></p>
                <div className="">
                  <section className="vh-80 ">
                    <div className="d-flex align-items-center h-80">
                      <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-80">
                          <div className="col-sm-6">
                            <div
                              className="card"
                              style={{ borderradius: "15px" }}
                            >
                              <div className="card-body p-2">
                                <h2 className="text-uppercase text-center mb-4">
                                  <strong>Add New Police Station</strong>
                                </h2>

                                <form onSubmit={formSubmit}>
                                  <div className="row">
                                    <div className="col-5">
                                      <label className="form-label" for="name1">
                                        Police Station Name
                                      </label>
                                      <input
                                        type="text"
                                        id="name1"
                                        name="name"
                                        value={data.name}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="country1"
                                      >
                                        Country
                                      </label>
                                      <input
                                        type="text"
                                        id="country1"
                                        name="country"
                                        value={
                                          data.policeStationAddress.country
                                        }
                                        onChange={onChangeAddress}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="mobile1"
                                      >
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        id="mobile1"
                                        name="mobileNo"
                                        value={data.mobileNo}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="state1"
                                      >
                                        State
                                      </label>
                                      <input
                                        type="text"
                                        id="state1"
                                        name="state"
                                        value={data.policeStationAddress.state}
                                        onChange={onChangeAddress}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="altMobileNo"
                                      >
                                        Alternate Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        id="altMobileNo"
                                        name="altMobileNo"
                                        value={data.altMobileNo}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
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
                                        value={data.policeStationAddress.city}
                                        onChange={onChangeAddress}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="district1"
                                      >
                                        District
                                      </label>
                                      <input
                                        type="text"
                                        id="district1"
                                        name="district"
                                        value={
                                          data.policeStationAddress.district
                                        }
                                        onChange={onChangeAddress}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="pinCode1"
                                      >
                                        Pin
                                      </label>
                                      <input
                                        type="number"
                                        id="pinCode1"
                                        name="pinCode"
                                        value={
                                          data.policeStationAddress.pinCode
                                        }
                                        onChange={onChangeAddress}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="email1"
                                      >
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        id="email1"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="streetLine1"
                                      >
                                        Address
                                      </label>
                                      <input
                                        type="text"
                                        id="streetLine1"
                                        name="streetLine"
                                        value={
                                          data.policeStationAddress.streetLine
                                        }
                                        onChange={onChangeAddress}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="latitude"
                                      >
                                        Latitude
                                      </label>
                                      <input
                                        type="text"
                                        id="latitude"
                                        name="latitude"
                                        value={data.coordinates.latitude}
                                        onChange={onChangeLocation}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="longitude"
                                      >
                                        Longitude
                                      </label>
                                      <input
                                        type="text"
                                        id="longitude"
                                        name="longitude"
                                        value={data.coordinates.longitude}
                                        onChange={onChangeLocation}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="password"
                                      >
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="d-flex justify-content-center pt-4">
                                    <button
                                      type="submit"
                                      className="btn btn-warning btn-block btn-md text-body mx-3"
                                    >
                                      Add Police Station
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
              </div>
            </Container>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default AddNewPoliceStation;
