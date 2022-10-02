export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};
export const isAdminLoggedIn = () => {
  let data = JSON.parse(localStorage.getItem("data")).role;
  if (data != null && data == "ROLE_ADMIN") {
    return true;
  } else {
    return false;
  }
};
export const isHospitalLoggedIn = () => {
  let data = JSON.parse(localStorage.getItem("data")).role;
  if (data != null && data == "ROLE_HOSPITAL") {
    return true;
  } else {
    return false;
  }
};
export const isPoliceStationLoggedIn = () => {
  let data = JSON.parse(localStorage.getItem("data")).role;
  if (data != null && data == "ROLE_POLICESTATION") {
    return true;
  } else {
    return false;
  }
};
export const isReported = () => {
  let data = localStorage.getItem("nearestHospital");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};
export const adminData = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};
export const hospitalData = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};
export const policeStationData = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

export const loggedOut = (next) => {
  localStorage.clear();
  next();
};
export const getCurrentUser = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).username;
  } else {
    return undefined;
  }
};
