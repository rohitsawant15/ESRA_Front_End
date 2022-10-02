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

function ViewFeedback() {
  const navigate = useNavigate();
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    myAxios.get("/api/v1/admin/feedback").then((response) => {
      console.log(response.data);
      setFeedbackList(response.data);
      console.log(feedbackList);
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
                <strong> Feedback List</strong>
              </h1>
              <div className="pt-2 mt-2">
                <table class="table table-info table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile No.</th>
                      <th scope="col">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackList.map((feedback) => (
                      <tr key={feedback.id}>
                        <td>{feedback.id}</td>
                        <td>{feedback.name}</td>
                        <td>{feedback.email}</td>
                        <td>{feedback.mobile}</td>
                        <td>{feedback.comment}</td>
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

export default ViewFeedback;
