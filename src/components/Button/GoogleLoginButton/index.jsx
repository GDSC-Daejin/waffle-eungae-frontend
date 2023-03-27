import React from "react";
import GoogleLogo from "../../../assets/icons/GoogleLogo";
import { LoginButton, LoginButtonWrapper } from "./styled";

const GoogleLoginBuuton = () => {
  return (
    <LoginButtonWrapper>
      <a href="https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle-eungae-frontend.vercel.app/login/oauth2/code/google">
        <LoginButton>
          <GoogleLogo />
          구글 로그인
        </LoginButton>
      </a>
    </LoginButtonWrapper>
  );
};

export default GoogleLoginBuuton;
