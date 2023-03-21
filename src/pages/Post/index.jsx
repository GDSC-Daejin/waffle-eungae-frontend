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
  PostThumbnailWrapper,
  PostTextWrapper,
} from "../MyPost/styled";
import LikeIcon from "../../assets/icons/LikeIcon";
import CommentIcon from "../../assets/icons/CommentIcon";
import CategoryMenu from "../../components/CategoryMenu";
import { DetailPostData } from "../../type";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ArticleWrapper,
  ContainerInners,
  LayoutContainers,
  MainArticle,
  SideArticle,
} from "../../styles/layout";
import { BestMembers, FilteredPosts, PostContainer } from "./styled";
import Post from "./index";
import PostThumbnail from "../../assets/PostThumbnail";
import FilteredList from "../../components/FilteredList";

const MyPost = () => {
  const [postList, setPostList] = useState([DetailPostData]);
  console.log(postList);

  const navigate = useNavigate();

  // 리스트 데이터 받아오기
  const initPostData = async () => {
    const response = await axios.get("https://eung-ae-back.kro.kr/post");
    console.log(response);
    if (response.status === 200) {
      setPostList(response.data.content);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initPostData();
  }, []);

  return (
    <LayoutContainers>
      <ContainerInners>
        <CategoryMenu />
        <ArticleWrapper>
          <MainArticle>
            {postList.map((data, id) => (
              <PostBox key={id}>
                <PostThumbnailWrapper>
                  <PostThumbnail />
                </PostThumbnailWrapper>
                <PostTextWrapper>
                  <MyPostTitle
                    onClick={() => {
                      navigate(`/post/${data.postId}`);
                    }}
                  >
                    {data.title}
                  </MyPostTitle>
                  {/*<MyPostContent>{data.content}</MyPostContent>*/}
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
                </PostTextWrapper>
              </PostBox>
            ))}
          </MainArticle>
          <SideArticle>
            {/*<BestMembers></BestMembers>
            <FilteredPosts></FilteredPosts>*/}
            <FilteredList />
          </SideArticle>
        </ArticleWrapper>
      </ContainerInners>
    </LayoutContainers>
  );
};

export default MyPost;
