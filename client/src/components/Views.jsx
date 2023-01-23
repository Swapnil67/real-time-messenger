import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/SignUp";

const  Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  ) 
}

export default Views;