import styled from "styled-components";

export const HeaderFor = styled.h4`
  color: #ffffff;
  text-align: left;
  font-size: x-large;
`;
export const Subtitle = styled.h5`
  color: #f0c674;
  text-align: left;
  font-size: medium;
  margin: 20px 0 20px 0;
`;
export const TextLeft = styled.div`
  padding: 18.75px;
  color: #fff;
  text-align: left;
  font-size: 15px;
`;
export const RoundedBorder = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin: 1rem 0 1rem 0;
`;
export const PDFButton = styled.button`
  border-radius: 50px;
  align-items: center;
  padding: 5px;
  width: 100%;
  gap: 20px;
  background-color: #ffffff;
  border: none;
  display: flex;

  & div img {
    height: 45px;
    border-radius: 50px;
  }
  & div:nth-child(2) {
    display: flex;
    gap: 10px;
  }
`;
