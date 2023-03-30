import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userStore } from "../../store/user";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import styled from "styled-components";
import Button from "../../components/Button";
import ModalContent from "../../components/Modal/ModalContent";
const LoginPage = () => {
  const [user, setUser] = useRecoilState(userStore);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const getUserInfo = async () => {
    await axios
      .get(`https://eung-ae-back.kro.kr/list`, { withCredentials: true })
      .then((res) => {
        setUser(() => {
          return {
            ...user,
            memberId: res.data[0],
            email: res.data[1],
            name: res.data[2],
            level: res.data[3],
          };
        });
        setIsModalOpen(true);
        console.log(res);
      })
      .catch((error) => alert("로그인 실패"));
  };

  const handleModalClose = () => setIsModalOpen(false);

  const goHome = () => {
    navigate(`/`);
    setIsModalOpen(false);
  };

  useEffect(() => {
    getUserInfo();
    console.log("로그인 렌더");
  }, []);

  return (
    <Modal isOpen={isModalOpen} onClose={handleModalClose}>
      <ModalContent content={"로그인이 성공하였습니다."} buttonText={"확인"} />
    </Modal>
  );
};

export default LoginPage;
