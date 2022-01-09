import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background: #fff;
  height: 100vh;
  align-items: center;
  justify-content: center;

  border: red 2px solid;
`;

export const ImgBackground = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -150px;
  right: -10px;

  @media screen and (max-width: 760px) {
    width: 50%;

    img {
      width: 100%;
    }
  }
`;

export const Box = styled.div`
  position: absolute;
  background: #ede0d4;
  bottom: 90px;
  height: 450px;
  width: 90%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;
  z-index: 1;
  /* background: yellow; */

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 120px;
  }
`;

export const ImgWrapper = styled.div`
  width: 42%;
  height: auto;
  padding: 0 0 30px 20px;
  /* background: red; */
  /* border: red 1px solid; */

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 760px) {
    width: 65%;
    height: auto;
    padding: 0;

    img {
      height: 70%;
    }
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  height: fit-content;
  padding: 70px 40px 0 60px;

  h1 {
    font-family: "Roboto";
    font-weight: 900;
    font-size: 64px;
    line-height: 66px;
    color: #b08968;
  }

  @media screen and (max-width: 760px) {
    height: 50%;
    width: 90%;
    padding: 0 20px 0 20px;

    h1 {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;
