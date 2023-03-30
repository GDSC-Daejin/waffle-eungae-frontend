import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userStore } from "../../store/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useRecoilState(userStore);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    await axios
      .get(`https://eung-ae-back.kro.kr/loginEmail`, { withCredentials: true })
      .then((res) => {
        setUser(() => {
          return { ...user, email: res.data };
        });
        alert("로그인 성공하였습니다.");
      })
      .catch((error) => alert("로그인 실패"));
  };
  useEffect(() => {
    getUserInfo();
    console.log("로그인 렌더");
  }, []);

  return <div>로그인 텍스트</div>;
};

export default LoginPage;
