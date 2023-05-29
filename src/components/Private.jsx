import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function Private() {
  const auth = localStorage.getItem("User");
  return auth ? <Outlet /> : <Navigate to="/login"></Navigate>;
}

export default Private;
