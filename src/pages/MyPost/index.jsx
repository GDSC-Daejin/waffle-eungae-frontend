import React from "react";
import { postListData } from "../../apis/Mocks/postListData";
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
import CategoryMenu from "../../component/CategoryMenu";

const MyPost = () => {
  return (
    <PostDetailContainer>
      <PostWrapper>
        <CategoryMenu />
        {postListData.map((data, id) => (
          <PostBox key={id}>
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
