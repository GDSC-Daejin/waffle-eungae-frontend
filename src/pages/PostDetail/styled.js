import styled from "styled-components";

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
`;
export const PostWrapper = styled.div`
  padding: 0px 20px;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  max-width: 800px;
`;
export const PostHead = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-bottom: 15px;
`;
export const Category = styled.div`
  font-weight: 400;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  display: flex;
  padding: 4px 0;
  margin-bottom: 20px;
  width: fit-content;
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
`;
export const PostAuthor = styled.div`
  margin-right: 10px;
`;
export const PostDate = styled.div`
  color: #8b95a1;
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
/*export const PostTrashIconWrapper = styled.div`
  position: absolute;
  right: 0px;
`;*/
export const PostContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
