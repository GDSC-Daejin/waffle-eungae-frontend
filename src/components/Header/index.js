import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  HeaderBlock,
  MenuWrapper,
  NavigationBlock,
  Empty,
  Logo,
} from "./style";
import GoogleLoginButton from "../Button/GoogleLoginButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserStore, userStore } from "../../store/user";
import { InitialMemberData, MemberData } from "../../type";
import logo from "../../assets/logo.png";

const Header = () => {
  const [user, setUser] = useRecoilState(userStore);
  const currentUser = useRecoilValue(currentUserStore);

  const isUserEqual = MemberData.email === currentUser.email;
  console.log(currentUser, isUserEqual, MemberData);
  return (
    /*<HeaderBlock>
    <HeaderBlock>
      <Logo src={logo} alt="logo" />
      <NavLink to="/">홈</NavLink>
      <NavLink to="/natureinfo">환경 정보</NavLink>
      <NavLink to="/post/write">글쓰기</NavLink>
      <Empty />
      <Link className="button" to="/login">
        로그인
      </Link>
    </HeaderBlock>*/
    <HeaderBlock>
      <MenuWrapper>
        <Logo src={logo} alt="logo" />
        <NavLink to="/">홈</NavLink>
        <NavLink to="/natureinfo">환경 정보</NavLink>
        <NavLink to="/post/write">글쓰기</NavLink>
      </MenuWrapper>
      {isUserEqual ? (
        <>
          <div>{currentUser.name}님 환영합니다.</div>
          <button
            onClick={() => {
              setUser(InitialMemberData);
            }}
          >
            로그아웃
          </button>
        </>
      ) : (
        <GoogleLoginButton />
      )}
    </HeaderBlock>
  );
};

export default Header;
