import React, { useState } from "react";
import {
  StackButton,
  StackInput,
  StackInputButtonWrapper,
} from "../../../pages/PostDetail/styled";
import axios from "axios";
import {
  CommentWriter,
  CommentInBox,
  CommentInBoxAuthor,
  CommentInBoxText,
  SubmitButton,
} from "./styled";

const CommentInput = ({ postId, initData }) => {
  const [comment, setComment] = useState({
    commentId: 0,
    content: "",
    createDate: "",
    postId: parseInt(postId),
  });

  const addCommentHandler = async () => {
    await axios
      .post(`https://eung-ae-back.kro.kr/${postId}`, comment, {
        withCredentials: true,
      })
      .then(
        (res) => alert("성공"),
        setComment(() => {
          return { ...comment, content: "" };
        })
      )
      .catch((err) => console.log(err));
    initData();
  };

  return (
    <CommentWriter>
      <CommentInBox>
        <CommentInBoxAuthor>Eung-ae</CommentInBoxAuthor>
        <CommentInBoxText
          placeholder={"댓글을 남겨주세요"}
          value={comment.content ?? ""}
          type={"text"}
          onChange={(e) =>
            setComment(() => {
              return { ...comment, content: e.target.value };
            })
          }
        />
      </CommentInBox>
      <SubmitButton onClick={addCommentHandler}>등록</SubmitButton>
      {/*<StackInput
        placeholder={"댓글을 남겨주세요"}
        value={comment.content ?? ""}
        type={"text"}
        onChange={(e) =>
          setComment(() => {
            return { ...comment, content: e.target.value };
          })
        }
      />
      <StackButton onClick={addCommentHandler}>추가하기</StackButton>*/}
    </CommentWriter>
  );
};

export default CommentInput;
