import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(83.1% 83.1% at 50% 50%, #c6a88f 0%, #b08968 100%);
  width: 100vw;
  height: 100vh;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  p {
    display: none;
  }

  &:hover {
    cursor: pointer;

    p {
      display: block;
      font-family: "Roboto";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #fff;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition-property: transform;
  transition-duration: 1s;

  &:hover {
    animation-name: rotate;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  img {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    padding-left: 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
`;
