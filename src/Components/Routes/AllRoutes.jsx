import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Signup from "../Login/Signup";
import shopAll from "../Shops/ShopAll";
import LandingPage from "../LandingPage/LandingPage";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/shopall" element={<shopAll />} />

        <Route />

        <Route />
      </Routes>
    </>
  );
};
export default AllRoutes;
