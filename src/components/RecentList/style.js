import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

export const ListBlock = styled.div`
  height: 360px;
  overflow: hidden; //개수 제한두고 이거 바꾸기
  width: 680px;
  padding: 0 20px;
  margin: 0 30px 30px 0;
  @media screen and (max-width: 1130px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  .topic {
    font-size: ${fontSizes.titleS};
  }
  hr {
    color: #ccc;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
  }
  .more {
    float: right;
    font-size: ${fontSizes.textS};
    text-decoration: none;
    color: black;
  }
`;

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    height: 22px;
    line-height: 20px;
    margin: 0 2px 0 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: ${fontSizes.textS};
    color: #666;
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
  margin: 0 10px 0 5px;
  .number {
    font-size: ${fontSizes.textS};
    width: 25px;
  }
`;
