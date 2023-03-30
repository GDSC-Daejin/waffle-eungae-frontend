import React from "react";
import Button from "../Button";
import styled from "styled-components";

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;

const ModalContent = ({ content, buttonText }) => {
  return (
    <ModalBody>
      <h1>{content}</h1>
      <Button type={buttonText} />
    </ModalBody>
  );
};

export default ModalContent;
