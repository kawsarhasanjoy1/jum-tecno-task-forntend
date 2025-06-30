import React, { ReactNode } from "react";
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    window.location.href = "/login";
  }

  return children;
};

export default PrivateRoute;
