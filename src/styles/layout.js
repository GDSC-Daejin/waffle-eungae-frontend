import styled from "styled-components";

//보통 웹사이트에서 사용하는 Container 사이즈입니다.

export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled.div`
  width: 92%;
  height: 100%;
  max-width: 1050px;
  margin: 0 auto;
`;
export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MainArticle = styled.article`
  margin-right: 20px;
  box-sizing: inherit;
  flex: 1;
  min-width: 600px;
  min-height: 745px;
`;
export const PostListWrapper = styled.div`
  min-height: 745px;
`;

export const SideArticle = styled.div`
  width: 384px;
  min-width: 250px;
  margin: 24px 24px 24px 0;
`;
