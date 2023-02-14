import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/natureinfo">환경 정보</Link>
      <Link to="/write">글쓰기</Link>
    </div>
  );
};

export default Header;
