import React from "react";
import LikeIcon from "../../assets/LikeIcon";
import { IconBlock, ListBlock, Post } from "./style";

const CategoryList = ({ datas, category }) => {
  return (
    <ListBlock>
      <div className="topic">{category}</div>
      <hr />
      {datas.map((data) => {
        return (
          <Post>
            <div className="title">{data.title}</div>
            <IconBlock>
              <LikeIcon />
              <div className="number">&nbsp;11</div>
            </IconBlock>
          </Post>
        );
      })}
    </ListBlock>
  );
};

export default CategoryList;
