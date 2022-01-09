import React from "react";
import Image1 from "../../images/triangles.svg";
import Image2 from "../../images/lines.svg";
import Image3 from "../../images/dots.svg";
import { Container, Box, Title, Window } from "./projectsElements";

const Projects = () => {
  return (
    <>
      <Container id="projects">
        <Title> PROJECTS</Title>
        <Box>
          <Window>
            <img src={Image1} alt="triangles" />
            <h2>EDITORIAL</h2>
          </Window>
          <Window>
            <img src={Image2} alt="lines" />
            <h2>WEB DESIGN</h2>
          </Window>
          <Window>
            <img src={Image3} alt="dots" />
            <h2>
              ART/ <br></br>PHOTOGRAPHY
            </h2>
          </Window>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
