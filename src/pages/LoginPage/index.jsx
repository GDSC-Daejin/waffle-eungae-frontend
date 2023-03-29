import React, { useEffect } from "react";
import axios from "axios";

const LoginPage = () => {
  const getUserInfo = async () => {
    const response = await axios
      .get(`https://eung-ae-back.kro.kr/loginEmail`)
      .then((res) => console.log(res));
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return <div>로그인 텍스트</div>;
};

export default LoginPage;
