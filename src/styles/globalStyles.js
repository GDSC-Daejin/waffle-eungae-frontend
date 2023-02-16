import { createGlobalStyle } from "styled-components";

// 기본 스타일 입니다.
//reset.css
const GlobalStyles = createGlobalStyle`
  * {
    font-size: 10px;
    word-break: keep-all;
    font-family: 'Google Sans Display','Spoqa Han Sans Neo', sans-serif;
  }
`;
export default GlobalStyles;
