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
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import { myAxios } from "../../services/Helper";
import { loggedOut } from "../../auth/auth";

function ViewPoliceStation() {
  const navigate = useNavigate();

  const [stationList, setStationList] = React.useState([]);

  React.useEffect(() => {
    myAxios.get("/api/v1/admin/availablePoliceStations").then((response) => {
      console.log(response.data);
      setStationList(response.data);
      console.log(stationList);
    });
  }, []);
  const remove = (id) => {
    myAxios.get(`/api/v1/admin/deletePoliceStation/${id}`).then((response) => {
      console.log(response.data);
    });
  };
  const [login, setLogin] = React.useState(false);
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
                <strong> Police Station List</strong>
              </h1>
              <div className="pt-2 mt-2">
                <table class="table table-primary table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Police Station Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile No.</th>
                      <th scope="col">Alt No.</th>
                      <th scope="col">Address</th>
                      <th scope="col">State</th>
                      <th scope="col">District</th>
                      <th scope="col">City</th>
                      <th scope="col">Country</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stationList.map((stations) => (
                      <tr key={stations.id}>
                        <td>{stations.id}</td>
                        <td>{stations.name}</td>
                        <td>{stations.email}</td>
                        <td>{stations.mobileNo}</td>
                        <td>{stations.altMobileNo}</td>
                        <td>{stations.policeStationAddress.streetLine}</td>
                        <td>{stations.policeStationAddress.state}</td>
                        <td>{stations.policeStationAddress.district}</td>
                        <td>{stations.policeStationAddress.city}</td>
                        <td>{stations.policeStationAddress.country}</td>
                        <td>
                          <div className="d-flex">
                            <button className="btn btn-primary mx-2">
                              Update
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => {
                                remove(stations.id);
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

export default ViewPoliceStation;
