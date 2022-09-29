import {Routes,Route} from "react-router-dom";
import React from "react";
import Login from "../Login/Login"
import PrivateRoutes from "./PrivateRoutes";
import Signup from "../Login/Signup"
const AllRoutes=()=>{
  return (
    <>
    <Routes>
    <Route path="/login" element={<Login />} />

    <Route path="/signup" element={<Signup />} />

    <Route />

    <Route />

    <Route />

    </Routes>
    </>
  )
}
export default AllRoutes