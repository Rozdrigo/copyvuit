import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: #4eabe1;
  color: #ffffff;
  border-width: 2px;
  border-color: #ffffff;
  border-style: solid;
  box-shadow: 0px 0px 20px 0px #00000010;
  text-align: center;
  width: 100%;
  padding: 15px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;
