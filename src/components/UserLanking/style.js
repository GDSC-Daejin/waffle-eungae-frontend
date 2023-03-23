import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const UserLankingWrapper = styled.div`
  width: 240px;
  padding: 30px;
  background-color: ${assetColors.grey100};
  .letter {
    margin-bottom: 15px;
    font-size: ${fontSizes.textM};
  }
  @media screen and (max-width: 1130px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 800px) {
  }
`;

export const User = styled.div`
  font-size: ${fontSizes.textM};
  & + & {
    margin-top: 12px;
  }
`;
