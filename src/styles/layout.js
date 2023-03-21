import styled from "styled-components";

//보통 웹사이트에서 사용하는 Container 사이즈입니다.

export const LayoutContainers = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInners = styled.div`
  width: 92%;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
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
`;
export const SideArticle = styled.div`
  width: 384px;
  min-width: 250px;
  margin: 24px 0;
`;
