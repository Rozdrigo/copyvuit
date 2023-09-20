import styled from "styled-components";

export const ContainerButton = styled.div`
  border-radius: 50px;
  background: #ad760c;
  color: #ffffff;
  border-width: 1px;
  border-color: #ffffff;
  border-style: solid;
  box-shadow: 0px 0px 20px 0px #00000010;
  text-align: center;
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;
