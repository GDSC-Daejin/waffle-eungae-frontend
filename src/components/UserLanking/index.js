import React from "react";
import { UserLankingWrapper, User } from "./style";

const UserLanking = () => {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <UserLankingWrapper>
      <div className="letter">실시간 랭킹</div>
      {users.map((user, index) => {
        return <User key={index}>{user}</User>;
      })}
    </UserLankingWrapper>
  );
};

export default UserLanking;
