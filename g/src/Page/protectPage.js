import React from "react";
import { Navigate } from "react-router-dom";

const ProtectPage = ({ islog, children }) => {
  if (!islog) {
    return <Navigate to="/error" replace />;
  }
  return children;
};
export default ProtectPage;
