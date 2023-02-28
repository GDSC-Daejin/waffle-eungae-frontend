import React from "react";
import { ListBlock, Post } from "./style";

const RecentList = ({ datas }) => {
  return (
    <ListBlock>
      {datas.map((data) => {
        return (
          <Post>
            <div className="category">{data.category_id}</div>
            {/*카테고리 아이디를 넣어서 카테고리 이름을 반환하는 훅을 만들어서 사용하면 될 듯?*/}
            <div className="title">{data.title}</div>
          </Post>
        );
      })}
    </ListBlock>
  );
};

export default RecentList;
