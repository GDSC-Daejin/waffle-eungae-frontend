import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const RecentPost = styled.div`
  width: 500px;
  height: 300px;
  background: ${assetColors.grey100}; //영역 확인용
  .topic {
    font-size: ${fontSizes.titleS};
  }
  hr {
    color: #ccc;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
  }
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
    margin-top: 5px;
  }
`;
