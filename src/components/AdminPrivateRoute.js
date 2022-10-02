import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  isAdminLoggedIn,
  isHospitalLoggedIn,
  isLoggedIn,
  isPoliceStationLoggedIn,
  isReported,
} from "../auth/auth";

export const AdminPrivateRoute = () => {
  return isAdminLoggedIn() ? <Outlet /> : <Navigate to={"/signin"} />;
};
export const HospitalPrivateRoute = () => {
  return isHospitalLoggedIn() ? <Outlet /> : <Navigate to={"/signin"} />;
};
export const PoliceStationPrivateRoute = () => {
  return isPoliceStationLoggedIn() ? <Outlet /> : <Navigate to={"/signin"} />;
};
export const ReporedPrivateRoute = () => {
  return isReported() ? <Outlet /> : <Navigate to={"/reportaccident"} />;
};
