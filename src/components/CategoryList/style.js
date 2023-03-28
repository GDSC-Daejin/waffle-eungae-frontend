import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

export const ListBlock = styled.div`
  width: 320px;
  height: 240px;
  padding: 0 20px;
  overflow: hidden;
  hr {
    color: #ccc;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topic {
    font-size: ${fontSizes.textXl};
    font-weight: 600;
    color: #444;
    padding-left: 7px;
  }
  .more {
    float: right;
    font-size: ${fontSizes.textS};
    text-decoration: none;
    color: black;
  }
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 1.5rem;
    margin-left: 6px;
    line-height: 25px;
    overflow: hidden;
  }
  & + & {
    margin-top: 5px;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  svg {
    width: 18px;
  }
  .number {
    font-size: ${fontSizes.textS};
    width: 25px;
  }
`;
