import styled from "styled-components";
import { primaryColor } from "../../styles/assetColor";

export const PostTitle = styled.input`
  display: flex;
  border: none;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 20px;
  &::placeholder {
    color: ${primaryColor.green600};
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
