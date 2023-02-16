import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const HeaderBlock = styled.div`
  width: 100%;
  height: 70px;
  padding-top: 25px;
  justify-content: center;
  justify-items: center;
  a {
    font-size: ${fontSizes.textXxl};
    margin: 0px 25px;
    text-decoration: none;
    color: ${assetColors.grey900};
  }
  .active {
    color: ${assetColors.green600};
  }
`;
