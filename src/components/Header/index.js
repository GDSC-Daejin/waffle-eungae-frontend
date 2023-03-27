import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderBlock, MenuWrapper, NavigationBlock } from "./style";
import GoogleLoginButton from "../Button/GoogleLoginButton";

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <MenuWrapper>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/natureinfo">환경 정보</NavLink>
          <NavLink to="/post/write">글쓰기</NavLink>
        </MenuWrapper>
        <GoogleLoginButton />
      </HeaderBlock>
    </>
  );
};

export default Header;
