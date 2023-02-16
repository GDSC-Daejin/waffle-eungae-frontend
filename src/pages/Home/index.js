import React from "react";
import { RecentPost, Post } from "./style";

const Home = () => {
  return (
    <div>
      <RecentPost>
        <div className="topic">최신글</div>
        <hr></hr>
        <Post>
          <div className="category">dmddo</div>
          <div className="title">wpahr</div>
        </Post>
        <Post>
          <div className="category">dmddo</div>
          <div className="title">wpahr</div>
        </Post>
        <Post>
          <div className="category">dmddo</div>
          <div className="title">wpahr</div>
        </Post>
        <Post>
          <div className="category">dmddo</div>
          <div className="title">wpahr</div>
        </Post>
      </RecentPost>
    </div>
  );
};

export default Home;
