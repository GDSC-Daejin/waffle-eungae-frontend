import React from "react";
import {
  Comment,
  CommentAuthor,
  CommentAuthorWrapper,
  CommentDate,
} from "../../../pages/PostDetail/styled";
import PostTrashIcon from "../../../assets/icons/PostTrashIcon";

const CommentCard = ({ data, isUserEqual }) => {
  return (
    <>
      <CommentAuthorWrapper>
        <CommentAuthor>Eung-ae</CommentAuthor>
        {isUserEqual && <PostTrashIcon size={"small"} />}
      </CommentAuthorWrapper>
      <Comment>{data.content}</Comment>
      <CommentDate>{data.createDate.substring(0, 10)}</CommentDate>
    </>
  );
};

export default CommentCard;
