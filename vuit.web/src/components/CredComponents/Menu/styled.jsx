import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: top;
  * {
    transition: all 0.3s;
  }
  .closed-container {
    height: 90px;
    width: 90px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    border-bottom-left-radius: 100%;
    background: white;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    button {
      display: none;
    }
    .to-arrow {
      display: flex;
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 30px;
      align-items: center;
      justify-content: left;
      position: absolute;

      & > div {
        background-color: #000;
        margin-bottom: 20px;
        width: 30px;
        height: 5px;
      }
      & > div::after {
        content: " ";
        margin-top: -10px;
        position: absolute;
        background-color: #000;
        width: 30px;
        height: 5px;
      }
      & > div::before {
        content: " ";
        margin-top: 10px;
        position: absolute;
        background-color: #000;
        width: 30px;
        height: 5px;
      }
    }
  }
  .opened-container {
    height: 100dvh;
    width: 100dvw;
    background: white;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    .to-arrow {
      display: flex;
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 30px;
      align-items: center;
      justify-content: left;
      position: absolute;

      & > div {
        background-color: #000;
        margin-bottom: 20px;
        width: 30px;
        height: 5px;
      }
      & > div::after {
        content: " ";
        margin-top: -6px;
        margin-left: 9px;
        position: absolute;
        background-color: #000;
        width: 20px;
        height: 5px;
        transform: rotate(32deg);
      }
      & > div::before {
        content: " ";
        margin-top: 6px;
        margin-left: 9px;
        position: absolute;
        background-color: #000;
        width: 20px;
        height: 5px;
        transform: rotate(-32deg);
      }
    }
  }
`;

export const MenuButton = styled.button`
  display: block;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #000;
  border: 3px solid #000;
  color: #fff;
  font-weight: 600;
  width: 320px;
  height: 42.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #000;
    background-color: transparent;
    transition: all 0.3s;
  }
`;
