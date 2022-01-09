import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background: #fff;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 321px) {
    margin-top: 0;
  }
`;

export const ImgBackground = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -150px;
  right: -10px;

  @media screen and (max-width: 1025px) {
    width: 30%;
    height: auto;
    padding: 0;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 769px) {
    width: 30%;
    bottom: -80px;

    img {
      width: 90%;
    }
  }
`;

export const Box = styled.div`
  position: absolute;
  background: #ede0d4;
  bottom: 90px;
  height: 450px;
  width: 90%;

  @media screen and (max-width: 1025px) {
    height: 500;
    bottom: 110px;
  }

  @media screen and (max-width: 321px) {
    bottom: 100px;
  }
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

  @media screen and (max-width: 769px) {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 120px;
  }

  @media screen and (max-width: 321px) {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 25px;
  }
`;

export const ImgWrapper = styled.div`
  width: 42%;
  height: auto;
  padding: 0 0 30px 20px;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1025px) {
    width: 50%;
    height: auto;
    padding: 0;

    img {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 769px) {
    width: 55%;
    height: auto;
    padding: 0;
    padding-bottom: 40px;

    img {
      height: 70%;
    }
  }

  @media screen and (max-width: 500px) {
    width: 70%;
    height: auto;
    padding-top: 15px;

    img {
      height: 100%;
    }
  }

  @media screen and (max-width: 321px) {
    width: 75%;
    height: auto;
    padding: 0;

    img {
      height: 100%;
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

  @media screen and (max-width: 1025px) {
    width: 50%;
    height: auto;
    padding: 90px 40px 0 50px;

    h1 {
      font-weight: 850;
      font-size: 54px;
    }
  }

  @media screen and (max-width: 769px) {
    height: 50%;
    width: 90%;
    padding: 0 20px 0 20px;

    h1 {
      font-size: 40px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    height: 40%;
    width: 100%;
    padding: 0 20px 0 20px;

    h1 {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;
