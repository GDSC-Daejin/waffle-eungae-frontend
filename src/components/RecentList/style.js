import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

export const ListBlock = styled.div`
  height: 360px;
  overflow: hidden;
`;

export const Post = styled.div`
  display: flex;
  & + & {
    margin-top: 10px;
  }
`;

export const StringBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .category {
    display: block;
    height: 27px;
    margin: 0 2px 0 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: ${fontSizes.textM};
    line-height: 25px;
    padding: 0 6px;
  }
  .title {
    font-size: ${fontSizes.textL};
    margin-left: 6px;
    line-height: 25px;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 40px;
  .number {
    font-size: ${fontSizes.textS};
  }
`;
