import React from "react";
import GoogleLogo from "../../../assets/icons/GoogleLogo";
import { LoginButton, LoginButtonWrapper } from "./styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserStore, userStore } from "../../../store/user";
import { MemberData } from "../../../type";
import axios from "axios";

const GoogleLoginBuuton = () => {
  const [user, setUser] = useRecoilState(userStore);
  const currentUser = useRecoilValue(currentUserStore);

  const goLogin = () => {
    axios.post(
      "https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle-eungae-frontend.vercel.app/login/oauth2/code/google"
    );
  };

  return (
    <LoginButtonWrapper>
      <a href="https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle.eung-ae-back.kro.kr/login/oauth2/code/google">
        <LoginButton>
          <GoogleLogo />
          a.구글 로그인
        </LoginButton>
      </a>
      <LoginButton
        onClick={() => {
          //setUser(MemberData);
          // eslint-disable-next-line no-restricted-globals
          location.href =
            "https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle.eung-ae-back.ko.kr/login/oauth2/code/google";
        }}
      >
        <GoogleLogo />
        구글 로그인
      </LoginButton>
    </LoginButtonWrapper>
  );
};

export default GoogleLoginBuuton;
