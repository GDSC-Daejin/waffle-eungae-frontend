import React from "react";
import Button from "../Button";
import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
  z-index: 999;
  width: 300px;
  & div {
    justify-content: flex-end;
  }
`;

const modalType = [
  {
    content: "로그인 성공하였습니다.",
    buttonText: "확인",
    address: "/",
  },
  {
    content: "로그아웃 되었습니다.",
    buttonText: "확인",
    address: -1,
  },
  {
    content: "로그인이 필요합니다.",
    buttonText: "확인",
    address: -1,
  },
];

const ModalContent = ({ type }) => {
  return (
    <ModalBody>
      <h1 style={{ fontSize: `${fontSizes.textM}`, padding: "10px" }}>
        {modalType[type].content}
      </h1>
      <Button
        text={modalType[type].buttonText}
        address={modalType[type].address}
      />
    </ModalBody>
  );
};

export default ModalContent;
