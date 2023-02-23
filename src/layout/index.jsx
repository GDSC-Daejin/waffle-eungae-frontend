import React from "react";
import { Route, Routes } from "react-router-dom";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
const Layout = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<PostDetail />} />
      <Route path={"/post/write"} element={<PostWrite />} />
    </Routes>
  );
};

export default Layout;
