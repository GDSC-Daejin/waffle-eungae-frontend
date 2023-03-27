import styled from "styled-components";
import { fontSizes } from "../../../styles/fontSize";

export const LoginButtonWrapper = styled.div`
  display: flex;
  position: relative;
  & a {
    margin: 0;
  }
`;
export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 25px;
  cursor: pointer;
  border: 1px solid #e5e8eb;
  border-radius: 50px;
  font-size: ${fontSizes.textM};
  font-weight: 500;
  gap: 4px;
  background: #ffffff;
  white-space: nowrap;
`;
