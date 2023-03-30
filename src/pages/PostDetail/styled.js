import styled from "styled-components";
import { fontSizes } from "../../styles/fontSize";
import { assetColors, primaryColor } from "../../styles/assetColor";

export const PostDetailContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0px auto;
  min-width: 320px;
  align-items: center;
`;
export const PostWrapper = styled.div`
  padding: 0px 20px;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  max-width: 600px;
`;
export const PostHead = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Category = styled.div`
  border-bottom: 2px solid ${primaryColor.green600};
  display: flex;
  padding: 4px 0;
  margin-bottom: 20px;
  width: fit-content;
  font-size: ${fontSizes.textM};
  color: ${primaryColor.green600};
  font-weight: 600;
`;
export const PostTitle = styled.h1`
  font-size: 32px;
  width: 100%;
  word-break: break-word;
  margin-bottom: 23px;
  margin-right: 26px;
`;
export const PostAuthorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  align-items: center;
`;
export const PostAuthor = styled.div`
  margin-right: 10px;
  font-size: ${fontSizes.textL};
  color: ${primaryColor.green600};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid white;
  &:hover {
    border-bottom: 1.5px solid ${primaryColor.green600};
  }
`;
export const PostDate = styled.div`
  color: #8b95a1;
  font-size: ${fontSizes.textS};
  font-weight: 700;
`;
export const PostIconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 5px;
  right: 20px;
`;
export const PostIcon = styled.div`
  cursor: pointer;
`;
export const PostContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
export const LikeIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 50px auto;
  border-radius: 100%;
  background: #e5e8eb;
  cursor: pointer;
`;
export const Like = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
`;
export const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;
export const CommentCount = styled.h1`
  border-bottom: 1px solid #eee;
  margin: 0;
  font-size: ${fontSizes.textM};
  padding: 25px 12px;
`;
export const CommentWrapper = styled.div`
  padding: 24px 12px;
  border-bottom: 1px solid #eee;
  word-break: break-all;
`;
export const CommentAuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentAuthor = styled.div`
  font-size: 14px;
  color: ${assetColors.green600};
`;
export const Comment = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
export const CommentDate = styled.div`
  font-size: 12px;
  color: #8b95a1;
  margin-top: 13px;
`;
