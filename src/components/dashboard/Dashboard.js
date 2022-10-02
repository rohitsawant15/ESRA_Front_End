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

import AdminDashboard from "./AdminDashboard";
import { useNavigate } from "react-router";
import { getCurrentUser, isAdminLoggedIn, loggedOut } from "../../auth/auth";

const drawerWidth = 240;

function Dashboard() {
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
          <AdminDashboard />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
