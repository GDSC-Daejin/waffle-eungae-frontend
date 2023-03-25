import React, { useEffect, useState } from "react";
import {
  Comment,
  CommentAuthor,
  CommentDate,
  CommentSection,
  CommentWrapper,
  StackButton,
  StackInput,
  StackInputButtonWrapper,
} from "../../pages/PostDetail/styled";
import axios from "axios";
import { DetailCommentData, DetailCommentListData } from "../../type";

const CommentList = ({ postId }) => {
  const [commentList, setCommentList] = useState(DetailCommentListData);
  const [comment, setComment] = useState({
    commentId: 0,
    content: "",
    createDate: "",
    postId: postId,
  });

  const initComment = async () => {
    const response = await axios.get(`https://eung-ae-back.kro.kr/${postId}`);
    console.log(response.data);
    if (response.status === 200) {
      setCommentList(response.data);
    }
  };

  const addCommentHandler = async () => {
    await axios
      .post(`https://eung-ae-back.kro.kr/api/v1/${postId}`, comment)
      .then(
        (res) => alert("성공"),
        setComment(() => {
          return { ...comment, content: "" };
        })
      )
      .catch((err) => console.log(err));
    initComment();
  };

  useEffect(() => {
    initComment();
  }, []);

  return (
    <>
      <CommentSection>
        {commentList.map((data, id) => (
          <CommentWrapper key={id}>
            <CommentAuthor>Eung-ae</CommentAuthor>
            <Comment>{data.content}</Comment>
            <CommentDate>{data.createDate.substring(0, 10)}</CommentDate>
          </CommentWrapper>
        ))}
      </CommentSection>
      <StackInputButtonWrapper>
        {/*TODO값 입력하기*/}
        <StackInput
          placeholder={"댓글을 남겨주세요"}
          value={comment.content ?? ""} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
          type={"text"}
          onChange={(e) =>
            setComment(() => {
              return { ...comment, content: e.target.value };
            })
          }
          /*onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행*/
        />
        {/*TODO 추가하기 input 값이 없다면 추가 안됨*/}
        <StackButton onClick={addCommentHandler}>추가하기</StackButton>
      </StackInputButtonWrapper>
    </>
  );
};

export default CommentList;
