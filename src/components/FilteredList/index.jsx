import React, { useEffect, useState } from "react";
import axios from "axios";
import { DetailPostData } from "../../type";
import {
  Content,
  ContentWrapper,
  ListItem,
  ListSection,
  ListWrapper,
  Number,
  Title,
} from "./styled";
import LikeIcon from "../../assets/icons/LikeIcon";
import { Like } from "../../pages/PostDetail/styled";
import { PostIconWrapper } from "../../pages/MyPost/styled";
import EyeIcon from "../../assets/icons/EyeIcon";
import { useNavigate } from "react-router-dom";

const FilteredList = () => {
  const [postList, setPostList] = useState([DetailPostData]);
  const navigate = useNavigate();

  const initData = async () => {
    const response = await axios.get(
      "https://eung-ae-back.kro.kr/viewCount?size=5"
    );
    if (response.status === 200) {
      setPostList(response.data.content);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  let i = 1;

  return (
    <ListSection>
      <Title>인기 게시글</Title>
      <ListWrapper>
        {postList.map((data, id) => (
          <ListItem key={id}>
            <ContentWrapper>
              <Number>{i++}</Number>
              <Content
                onClick={() =>
                  navigate(`/post/${data.member.name}/${data.postId}`)
                }
              >
                {data.title}
              </Content>
            </ContentWrapper>
            <PostIconWrapper filtered={true}>
              <EyeIcon />
              <Like>{data.viewCount}</Like>
            </PostIconWrapper>
          </ListItem>
        ))}
      </ListWrapper>
    </ListSection>
  );
};

export default FilteredList;
