import { myAxios } from "./Helper";

export const register1 = (user) => {
  return myAxios
    .post("/api/v1/register", user)
    .then((response) => response.data);
};
export const Login = (user) => {
  return myAxios.post("/api/v1/login", user).then((response) => response.data);
};
export const ReportAccidents = (data) => {
  return myAxios
    .post("/api/v1/informaccident", data)
    .then((response) => response.data);
};

export const AddHospital = (data) => {
  return myAxios
    .post("/api/v1/admin/addNewHospital", data)
    .then((response) => response.data);
};

export const GetHospitalList = () => {
  return myAxios
    .get("/api/v1/admin/availableHospitals")
    .then((response) => response.data);
};
export const SubmitFeedback = (data) => {
  return myAxios
    .post("/api/v1/addFeedback", data)
    .then((response) => response.data);
};
export const AddPoliceStation = (data) => {
  return myAxios
    .post("/api/v1/admin/addNewPoliceStation", data)
    .then((response) => response.data);
};
export const GetPoliceStationList = () => {
  return myAxios
    .get("/api/v1/admin/availablePoliceStation")
    .then((response) => response.data);
};
export const GetFeedbackList = () => {
  return myAxios
    .get("/api/v1/admin/feedback")
    .then((response) => response.data);
};
export const GetReportedAccidentList = () => {
  return myAxios
    .get("/api/v1/admin/accidentHistory")
    .then((response) => response.data);
};
