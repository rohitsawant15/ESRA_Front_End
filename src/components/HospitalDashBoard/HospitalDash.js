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
import { getCurrentUser, isHospitalLoggedIn, loggedOut } from "../../auth/auth";
const drawerWidth = 240;

function HospitalDash() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("token") == null || !isHospitalLoggedIn()) {
      navigate("/");
    } else {
      setLogin(isHospitalLoggedIn());
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
          style={{ background: "#dc3545" }}
        >
          <Toolbar>
            <Typography variant="h4" noWrap component="div">
              <strong>Hospital</strong> Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem button disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/hospital/dashboard");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Hospital Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/hospital/myprofile");
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
        </Box>
      </Box>
    </>
  );
}

export default HospitalDash;
