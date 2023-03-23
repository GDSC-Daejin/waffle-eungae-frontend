import styled, { css } from "styled-components";

export const CategoryMenuContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
export const CategoryMenuWrapper = styled.div`
  display: flex;
`;
export const Category = styled.div`
  margin-right: 24px;
  font-size: 14px;
  cursor: pointer;
  ${(props) =>
    props.isClicked &&
    css`
      border-bottom: 1px solid black;
    `}
`;
