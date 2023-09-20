import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & img {
    width: 100%;
    border-radius: 5px;
  }
`;
export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TextLeft = styled.div`
  padding: 0 18.75px;
  color: #fff;
  text-align: left;
  font-size: 15px;
`;

export const TextLeftGold = styled.div`
  padding: 0 18.75px;
  color: #f0c674;
  text-align: left;
  font-size: 15px;
`;