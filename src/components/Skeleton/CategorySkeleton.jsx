import React from "react";
import Skeleton from "./index";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: grid;
  max-width: 400px;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  margin-bottom: 24px;
`;

const CategoryWrapper = styled.div``;

const CategoryPlaceholder = () => {
  return (
    <CategoryWrapper>
      <Skeleton width={60} height={20} rounded />
    </CategoryWrapper>
  );
};

const CategorySkeleton = () => {
  return (
    <CategoryContainer>
      {Array.from({ length: 5 }).map((_, idx) => (
        <CategoryPlaceholder key={idx} />
      ))}
    </CategoryContainer>
  );
};

export default CategorySkeleton;
