import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100vh;
  align-items: center;
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ede0d4;
  margin-top: 160px;
  height: 500px;
  width: 90%;

  @media screen and (max-width: 321px) {
    margin-top: 100px;
  }
`;

export const Title = styled.h1`
  width: 80%;
  padding: 60px 0 0 50px;
  font-family: "Roboto";
  font-weight: 900;
  font-size: 64px;
  color: #b08968;
  /* border: green 2px solid; */
  z-index: 1;

  @media screen and (max-width: 760px) {
    padding: 80px 0 0 10px;

    font-weight: 800;
    font-size: 48px;
  }

  @media screen and (max-width: 321px) {
    padding: 60px 0 0 10px;
    font-size: 30px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  /* background: purple; */
  width: 100%;
  padding-left: 50px;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding-left: 150px;
  }

  @media screen and (max-width: 321px) {
    padding-left: 100px;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 80%;
  height: fit-content;
  text-align: center;
  /* background: red; */
  /* border: 5px solid red; */

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    width: 40%;

    img {
      height: 100%;
    }
  }
`;
