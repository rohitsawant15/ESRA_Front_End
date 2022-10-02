import React, { useEffect, useState } from "react";
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
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import { GetHospitalList } from "../../services/userServices";
import axios from "axios";
import { myAxios } from "../../services/Helper";
import { loggedOut } from "../../auth/auth";

function ViewHospital() {
  const navigate = useNavigate();

  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    myAxios.get("/api/v1/admin/availableHospitals").then((response) => {
      console.log(response.data);
      setHospitalList(response.data);
      console.log(hospitalList);
    });
  }, []);

  const remove = (id) => {
    myAxios.get(`/api/v1/admin/deleteHospital/${id}`).then((response) => {
      console.log(response.data);
    });
  };
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
                      navigate("/admin/myprofile");
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
              <h1 className="text-align-center display-6">
                <strong> Hospital List</strong>
              </h1>
              <div className="pt-2 mt-2">
                <table class="table table-primary table-striped">
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
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hospitalList.map((hospitals) => (
                      <tr key={hospitals.id}>
                        <td>{hospitals.id}</td>
                        <td>{hospitals.name}</td>
                        <td>{hospitals.email}</td>
                        <td>{hospitals.mobile}</td>
                        <td>{hospitals.altMobile}</td>
                        <td>{hospitals.hospitalAddress.streetLine}</td>
                        <td>{hospitals.hospitalAddress.state}</td>
                        <td>{hospitals.hospitalAddress.district}</td>
                        <td>{hospitals.hospitalAddress.city}</td>
                        <td>{hospitals.hospitalAddress.country}</td>
                        <td>
                          <div className="d-flex">
                            <button className="btn btn-primary mx-2">
                              Update
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => {
                                remove(hospitals.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Container>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default ViewHospital;
