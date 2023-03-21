import styled, { css } from "styled-components";

export const CategoryMenuContainer = styled.div`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
`;
export const CategoryMenuWrapper = styled.div`
  display: flex;
`;
export const Category = styled.div`
  margin: 0 12px;
  cursor: pointer;
  ${(props) =>
    props.clicked &&
    css`
      border-bottom: 1px solid black;
    `}
`;
