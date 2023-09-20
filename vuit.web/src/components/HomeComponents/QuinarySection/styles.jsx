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
    width: 100%;
  }
  & h4 {
    color: #ffffff;
    text-align: center;
  }
  & > div {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
