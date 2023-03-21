import React from "react";
import { Route, Routes } from "react-router-dom";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Sidebar from "../components/Sidebar";
import MyPost from "../pages/MyPost";
import Post from "../pages/Post";
const Layout = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path={"/post/:postId"} element={<PostDetail />} />
        <Route path={"/post/write"} element={<PostWrite />} />
        <Route path={"/user/post"} element={<MyPost />} />
        <Route path={"/post/*"} element={<Post />} />
      </Routes>
    </>
  );
};

export default Layout;
