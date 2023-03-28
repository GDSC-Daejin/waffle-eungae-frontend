import React, { useEffect, useState } from "react";
import "./post.css";
import {
  PostDetailContainer,
  Category,
  PostTitle,
  PostDate,
  PostAuthorWrapper,
  PostAuthor,
  PostHead,
  PostWrapper,
  PostIconWrapper,
  PostIcon,
  LikeIconWrapper,
  Like,
  CommentSection,
  CommentWrapper,
  PostContent,
  CommentCount,
} from "./styled";
import PostEditIcon from "../../assets/icons/PostEditIcon";
import PostTrashIcon from "../../assets/icons/PostTrashIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import axios from "axios";
import { DetailCommentListData, DetailPostData } from "../../type";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../../components/Comment/CommentCard";
import { useRecoilValue } from "recoil";
import { currentUserStore } from "../../store/user";
import CommentInput from "../../components/Comment/CommentInput";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080", // 서버 domain
  },
  withCredentials: true,
};

const PostDetail = () => {
  const { postId } = useParams();
  const { userName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  const [commentList, setCommentList] = useState(DetailCommentListData);
  const currentUser = useRecoilValue(currentUserStore);

  const isUserEqual = currentUser.email === detailPostData.member.email;
  console.log(
    `${currentUser.email} ++++ ${isUserEqual} ++++ ${detailPostData.member.email}`
  );

  const navigate = useNavigate();

  const initDetailPostData = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/detail/${postId}`
    );
    if (response.status === 200) {
      setDetailPostData(() => {
        return {
          ...detailPostData,
          content: response.data.content,
          category: response.data.category,
          createDate: response.data.createDate,
          postId: response.data.postId,
          title: response.data.title,
          fileName: response.data.fileName,
          filePath: response.data.filePath,
          member: response.data.member,
          likeCount: response.data.likeCount,
        };
      });
      setIsLoading(false);
    }
  };

  const initComment = async () => {
    const response = await axios.get(`https://eung-ae-back.kro.kr/${postId}`);
    if (response.status === 200) {
      setCommentList(response.data);
    }
  };

  const addLikeHandler = async () => {
    await axios.post(
      `https://eung-ae-back.kro.kr/${postId}/like`,
      {},
      {
        withCredentials: true,
      }
    );
  };

  useEffect(() => {
    initDetailPostData();
    initComment();
  }, []);

  return (
    <>
      {!isLoading ? (
        <PostDetailContainer>
          <PostWrapper>
            <article>
              <PostHead>
                <Category>{detailPostData.category.categoryName}</Category>
                <PostTitle>{detailPostData.title}</PostTitle>
                <PostAuthorWrapper>
                  <PostAuthor>{detailPostData.member.name}</PostAuthor>
                  <PostDate>
                    {detailPostData.createDate.substring(0, 10)}
                  </PostDate>
                  <PostIconWrapper>
                    {isUserEqual && (
                      <>
                        <PostIcon
                          onClick={() => navigate(`/post/edit/${postId}`)}
                        >
                          <PostEditIcon />
                        </PostIcon>
                        <PostIcon>
                          <PostTrashIcon />
                        </PostIcon>
                      </>
                    )}
                  </PostIconWrapper>
                </PostAuthorWrapper>
              </PostHead>
              <Viewer initialValue={detailPostData.content} />
            </article>
          </PostWrapper>
          <LikeIconWrapper onClick={addLikeHandler}>
            <LikeIcon />
            <Like>{detailPostData.likeCount}</Like>
          </LikeIconWrapper>
          <CommentSection>
            <CommentCount>댓글 {commentList.length}</CommentCount>
            {commentList.map((data, id) => (
              <CommentWrapper key={id}>
                <CommentCard data={data} isUserEqual={isUserEqual} />
              </CommentWrapper>
            ))}
            <CommentInput postId={postId} initData={initComment} />
          </CommentSection>
        </PostDetailContainer>
      ) : (
        <div>로딩 중</div>
      )}
    </>
  );
};

export default PostDetail;
