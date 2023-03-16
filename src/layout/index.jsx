import React from "react";
import { Route, Routes } from "react-router-dom";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Sidebar from "../component/Sidebar";
import MyPost from "../pages/MyPost";
const Layout = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path={"/post/:postId"} element={<PostDetail />} />
        <Route path={"/post/write"} element={<PostWrite />} />
        <Route path={"/user/post"} element={<MyPost />} />
      </Routes>
    </>
  );
};

export default Layout;
