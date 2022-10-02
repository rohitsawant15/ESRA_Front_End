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
import { loggedOut } from "../../auth/auth";
import { myAxios } from "../../services/Helper";

function ViewReportList() {
  const navigate = useNavigate();
  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    myAxios.get("/api/v1/admin/accidentHistory").then((response) => {
      console.log(response.data);
      setReportList(response.data);
      console.log(reportList);
    });
  }, []);

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
                <strong> Reported List</strong>
              </h1>
              <div className="pt-2 mt-2">
                <table class="table table-danger table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Vehicle No.</th>
                      <th scope="col">Latitude</th>
                      <th scope="col">Longitude</th>
                      <th scope="col">Passenger</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportList.map((report) => (
                      <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.username}</td>
                        <td>{report.vehicalNo}</td>
                        <td>{report.coordinates.latitude}</td>
                        <td>{report.coordinates.longitude}</td>
                        <td>{report.passengerCount}</td>
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

export default ViewReportList;
