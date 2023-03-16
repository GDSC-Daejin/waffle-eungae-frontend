import styled from "styled-components";

export const PostBox = styled.div`
  width: 100%;
  margin: 0 20px;
  padding: 24px 0;
  border-bottom: 1px solid #eee;
  word-break: break-all;
`;
export const MyPostTitle = styled.div`
  font-weight: bold;
  word-wrap: break-word;
  margin-bottom: 7px;
`;
export const MyPostContent = styled.div`
  font-size: 14px;
`;
export const MyPostAuthor = styled.div`
  width: 100%;
  color: #222;
  margin-top: 16px;
`;
export const PostInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
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
`;
export const PostInformation = styled.div`
  font-size: 14px;
  color: #8b95a1;
`;
