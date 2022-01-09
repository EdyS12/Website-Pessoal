import React from "react";
import ImageI from "../../images/instagram.svg";
import ImageG from "../../images/github.svg";
import ImageL from "../../images/linkedin.svg";
import {
  Container,
  Title,
  Box,
  ImageContainer,
  Icon,
} from "./contactsElements";

const Contact = () => {
  return (
    <>
      <Container id="contacts">
        <Title> CONTACTS</Title>
        <Box>
          <ImageContainer>
            <a
              href="https://www.instagram.com/edy_desenhando/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <img src={ImageI} alt="instagram" />
              </Icon>
            </a>
            <a
              href="https://github.com/EdyS12"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <img src={ImageG} alt="github" />
              </Icon>
            </a>
            <a
              href="https://www.linkedin.com/in/eduarda-silva-0a6883213/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <img src={ImageL} alt="linkedin" />
              </Icon>
            </a>
          </ImageContainer>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
