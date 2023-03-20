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
import {
  DetailCommentData,
  DetailCommentListData,
  DetailPostData,
} from "../../type";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  console.log(postId);
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);
  const [commentList, setCommentList] = useState(DetailCommentListData);
  const [comment, setComment] = useState(DetailCommentData);

  const initComment = async () => {
    const response = await axios.get(`http://localhost:8080/comment/${postId}`);
    console.log(response.data);
    if (response.status === 200) {
      setCommentList(response.data);
    }
  };

  const initPostData = async () => {
    const response = await axios.get("http://localhost:8080/post");
    if (response.status === 200) {
      setDetailPostData(response.data.content[1]);
      console.log(response.data);
    }
  };

  const addCommentHandler = async () => {
    await axios
      .post(`http://localhost:8080/comment/${postId}`, comment)
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
    initPostData();
    initComment();
  }, []);

  return (
    <PostDetailContainer>
      <PostWrapper>
        <article>
          <PostHead>
            <Category>{detailPostData.category.categoryName}</Category>
            <PostTitle>{detailPostData.title}</PostTitle>
            <PostAuthorWrapper>
              <PostAuthor>Eung-ae</PostAuthor>
              <PostDate>{detailPostData.createDate.substring(0, 10)}</PostDate>
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
          {/*<PostContent>
            <PostDetailData />
          </PostContent>*/}
          {detailPostData.content !== "" ? (
            <Viewer initialValue={detailPostData.content} />
          ) : (
            <div>오류 입니다</div>
          )}
          {postId && detailPostData && (
            <Viewer
              initialValue={detailPostData.content}
              plugins={[tableMergedCell]}
            />
          )}
          {/*<Viewer initialValue={detailPostData.content} />*/}
        </article>
      </PostWrapper>
      <LikeIconWrapper>
        <LikeIcon />
        <Like>11</Like>
      </LikeIconWrapper>
      <CommentListWrapper>
        {commentList.map((data, id) => (
          <CommentWrapper key={id}>
            <CommentAuthor>Eung-ae</CommentAuthor>
            <Comment>{data.content}</Comment>
            <CommentDate>{data.createDate.substring(0, 10)}</CommentDate>
          </CommentWrapper>
        ))}
      </CommentListWrapper>
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
    </PostDetailContainer>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default PostDetail;
