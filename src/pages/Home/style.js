import styled from "styled-components";
import { assetColors } from "../../styles/assetColor";
import { fontSizes } from "../../styles/fontSize";

export const RecentWrapper = styled.div`
  width: 500px;
  height: 300px;
  background: ${assetColors.grey100}; //영역 확인용
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
  width: 740px;
  background: ${assetColors.grey100}; //영역 확인용
  display: flex;
  flex-wrap: wrap;
  .topic {
    font-size: ${fontSizes.titleS};
  }
  hr {
    color: #ccc;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
  }
`;
