import styled from "styled-components";

//보통 웹사이트에서 사용하는 Container 사이즈입니다.

export const LayoutContainer = styled.div`
  position: relative;
  height: 700px;
  width: 100%;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled.div`
  width: 940px;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
`;
