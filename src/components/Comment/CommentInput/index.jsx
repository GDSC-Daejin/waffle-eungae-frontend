import React, { useState } from "react";
import axios from "axios";
import {
  CommentWriter,
  CommentInBox,
  CommentInBoxAuthor,
  CommentInBoxText,
  SubmitButton,
} from "./styled";
import { useRecoilValue } from "recoil";
import { currentUserStore } from "../../../store/user";

const CommentInput = ({ postId, initData }) => {
  const [comment, setComment] = useState({
    commentId: 0,
    content: "",
    createDate: "",
    postId: parseInt(postId),
  });
  const currentUser = useRecoilValue(currentUserStore);

  const addCommentHandler = async () => {
    if (currentUser.email) {
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
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <CommentWriter>
      <CommentInBox>
        <CommentInBoxAuthor>
          {currentUser.name ?? "로그인이 필요합니다."}
        </CommentInBoxAuthor>
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
