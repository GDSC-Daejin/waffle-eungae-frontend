import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <Link to={`/post`}>게시글 보러가기</Link>;
};

export default Home;
