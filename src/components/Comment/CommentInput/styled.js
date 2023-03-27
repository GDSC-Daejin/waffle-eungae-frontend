import styled from "styled-components";
import { primaryColor } from "../../../styles/assetColor";
import { fontSizes } from "../../../styles/fontSize";

export const CommentWriter = styled.div`
  margin-top: 10px;
  margin-bottom: 29px;
  padding: 16px 10px 10px 18px;
  border: 2px solid ${primaryColor.grey200};
  border-radius: 6px;
  background: transparent;
`;
export const CommentInBox = styled.div`
  margin-bottom: 10px;
`;
export const CommentInBoxAuthor = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: ${fontSizes.textM};
`;
export const CommentInBoxText = styled.textarea`
  display: block;
  width: 100%;
  min-height: 17px;
  padding-right: 1px;
  border: 0;
  font-size: ${fontSizes.textM};
  resize: none;
  box-sizing: border-box;
  background: transparent;
  color: black;
  outline: 0;
  overflow: hidden;
  overflow-wrap: break-word;
`;
export const SubmitButton = styled.div`
  display: block;
  font-weight: 400;
  font-size: ${fontSizes.textM};
  box-sizing: border-box;
  border-radius: 6px;
  background: ${primaryColor.grey200};
  width: fit-content;
  padding: 10px;
  float: right;
`;
