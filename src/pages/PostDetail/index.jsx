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
} from "./styled";
import PostEditIcon from "../../assets/icons/PostEditIcon";
import PostTrashIcon from "../../assets/icons/PostTrashIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import axios from "axios";
import { DetailPostData } from "../../type";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../../components/CommentList";

const PostDetail = () => {
  const { postId } = useParams();
  console.log(postId);
  const [isLoading, setIsLoading] = useState(true);
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);
  const navigate = useNavigate();

  const initDetailPostData = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/post/detail/${postId}`
    );
    console.log(response);
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

  const addLikeHandler = async () => {
    await axios.post(`https://eung-ae-back.kro.kr/post/${postId}/like`);
  };

  useEffect(() => {
    initDetailPostData();
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
                    <PostIcon onClick={() => navigate(`/post/edit/${postId}`)}>
                      <PostEditIcon />
                    </PostIcon>
                    <PostIcon>
                      <PostTrashIcon />
                    </PostIcon>
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
          <CommentList postId={postId} />
        </PostDetailContainer>
      ) : (
        <div>로딩 중</div>
      )}
    </>
  );
};

export default PostDetail;
