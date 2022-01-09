import React from "react";
import { Link } from "react-router-dom";
import Espiral from "../../images/espiralLanding.svg";
import { Container, Content, ImageContainer } from "./landingElements";

const Landing = () => {
  return (
    <>
      <Container>
        <Link
          to={"/Home"}
          style={{
            textDecoration: "none",
          }}
        >
          <Content>
            <ImageContainer>
              <img src={Espiral} alt="espiral" />
            </ImageContainer>
            <p>Click to See More</p>
          </Content>
        </Link>
      </Container>
    </>
  );
};

export default Landing;
