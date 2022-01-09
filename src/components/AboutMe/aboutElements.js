import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #fff;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  position: absolute;
  background: #ede0d4;
  margin-top: 40px;
  height: 500px;
  width: 90%;

  @media screen and (max-width: 321px) {
    margin-top: 60px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  padding: 0 40px 0 60px;
  z-index: 2;

  @media screen and (max-width: 1025px) {
    width: 90%;
    padding: 0 0 0 40px;
  }

  @media screen and (max-width: 769px) {
    width: 90%;
    padding: 0 0 0 40px;
  }

  @media screen and (max-width: 321px) {
    padding: 0 0 0 20px;
  }
`;

export const Titulo = styled.h1`
  font-family: "Roboto";
  font-weight: 900;
  font-size: 64px;
  line-height: 80px;
  color: #b08968;

  @media screen and (max-width: 769px) {
    font-size: 50px;
  }

  @media screen and (max-width: 500px) {
    font-size: 48px;
  }

  @media screen and (max-width: 321px) {
    font-size: 30px;
  }
`;

export const Texto = styled.p`
  width: 65%;
  padding-top: 60px;
  font-family: "Roboto";
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #000;

  @media screen and (max-width: 1025px) {
    padding-top: 40px;
    font-size: 20px;
  }

  @media screen and (max-width: 769px) {
    width: 80%;
    padding-top: 40px;
    font-size: 18px;
    line-height: 19px;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    padding-top: 20px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 321px) {
    width: 90%;
    padding-top: 0;
    font-size: 14px;
    line-height: 15px;
  }
`;

/* @media screen and (max-width: 1024px) {
    width: 80%;
    height: fit-content;
    padding: 0 0 0 20px;
    z-index: 2;

    h1 {
      font-size: 48px;
      line-height: 50px;
    }

    p {
      width: 80%;
      padding-top: 70px;
      font-size: 20px;
    }

    @media screen and (max-width: 760px) {
      width: 90%;
      height: 80%;
      padding: 0 0 180px 10px;
      z-index: 2;

      h1 {
        font-size: 48px;
        line-height: 48px;
      }

      p {
        width: 100%;
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
    } */
