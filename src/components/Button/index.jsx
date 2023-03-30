import React, { useState } from "react";
import { LoginButton, LoginButtonWrapper } from "./GoogleLoginButton/styled";
import GoogleLogo from "../../assets/icons/GoogleLogo";
import { useNavigate } from "react-router-dom";

const Button = ({ text, address, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <LoginButtonWrapper>
      <LoginButton
        onClick={() => {
          onClick && onClick();
          address && navigate(address);
        }}
      >
        {text}
      </LoginButton>
    </LoginButtonWrapper>
  );
};

export default Button;
