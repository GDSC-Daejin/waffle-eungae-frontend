import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderBlock } from "./style";

const Header = () => {
  return (
    <HeaderBlock>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/natureinfo">환경 정보</NavLink>
      <NavLink to="/post/write">글쓰기</NavLink>
      <a
        href={`https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle-eungae-frontend.vercel.app/login/oauth2/code/google`}
      >
        로그인
      </a>
    </HeaderBlock>
  );
};

export default Header;
