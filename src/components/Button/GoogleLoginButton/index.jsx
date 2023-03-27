import React from "react";
import GoogleLogo from "../../../assets/icons/GoogleLogo";
import { LoginButton, LoginButtonWrapper } from "./styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserStore, userStore } from "../../../store/user";
import { MemberData } from "../../../type";

const GoogleLoginBuuton = () => {
  const [user, setUser] = useRecoilState(userStore);
  const currentUser = useRecoilValue(currentUserStore);

  return (
    <LoginButtonWrapper>
      <a href="https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle-eungae-frontend.kro.kr/login/oauth2/code/google">
        <LoginButton onClick={() => setUser(MemberData)}>
          <GoogleLogo />
          구글 로그인
        </LoginButton>
      </a>
      {/*<LoginButton onClick={() => setUser(MemberData)}>
        <GoogleLogo />
        구글 로그인
      </LoginButton>*/}
    </LoginButtonWrapper>
  );
};

export default GoogleLoginBuuton;
