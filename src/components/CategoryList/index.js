import React from "react";
import LikeIcon from "../../assets/LikeIcon";
import { IconBlock, ListBlock, Post, Upper } from "./style";

const CategoryList = ({ datas, category }) => {
  return (
    <ListBlock>
      <Upper>
        <div className="topic">{category}</div>
        <div className="more">+ 더보기</div>
      </Upper>
      <hr />
      {datas.map((data) => {
        return (
          <Post key={data.id}>
            <div className="title">{data.title}</div>
            <IconBlock>
              <LikeIcon />
              <div className="number">&nbsp;{data.likeCount}</div>
            </IconBlock>
          </Post>
        );
      })}
    </ListBlock>
  );
};

export default CategoryList;
