import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  & > iframe {
    background-color: white;
    border-radius: 3px;
    border: 1px solid rgb(219, 219, 219);
    box-shadow: none;
    display: block;
    margin: 0px 0px 12px;
    min-width: 326px;
    padding: 0px;
    height: 371px;
    width: 100%;
  }
  & h4 {
    color: #ffffff;
    text-align: left;
  }
  & h5 {
    color: #f0c674;
    text-align: left;
    font-size: 1.25rem;
  }
  & > div {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
export const TextLeft = styled.div`
  padding: 0 18.75px;
  color: #fff;
  text-align: left;
  font-size: 15px;
`;
