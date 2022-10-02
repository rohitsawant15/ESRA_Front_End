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

import { useNavigate } from "react-router";
import { Container } from "@mui/system";
import { getCurrentUser, isAdminLoggedIn, loggedOut } from "../../auth/auth";
//import FormFragment from "../fragments/FormFragment";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

function MyProfile() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("token") == null || !isAdminLoggedIn()) {
      navigate("/");
    } else {
      setLogin(isAdminLoggedIn());
      setUser(getCurrentUser());
    }
  }, [login]);

  const logout = () => {
    loggedOut(() => {
      setLogin(false);
      navigate("/");
    });
  };

  return (
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
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Toolbar />

          <div>
            <section className="bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mb-4 mb-sm-5">
                    <div className="card card-style1 border-0">
                      <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div className="row align-items-end">
                          <div className="col-lg-6 mb-4 mb-lg-0">
                            <img
                              className="mx-5"
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt="img"
                            />
                          </div>
                          <div className="col-lg-6 px-xl-10">
                            <ul className="list-unstyled mb-1-9">
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-danger me-2 font-weight-600">
                                  Username:
                                </span>
                                {user}
                              </li>
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-secondary me-2 font-weight-600">
                                  Role:
                                </span>
                                Admin
                              </li>
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-secondary me-2 font-weight-600">
                                  Email:
                                </span>
                                {user}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default MyProfile;
