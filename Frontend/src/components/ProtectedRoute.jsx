import { Children } from "react";
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("spendyx-token");

  if(!token){
    return <Navigate to="/login" />;
  }

  return children;
}
