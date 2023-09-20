import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  border-radius: 5px;

  * {
    font-size: 15px;
    transition: 0.3s;
  }

  & span {
    height: fit-content;
    user-select: none;
  }

  &.opened-container span {
    transform: rotate(-135deg);
  }

  & > div:nth-child(1) {
    cursor: pointer;
    font-weight: bold;
    padding: 17px;
    display: flex;
    text-align: left;
    justify-content: space-between;
  }

  & > div:nth-child(2) {
    padding: 0 20px 20px;
    text-align: left;
    font-size: 100%;
    line-height: 1.3;
    box-sizing: border-box;
  }

  &.closed-container {
    & > div:nth-child(2) {
      max-height: 0;
      padding-bottom: 0;
      overflow: hidden;
    }
  }
`;
