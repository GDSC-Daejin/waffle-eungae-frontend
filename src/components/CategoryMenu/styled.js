import styled, { css } from "styled-components";

export const CategoryMenuWrapper = styled.div`
  width: 100%;
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
