import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const HeaderBlock = styled.div`
  width: 100%;
  height: 70px;
  padding: 7px 0 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #888;
  margin-bottom: 12px;
  a {
    height: 30px;
    font-size: ${fontSizes.textXxl};
    font-weight: 600;
    margin: 0px 25px;
    text-decoration: none;
    color: ${assetColors.grey900};
  }
  .active {
    color: ${assetColors.green600};
  }
  .button {
    padding: 4px 10px;
    font-size: ${fontSizes.textXxl};
    background-color: ${assetColors.green400};
    border-radius: 5px;
  }
`;

export const Empty = styled.div`
  width: 20%;
`;
