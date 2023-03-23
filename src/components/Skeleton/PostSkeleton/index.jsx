import React from "react";
import styled from "styled-components";
import Skeleton from "../index";
import { ContainerInners, LayoutContainers } from "../../../styles/layout";

const CategoryContainer = styled.div`
  display: grid;
  max-width: 400px;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  margin-bottom: 24px;
`;

const PostContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin-bottom: 48px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const CategoryWrapper = styled.div``;

const Category = styled.div`
  margin-right: 24px;
  width: 100%;
`;

/*const CategoryPlaceholder = () => {
  <CategoryWrapper>
    <Category>
      <Skeleton width={50} height={18} />
    </Category>
  </CategoryWrapper>;
};*/

const CategoryPlaceholder = () => {
  return (
    <CategoryWrapper>
      <Skeleton width={60} height={20} rounded />
    </CategoryWrapper>
  );
};

const PostPlaceholder = () => {
  return (
    <PostContainer>
      <ImageWrapper>
        <Skeleton width={100} height={100} rounded />
      </ImageWrapper>
      <Info>
        <Skeleton width={200} height={25} rounded />
        <div style={{ height: "12px" }} />
        <Skeleton width={100} height={19} rounded />
      </Info>
    </PostContainer>
  );
};

const Placeholder = () => (
  <>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={200} height={29} rounded />
      <div style={{ height: "8px" }} />
      <Skeleton width={200} height={19} rounded />
    </Info>
  </>
);

const PostSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, idx) => (
        <PostPlaceholder key={idx} />
      ))}
      {/*<CategoryPlaceholder />
      <PostPlaceholder />*/}
    </>
  );
};

export default PostSkeleton;
