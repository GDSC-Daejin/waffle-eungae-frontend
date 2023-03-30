import styled, { css } from "styled-components";
import { fontSizes } from "../../styles/fontSize";
import { primaryColor } from "../../styles/assetColor";

export const CategoryMenuWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const Category = styled.div`
  margin-right: 24px;
  font-size: ${fontSizes.textL};
  cursor: pointer;
  white-space: nowrap;
  ${(props) =>
    props.isClicked &&
    css`
      border-bottom: 2px solid ${primaryColor.green600};
      color: ${primaryColor.green600};
      font-weight: 700;
    `}
`;
