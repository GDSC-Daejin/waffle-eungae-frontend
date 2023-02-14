import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NatureInfo from "./pages/NatureInfo";
import Write from "./pages/Write";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={"/*"} element={<Home />} />
        <Route path={"/natureinfo"} element={<NatureInfo />} />
        <Route path={"/write"} element={<Write />} />
      </Routes>
    </>
  );
};

export default Routing;
