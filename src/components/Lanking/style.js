import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const LankingWrapper = styled.div`
  width: 200px;
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

export const View = styled.div`
  display: flex;
  & + & {
    margin-top: 12px;
  }
`;

export const Lank = styled.div`
  width: 20px;
  margin-right: 12px;
  font-weight: bold;
  color: #94969b;
  text-align: right;
  font-size: ${fontSizes.textM};
`;
export const Title = styled.div`
  font-size: ${fontSizes.textM};
`;
