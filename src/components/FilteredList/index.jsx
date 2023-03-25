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

const FilteredList = () => {
  const [postList, setPostList] = useState([DetailPostData]);

  const initData = async () => {
<<<<<<< HEAD
    const response = await axios.get("https://eung-ae-back.kro.kr/post?size=5");
=======
    const response = await axios.get("https://eung-ae-back.kro.kr?size=5");
>>>>>>> develop
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
              <Content>{data.title}</Content>
            </ContentWrapper>
            <PostIconWrapper>
              <LikeIcon />
              <Like>11</Like>
            </PostIconWrapper>
          </ListItem>
        ))}
      </ListWrapper>
    </ListSection>
  );
};

export default FilteredList;
