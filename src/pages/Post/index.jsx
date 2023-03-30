import React, { useEffect, useState } from "react";
import {
  PostBox,
  PostInformation,
  PostIconWrapper,
  PostInformationWrapper,
  PostLeftInformation,
  MyPostTitle,
  MyPostAuthor,
  PostThumbnailWrapper,
  PostTextWrapper,
  EmptyBox,
  EmptyText,
} from "../MyPost/styled";
import LikeIcon from "../../assets/icons/LikeIcon";
import CommentIcon from "../../assets/icons/CommentIcon";
import CategoryMenu from "../../components/CategoryMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ArticleWrapper,
  ContainerInners,
  LayoutContainers,
  MainArticle,
  PostListWrapper,
  SideArticle,
} from "../../styles/layout";
import PostThumbnail from "../../assets/PostThumbnail";
import FilteredList from "../../components/FilteredList";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentCategoryIdStore } from "../../store/category";
import PostSkeleton from "../../components/Skeleton/PostSkeleton";
import PageBar from "../../components/PageBar";
import {
  currentPostLoaderStore,
  postLoaderStore,
} from "../../store/postLoader";
import EyeIcon from "../../assets/icons/EyeIcon";

const MyPost = () => {
  const currentCategoryId = useRecoilValue(currentCategoryIdStore);
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  console.log(currentCategoryId);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const navigate = useNavigate();

  // 리스트 데이터 받아오기
  const initPostData = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/categoryPost/${currentCategoryId}`
    );
    if (response.status === 200) {
      setCount(response.data.content.length);
    }
  };

  const initPostDataByPage = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/categoryPost/${currentCategoryId}?page=${
        page - 1
      }&size=5`
    );
    if (response.status === 200) {
      setPostList(response.data.content);
      setIsLoading(false);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initPostData();
    initPostDataByPage();
    setIsLoading(true);
  }, [currentCategoryId, page]);

  return (
    <>
      <CategoryMenu />
      {!isLoading ? (
        <ArticleWrapper>
          <MainArticle>
            {count !== 0 ? (
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
            ) : (
              <EmptyBox>
                <EmptyText>작성된 게시물이 없습니다.</EmptyText>
              </EmptyBox>
            )}
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
