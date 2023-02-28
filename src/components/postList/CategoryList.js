import React from "react";
import { ListBlock, Post } from "./style";

const CategoryList = ({ datas, category }) => {
  return (
    <ListBlock>
      <div className="topic">{category}</div>
      {datas.map((data) => {
        return (
          <Post>
            <div className="title">{data.title}</div>
          </Post>
        );
      })}
    </ListBlock>
  );
};

export default CategoryList;
