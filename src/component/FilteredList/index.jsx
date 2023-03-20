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
    const response = await axios.get("http://localhost:8080/post");
    if (response.status === 200) {
      setPostList(response.data.content);
      console.log(response.data);
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
          <>
            <ListItem>
              <ContentWrapper>
                <Number>{i++}</Number>
                <Content key={id}>{data.title}</Content>
              </ContentWrapper>
              <PostIconWrapper>
                <LikeIcon size="small" />
                <Like>11</Like>
              </PostIconWrapper>
            </ListItem>
          </>
        ))}
      </ListWrapper>
    </ListSection>
  );
};

export default FilteredList;
