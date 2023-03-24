import React from "react";
import LikeIcon from "../../assets/LikeIcon";
import EyeIcon from "../../assets/EyeIcon";
import { IconBlock, ListBlock, Post, StringBlock, Upper } from "./style";
const RecentList = ({ datas }) => {
  return (
    <ListBlock>
      <Upper>
        <div className="topic">최신글</div>
        <div className="more">+ 더보기</div>
      </Upper>
      <hr />
      {datas.map((data) => {
        return (
          <Post key={data.id}>
            <StringBlock>
              <div className="category">{data.categoryName}</div>
              <div className="title">{data.title}</div>
            </StringBlock>
            <IconBlock>
              <LikeIcon />
              <div className="number">&nbsp;{data.likeCount}</div>
            </IconBlock>
            <IconBlock>
              <EyeIcon width="16px" />
              <div className="number">&nbsp;{data.viewCount}</div>
            </IconBlock>
          </Post>
        );
      })}
    </ListBlock>
  );
};

export default RecentList;
