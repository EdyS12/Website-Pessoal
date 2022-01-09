import React from "react";
import Image from "../../images/foto.png";
import ImageB from "../../images/dotsBackground.svg";
import {
  MainContainer,
  ImgBackground,
  Content,
  Box,
  ImgWrapper,
  TextWrapper,
} from "./heroElements";

const Hero = () => {
  return (
    <>
      <MainContainer id="hero">
        <ImgBackground>
          <img src={ImageB} alt="dotsB" />
        </ImgBackground>
        <Box />
        <Content>
          <ImgWrapper>
            <img src={Image} alt="perfil" />
          </ImgWrapper>
          <TextWrapper>
            <h1>Hello there! I’m Eduarda, a graphic designer.</h1>
          </TextWrapper>
        </Content>
      </MainContainer>
    </>
  );
};

export default Hero;
