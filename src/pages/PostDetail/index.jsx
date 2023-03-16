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
import { DetailPostData } from "../../type";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const postId = useParams();

  const [commentList, setCommentList] = useState([]);
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);

  const initComment = async () => {
    const response = await axios.get("http://localhost:8080/");
    console.log(response);
  };

  /*useEffect(() => {
    //api로 comment 가져오기
    initComment();
    setCommentList(...commentTempData);
    console.log("추가");
  }, []);*/

  // 코멘트를 추가하는 함수
  const addComment = () => {
    //apis 호출
    console.log("추가");
  };

  const initPostData = async () => {
    const response = await axios.get("http://localhost:8080/post");
    if (response.status === 200) {
      setDetailPostData(response.data.content[0]);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initPostData();
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
        <StackButton onClick={() => alert("asfasf")}>추가하기</StackButton>
      </StackInputButtonWrapper>
    </PostDetailContainer>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default PostDetail;
