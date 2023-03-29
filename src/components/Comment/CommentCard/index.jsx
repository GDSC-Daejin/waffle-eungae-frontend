import React from "react";
import {
  Comment,
  CommentAuthor,
  CommentAuthorWrapper,
  CommentDate,
} from "../../../pages/PostDetail/styled";
import PostTrashIcon from "../../../assets/icons/PostTrashIcon";

const CommentCard = ({ data, isUserEqual }) => {
  console.log(data.member);
  return (
    <>
      <CommentAuthorWrapper>
        {data.member ? (
          <CommentAuthor>{data.member.name}</CommentAuthor>
        ) : (
          <CommentAuthor>null</CommentAuthor>
        )}
        {isUserEqual && <PostTrashIcon size={"small"} />}
      </CommentAuthorWrapper>
      <Comment>{data.content}</Comment>
      <CommentDate>{data.createDate.substring(0, 10)}</CommentDate>
    </>
  );
};

export default CommentCard;
