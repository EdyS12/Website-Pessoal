import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #fff;
  height: 100vh;
  align-items: center;
  justify-content: center;
  border: orange 2px solid;
  padding-top: 50px;
`;

export const Box = styled.div`
  position: absolute;
  background: #ede0d4;
  margin-top: 40px;
  height: 500px;
  width: 90%;
`;

export const TextContainer = styled.div`
  width: 80%;
  height: fit-content;
  padding: 0 40px 200px 60px;
  z-index: 2;
  /* border: orange 1px solid; */

  h1 {
    font-family: "Roboto";
    font-weight: 900;
    font-size: 64px;
    line-height: 64px;
    color: #b08968;
  }

  p {
    width: 65%;
    padding-top: 70px;
    font-family: "Roboto";
    font-weight: normal;
    font-size: 22px;
    color: #000;
  }

  @media screen and (max-width: 760px) {
    width: 80%;
    height: fit-content;
    padding: 0 0 200px 20px;
    z-index: 2;

    h1 {
      font-size: 48px;
      line-height: 50px;
    }

    p {
      width: 80%;
      padding-top: 70px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    height: fit-content;
    padding: 0 0 200px 40px;
    z-index: 2;

    h1 {
      font-size: 40px;
      line-height: 42px;
    }

    p {
      width: 90%;
      padding-top: 60px;
      font-size: 16px;
    }
  }
`;
