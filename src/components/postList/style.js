import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

export const ListBlock = styled.div`
  width: 350px;
  height: 230px;
  margin-right: 10px;
`;
export const Post = styled.div`
  display: flex;
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
  & + & {
    margin-top: 10px;
  }
`;
