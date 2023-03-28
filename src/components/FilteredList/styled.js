import styled from "styled-components";

export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  width: 100%;
  padding: 20px;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #94969b;
  padding-bottom: 8px;
  padding-left: 10px;
`;
export const ListWrapper = styled.div`
  padding: 10px;
`;
export const ListItem = styled.div`
  padding: 5px 3px;
  color: #222;
  font-size: 14px;
  line-height: 1.25em;
  word-wrap: break-word;
  width: 100%;
  word-break: break-all;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;
export const ContentWrapper = styled.div`
  display: flex;
`;
export const Number = styled.div`
  margin-right: 10px;
  font-weight: bold;
  color: #94969b;
`;
export const Content = styled.p`
  margin: 0;
  font-size: 15px;
  cursor: pointer;
`;
