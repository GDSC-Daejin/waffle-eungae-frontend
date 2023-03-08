import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

export const ListBlock = styled.div`
  width: 320px;

  height: 240px;
  padding: 0 20px;
  overflow: hidden;
  .topic {
    width: 70%;
    font-size: ${fontSizes.textXl};
    font-weight: 600;
    color: #444;
    padding-left: 7px;
  }
  .more {
    float: right;
  }
  hr {
    color: #ccc;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-size: 1.5rem;
    margin-left: 6px;
    line-height: 25px;
    width: 80%;
    overflow: hidden;
  }
  & + & {
    margin-top: 5px;
  }
  @media screen and (max-width: 800px) {
    .title {
      width: 90%;
    }
  }
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;
  margin-right: 10px;
  .number {
    font-size: ${fontSizes.textS};
    width: 22px;
  }
`;
