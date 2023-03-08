import React from "react";
import { postListData } from "../../api/Mocks/postListData";
import { PostDetailContainer, PostWrapper } from "../PostDetail/styled";
import {
  PostBox,
  PostInformation,
  PostIconWrapper,
  PostInformationWrapper,
  PostLeftInformation,
  MyPostTitle,
  MyPostContent,
  MyPostAuthor,
} from "./styled";
import LikeIcon from "../../assets/icons/LikeIcon";
import CommentIcon from "../../assets/icons/CommentIcon";

const MyPost = () => {
  return (
    <PostDetailContainer>
      <PostWrapper>
        {postListData.map((data, id) => (
          <PostBox>
            <MyPostTitle key={id}>{data.post.title}</MyPostTitle>
            <MyPostContent>{data.post.content}</MyPostContent>
            <MyPostAuthor>Eung-ae</MyPostAuthor>
            <PostInformationWrapper>
              <PostLeftInformation>
                <PostIconWrapper>
                  <LikeIcon />
                  <PostInformation>50</PostInformation>
                </PostIconWrapper>
                <PostIconWrapper>
                  <CommentIcon />
                  <PostInformation>50</PostInformation>
                </PostIconWrapper>
              </PostLeftInformation>
              <PostInformation>
                {data.post.uploadDate.substring(0, 10)}
              </PostInformation>
            </PostInformationWrapper>
          </PostBox>
        ))}
      </PostWrapper>
    </PostDetailContainer>
  );
};

export default MyPost;
