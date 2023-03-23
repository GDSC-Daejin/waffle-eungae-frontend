import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderBlock } from "./style";

const Header = () => {
  return (
    <HeaderBlock>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/natureinfo">환경 정보</NavLink>
      <NavLink to="/post/write">글쓰기</NavLink>
    </HeaderBlock>
  );
};

export default Header;
