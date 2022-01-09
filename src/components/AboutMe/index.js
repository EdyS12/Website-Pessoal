import React from "react";
import { Container, Box, TextContainer, Titulo, Texto } from "./aboutElements";

const AboutMe = () => {
  return (
    <>
      <Container id="about">
        <Box />
        <TextContainer>
          <Titulo>ABOUT ME</Titulo>
          <Texto>
            My name is Eduarda Silva, I'm 21 years old and I love everything
            related to arts. I've recently completed my Bachelor's degree in
            Design and Multimedia and I am currently studying to get my Master's
            degree. <br></br> In my third year of college I joined Jeknowledge,
            a Junior Enterprise, which not only allowed me to improve my
            designer skills, but also helped me having a better understanding
            about what it is like to work with real clients. In my years of
            college I've developed several projects with diferent languages such
            as Processing 3D, HTML, CSS and most recently React.js. <br></br>I'm
            not going to lie, I still don't have a specific area where I want to
            work on, but the thing about me is that I take ANY challenge from
            editorial to web development and always try my best to do my best
            work. <br></br>In my free time (I mean when I have free time) I like
            to expirement with photography and illustration to expand my
            artistic abilities. Go to "Projects" if you want to see what I am
            capable of. Hope you enjoy it!
          </Texto>
        </TextContainer>
      </Container>
    </>
  );
};

export default AboutMe;
