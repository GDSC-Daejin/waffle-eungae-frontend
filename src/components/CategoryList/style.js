import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";

export const ListBlock = styled.div`
  width: 320px;
  height: 250px;
  padding: 0 20px;
  overflow: hidden;
  .topic {
    font-size: ${fontSizes.textXl};
    font-weight: 600;
    color: #444;
    padding-left: 7px;
  }
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-size: ${fontSizes.textL};
    margin-left: 6px;
    line-height: 25px;
    width: 273px;
    overflow: hidden;
  }
  & + & {
    margin-top: 10px;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;
  margin-right: 10px;
  .number {
    font-size: ${fontSizes.textS};
  }
`;
