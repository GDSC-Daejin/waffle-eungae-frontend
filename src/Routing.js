import React from "react";
import Sidebar from "./component/Sidebar";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import PostWrite from "./pages/PostWrite";
import MyPost from "./pages/MyPost";
import Post from "./pages/Post";

const Routing = () => {
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

export default Routing;
