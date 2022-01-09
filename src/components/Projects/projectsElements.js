import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100vh;
  align-items: center;
  /* justify-content: center; */
  border: green 2px solid;
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  column-gap: 60px;
  justify-content: center;
  align-items: center;
  background: #ede0d4;
  margin-top: 160px;
  height: 500px;
  width: 90%;

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const Title = styled.h1`
  width: 80%;
  padding: 60px 0 0 60px;
  font-family: "Roboto";
  font-weight: 900;
  font-size: 64px;
  color: #b08968;
  /* border: green 2px solid; */
  z-index: 1;

  @media screen and (max-width: 560px) {
    padding: 80px 0 0 0;
    font-weight: 800;
    font-size: 48px;
  }
`;

export const Window = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  height: fit-content;
  /* border: red 2px solid; */
  text-align: center;

  h2 {
    display: none;
  }

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;

    img {
      fill: #fff;
      opacity: 0.3;
    }

    h2 {
      display: flex;
      position: absolute;
      font-family: "Roboto";
      text-align: center;
      font-weight: 850;
      font-size: 40px;
      color: #b08968;
      /* border: red 2px solid; */
    }

    @media screen and (max-width: 760px) {
      h2 {
        font-weight: 775;
        font-size: 30px;
        /* border: red 2px solid; */
      }
    }

    @media screen and (max-width: 560px) {
      h2 {
        font-weight: 700;
        font-size: 20px;
        /* border: red 2px solid; */
      }
    }
  }
`;
