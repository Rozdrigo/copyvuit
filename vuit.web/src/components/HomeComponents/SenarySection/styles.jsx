import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > iframe {
    border: 0;
  }
  & h4 {
    color: #fff;
    text-align: center;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 15px;
  }
`;