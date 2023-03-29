import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userStore } from "../../store/user";

const LoginPage = () => {
  const [user, setUser] = useRecoilState(userStore);

  const getUserInfo = async () => {
    const response = await axios
      .get(`https://eung-ae-back.kro.kr/loginMember`, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((error) => alert("실패"));
    if (response.status === 200) {
      setUser(response);
    }
    console.log(response);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return <div>로그인 텍스트</div>;
};

export default LoginPage;
