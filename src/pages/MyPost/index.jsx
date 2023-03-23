import React, { useEffect, useState } from "react";
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
import CategoryMenu from "../../components/CategoryMenu";
import { DetailPostData } from "../../type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPost = () => {
  const [postList, setPostList] = useState([DetailPostData]);
  console.log(postList);

  const navigate = useNavigate();

  // 리스트 데이터 받아오기
  const initPostData = async () => {
    const response = await axios.get("https://eung-ae-back.kro.kr/post");
    if (response.status === 200) {
      setPostList(response.data.content);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initPostData();
  }, []);

  return (
    <PostDetailContainer>
      <PostWrapper>
        <CategoryMenu />
        {postList.map((data, id) => (
          <PostBox key={id}>
            <MyPostTitle
              onClick={() => {
                navigate(`/post/${data.postId}`);
              }}
            >
              {data.title}
            </MyPostTitle>
            <MyPostContent>{data.content}</MyPostContent>
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
                {data.createDate.substring(0, 10)}
              </PostInformation>
            </PostInformationWrapper>
          </PostBox>
        ))}
      </PostWrapper>
    </PostDetailContainer>
  );
};

export default MyPost;
