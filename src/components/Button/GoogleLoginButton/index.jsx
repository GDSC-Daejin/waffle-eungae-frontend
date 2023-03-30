import React, { useState } from "react";
import GoogleLogo from "../../../assets/icons/GoogleLogo";
import { LoginButton, LoginButtonWrapper } from "./styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserStore, userStore } from "../../../store/user";
import { UserData } from "../../../type";
import axios from "axios";
import Button from "../index";
import ModalContent from "../../Modal/ModalContent";
import Modal from "../../Modal";

const GoogleLoginBuuton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const [user, setUser] = useRecoilState(userStore);
  const currentUser = useRecoilValue(currentUserStore);
  console.log(currentUser);

  const goLogin = () => {
    axios.post(
      "https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle-eungae-frontend.vercel.app/login/oauth2/code/google"
    );
  };

  const logoutHandler = () => {
    setUser(UserData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <LoginButtonWrapper>
      {!currentUser.email ? (
        <a href="https://eung-ae-back.kro.kr/oauth2/authorization/google?redirect_uri=https://waffle.eung-ae-back.kro.kr/login/oauth2/code/google">
          <LoginButton>
            <GoogleLogo />
            구글 로그인
          </LoginButton>
        </a>
      ) : (
        <>
          <Button type={"로그아웃"} onClick={logoutHandler} />
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <ModalContent
              content={"로그아웃 되었습니다."}
              buttonText={"확인"}
            />
          </Modal>
        </>
      )}
    </LoginButtonWrapper>
  );
};

export default GoogleLoginBuuton;
