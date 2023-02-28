import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Empty, HeaderBlock } from "./style";

const Header = () => {
  return (
    <HeaderBlock>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/natureinfo">환경 정보</NavLink>
      <NavLink to="/write">글쓰기</NavLink>
      <Empty />
      <Link className="button" to="/login">
        로그인
      </Link>
    </HeaderBlock>
  );
};

export default Header;
