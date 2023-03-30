import styled, { css } from "styled-components";
import { fontSizes } from "../../styles/fontSize";
import { primaryColor } from "../../styles/assetColor";

export const PostBox = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #eee;
  word-break: break-all;
  display: flex;
`;
export const PostThumbnailWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;
`;
export const PostTextWrapper = styled.div`
  flex: 1 1 0%;
  padding-right: 10px;
  max-width: calc(100% - 98px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;
export const MyPostTitle = styled.div`
  font-weight: bold;
  word-wrap: break-word;
  font-size: 16px;
  cursor: pointer;
`;
export const MyPostContent = styled.div`
  font-size: 14px;
`;
export const MyPostAuthor = styled.div`
  width: 100%;
  color: #222;
  margin-top: 12px;
  font-size: 14px;
`;
export const PostInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
  align-items: center;
`;
export const PostLeftInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;
export const PostIconWrapper = styled.div`
  font-size: 14px;
  color: #8b95a1;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 3px;
  }
  ${(props) =>
    props.filtered &&
    css`
      width: 40px;
    `};
`;
export const PostInformation = styled.div`
  font-size: 12px;
  color: #8b95a1;
`;
export const EmptyBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid ${primaryColor.grey200};
  border-top: 1px solid ${primaryColor.grey200};
  margin-top: 20px;
`;
export const EmptyText = styled.h1`
  font-size: ${fontSizes.textXxl};
  color: ${primaryColor.grey500};
`;
