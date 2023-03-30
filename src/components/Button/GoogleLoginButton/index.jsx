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
  const [user, setUser] = useRecoilState(userStore);
  const currentUser = useRecoilValue(currentUserStore);

  const logoutHandler = () => {
    setUser(UserData);
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
          <Button text={"로그아웃"} onClick={logoutHandler} />
          {/*<Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <ModalContent type={1} />
          </Modal>*/}
        </>
      )}
    </LoginButtonWrapper>
  );
};

export default GoogleLoginBuuton;
