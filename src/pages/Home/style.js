import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`;
export const RecentWrapper = styled.div`
  width: 680px;
  padding: 0 20px;
  margin: 0 30px 30px 0;
  .topic {
    font-size: ${fontSizes.titleS};
  }
  hr {
    color: #ccc;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 720px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const UserLanking = styled.div`
  width: 300px;
  background-color: ${assetColors.grey100};
`;
