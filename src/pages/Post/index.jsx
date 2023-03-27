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
  SideArticle,
} from "../../styles/layout";
import PostThumbnail from "../../assets/PostThumbnail";
import FilteredList from "../../components/FilteredList";
import { useRecoilValue } from "recoil";
import { currentCategoryIdStore } from "../../store/category";
import PostSkeleton from "../../components/Skeleton/PostSkeleton";
import PageBar from "../../components/PageBar";

const MyPost = () => {
  const currentCategoryId = useRecoilValue(currentCategoryIdStore);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [postList, setPostList] = useState([]);
  console.log(postList);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handlePageChange = (page) => {
    setPage(page);
  };
  console.log(`count: ${count}, page: ${page}`);

  const navigate = useNavigate();

  // 리스트 데이터 받아오기
  const initPostData = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/categoryPost/${currentCategoryId}`
    );
    console.log(response);
    if (response.status === 200) {
      setPostList(response.data.content);
      setCount(response.data.content.length);
      setIsLoading(false);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initPostData();
  }, [currentCategoryId]);

  return (
    <>
      <CategoryMenu onClick={setCategory} categoryName={category} />
      {!isLoading ? (
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
                  <MyPostAuthor>{data.member.name}</MyPostAuthor>
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
