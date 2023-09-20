import styled from "styled-components";

export const ContainerSection = styled.section`
& img {
  width: 100%;
  border-radius: 5px;
}
& > div {
  font-size: 15px;
  color: #fff;
  text-align: left;
  word-break: break-word !important;
  word-wrap: break-word !important;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 40px 1.25rem 0 1.25rem;
  box-sizing: border-box;
}
`;
export const TextLeft = styled.div`
  padding: 18.75px;
  color: #fff;
  text-align: left;
  font-size: 15px;
`;