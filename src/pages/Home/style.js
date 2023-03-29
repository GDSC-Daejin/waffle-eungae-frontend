import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  @media screen and (max-width: 1130px) {
    flex-direction: column;
    margin: 0 auto;
    max-width: 720px;
  }
`;
export const HomeBannerWrapper = styled.img`
  width: 100%;
  margin-bottom: 100px;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 720px;
  @media screen and (max-width: 1130px) {
    margin: 30px auto 0 auto;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
