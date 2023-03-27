import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NatureInfo from "./pages/NatureInfo";
import Write from "./pages/Write";
import Sidebar from "./components/Sidebar";
import PostDetail from "./pages/PostDetail";
import PostWrite from "./pages/PostWrite";
import MyPost from "./pages/MyPost";
import Post from "./pages/Post";
import PostEdit from "./pages/PostEdit";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={"/*"} element={<Home />} />
        <Route path={"/natureinfo"} element={<NatureInfo />} />
        <Route path={"/write"} element={<Write />} />
        <Route path={"/post/:userName/:postId"} element={<PostDetail />} />
        <Route path={"/post/write"} element={<PostWrite />} />
        <Route path={"/post/edit/:postId"} element={<PostEdit />} />
        <Route path={"/user/post"} element={<MyPost />} />
        <Route path={"/post/*"} element={<Post />} />
      </Routes>
    </>
  );
};

export default Routing;
