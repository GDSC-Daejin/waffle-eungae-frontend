import styled from "styled-components";

//보통 웹사이트에서 사용하는 Container 사이즈입니다.

export const LayoutContainer = styled.div`
  position: relative;
<<<<<<< HEAD
  width: 100%;
=======
  height: 700px;
  max-width: 940px;
`;
export const LayoutContainers = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1140px;

>>>>>>> develop
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
  width: 1050px;
=======
  width: 100%;
`;
export const ContainerInners = styled.div`
  width: 92%;
>>>>>>> develop
=======
>>>>>>> 11187c54ebfe73a58b85e935caf4b195237df3e4
  height: 100%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 auto;
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
  margin: 24px 24px 24px 0;
`;
