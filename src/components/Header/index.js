import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  HeaderBlock,
  MenuWrapper,
  NavigationBlock,
  Empty,
  Logo,
  UserLogin,
  UserName,
  UserNameWrapper,
} from "./style";
import GoogleLoginButton from "../Button/GoogleLoginButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserStore, userStore } from "../../store/user";
import logo from "../../assets/logo.png";

const Header = () => {
  const [user, setUser] = useRecoilState(userStore);
  const currentUser = useRecoilValue(currentUserStore);

  const navigate = useNavigate();

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
      <UserLogin>
        {currentUser.email && (
          <UserNameWrapper>
            <UserName onClick={() => navigate(`/${currentUser.memberId}/post`)}>
              {currentUser.name}
            </UserName>
            님 환영합니다
          </UserNameWrapper>
        )}
        <GoogleLoginButton />
      </UserLogin>
    </HeaderBlock>
  );
};

export default Header;
