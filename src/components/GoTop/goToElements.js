import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ButtonWrapper = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* border: red 2px solid; */
  z-index: 800;

  p {
    color: #b08968;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
  }
`;

export const Logo = styled(LinkR)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* border: orange 2px solid; */

  img {
    height: 100%;
  }
`;
