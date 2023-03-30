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
} from "./styled";
import LikeIcon from "../../assets/icons/LikeIcon";
import CommentIcon from "../../assets/icons/CommentIcon";
import CategoryMenu from "../../components/CategoryMenu";
import { DetailPostData } from "../../type";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArticleWrapper,
  MainArticle,
  PostListWrapper,
  SideArticle,
} from "../../styles/layout";
import PostThumbnail from "../../assets/PostThumbnail";
import EyeIcon from "../../assets/icons/EyeIcon";
import PageBar from "../../components/PageBar";
import FilteredList from "../../components/FilteredList";
import PostSkeleton from "../../components/Skeleton/PostSkeleton";

const MyPost = () => {
  const { userId } = useParams();
  const [postList, setPostList] = useState([DetailPostData]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  // 리스트 데이터 받아오기
  const initPostData = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/memberPost/${userId}`
    );
    if (response.status === 200) {
      setCount(response.data.content.length);
    }
  };

  const initPostDataByPage = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/memberPost/${userId}?page=${page - 1}&size=5`
    );
    if (response.status === 200) {
      setPostList(response.data.content);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initPostData();
    initPostDataByPage();
    setIsLoading(true);
  }, [page]);

  return (
    <>
      {!isLoading ? (
        <ArticleWrapper>
          <MainArticle>
            <PostListWrapper>
              {postList.map((data, id) => (
                <PostBox key={id}>
                  <PostThumbnailWrapper>
                    <PostThumbnail />
                  </PostThumbnailWrapper>
                  <PostTextWrapper>
                    <MyPostTitle
                      onClick={() => {
                        navigate(`/post/${data.member.name}/${data.postId}`);
                      }}
                    >
                      {data.title}
                    </MyPostTitle>
                    {/*<MyPostContent>{data.content}</MyPostContent>*/}
                    <MyPostAuthor>{data.member.name}</MyPostAuthor>
                    <PostInformationWrapper>
                      <PostLeftInformation>
                        <PostIconWrapper>
                          <LikeIcon />
                          <PostInformation>{data.likeCount}</PostInformation>
                        </PostIconWrapper>
                        <PostIconWrapper>
                          <EyeIcon />
                          <PostInformation>{data.viewCount}</PostInformation>
                        </PostIconWrapper>
                      </PostLeftInformation>
                      <PostInformation>
                        {data.createDate.substring(0, 10)}
                      </PostInformation>
                    </PostInformationWrapper>
                  </PostTextWrapper>
                </PostBox>
              ))}
            </PostListWrapper>
            <PageBar page={page} count={count} onChange={setPage} />
          </MainArticle>
          <SideArticle>
            {/*<BestMembers></BestMembers>
            <FilteredPosts></FilteredPosts>*/}
            <FilteredList />
          </SideArticle>
        </ArticleWrapper>
      ) : (
        <PostSkeleton />
      )}
    </>
  );
};

export default MyPost;
