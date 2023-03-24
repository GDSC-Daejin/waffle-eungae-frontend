import React from "react";
import {
  Comment,
  CommentAuthor,
  CommentDate,
} from "../../pages/PostDetail/styled";

const CommentCard = ({ data }) => {
  console.log(`댓글 데이터 : ${data}`);
  return (
    <>
      <CommentAuthor>Eung-ae</CommentAuthor>
      <Comment>{data.content}</Comment>
      <CommentDate>{data.createDate.substring(0, 10)}</CommentDate>
    </>
  );
};

export default CommentCard;
