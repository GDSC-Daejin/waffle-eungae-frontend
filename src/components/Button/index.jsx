import React, { useState } from "react";
import { LoginButton, LoginButtonWrapper } from "./GoogleLoginButton/styled";
import GoogleLogo from "../../assets/icons/GoogleLogo";
import { useNavigate } from "react-router-dom";

const Button = ({ type, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <LoginButtonWrapper>
      <LoginButton
        onClick={() => {
          onClick && onClick();
          navigate(`/`);
        }}
      >
        {type}
      </LoginButton>
    </LoginButtonWrapper>
  );
};

export default Button;
