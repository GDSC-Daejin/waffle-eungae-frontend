import React, { useEffect, useState } from "react";
import {
  PostDetailContainer,
  Category,
  PostTitle,
  PostContent,
  PostDate,
  PostAuthorWrapper,
  PostAuthor,
  PostHead,
  PostWrapper,
  PostIconWrapper,
  PostIcon,
  LikeIconWrapper,
  Like,
  CommentListWrapper,
  CommentWrapper,
  CommentAuthor,
  Comment,
  CommentDate,
  StackInputButtonWrapper,
  StackInput,
  StackButton,
} from "./styled";
import PostEditIcon from "../../assets/icons/PostEditIcon";
import PostTrashIcon from "../../assets/icons/PostTrashIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import { postListData } from "../../apis/Mocks/postListData";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { commentListStore, showCommentList } from "../../store/commentStore";
import commentTempData from "../../apis/Mocks/comment";
import axios from "axios";
import PostDetailData from "../../apis/Mocks/postDetailData";

const PostDetail = () => {
  const [commentList, setCommentList] = useState([]);

  const initComment = async () => {
    const response = await axios.get("http://localhost:8080/");
    console.log(response);
  };

  useEffect(() => {
    //api로 comment 가져오기
    initComment();
    setCommentList(...commentTempData);
    console.log("추가");
  }, []);

  // 코멘트를 추가하는 함수
  const addComment = () => {
    //apis 호출
    console.log("추가");
  };

  // const setCommentList = useSetRecoilState(commentListStore);
  // const commentList = useRecoilValue(showCommentList);

  // const initCommentList = () => {
  //   for (let i in postListData) {
  //     setCommentList((oldCommentList) => [
  //       ...oldCommentList,
  //       {
  //         id: getId(),
  //         author: postListData[i].post.title,
  //         comment: postListData[i].post.content,
  //         uploadDate: postListData[i].uploadDate.substring(0, 10),
  //       },
  //     ]);
  //   }
  //   setComment("");
  // };
  // const addComment = () => {
  //   setCommentList((oldCommentList) => [
  //     ...oldCommentList,
  //     {
  //       id: getId(),
  //       author: "Eung ae2",
  //       comment: comment,
  //       uploadDate: "2022-02-02",
  //     },
  //   ]);
  //   setComment("");
  // };

  // useEffect(initCommentList, []);

  return (
    <PostDetailContainer>
      <PostWrapper>
        <article>
          <PostHead>
            <Category>카테고리</Category>
            <PostTitle>객체지향의 사실과 오해</PostTitle>
            <PostAuthorWrapper>
              <PostAuthor>Eung-ae</PostAuthor>
              <PostDate>2023.01.01</PostDate>
              <PostIconWrapper>
                <PostIcon>
                  <PostEditIcon />
                </PostIcon>
                <PostIcon>
                  <PostTrashIcon />
                </PostIcon>
              </PostIconWrapper>
            </PostAuthorWrapper>
          </PostHead>
          <PostContent>
            <PostDetailData />
          </PostContent>
        </article>
      </PostWrapper>
      <LikeIconWrapper>
        <LikeIcon />
        <Like>11</Like>
      </LikeIconWrapper>
      {/*<CommentListWrapper>
        {commentList.map((data, id) => (
          <CommentWrapper key={id}>
            <CommentAuthor>{data.author}</CommentAuthor>
            <Comment>{data.comment}</Comment>
            <CommentDate>{data.uploadDate}</CommentDate>
          </CommentWrapper>
        ))}
      </CommentListWrapper>*/}
      <StackInputButtonWrapper>
        {/*TODO값 입력하기*/}
        <StackInput
          placeholder={"댓글을 남겨주세요"}
          // value={comment ?? ""} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
          type={"text"}
          // onChange={(e) => setComment(e.target.value)}
          /*onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행*/
        />
        {/*TODO 추가하기 input 값이 없다면 추가 안됨*/}
        <StackButton onClick={() => console.log("123")}>추가하기</StackButton>
      </StackInputButtonWrapper>
    </PostDetailContainer>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default PostDetail;
