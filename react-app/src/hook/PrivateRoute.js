import { Navigate } from "react-router-dom";

export default function privateRoute({isLogin, children}){
  return isLogin ? children : <Navigate to="/login" replace/>
}