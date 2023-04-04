import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { projects } from "./data";

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  width: 80%;
  row-gap: 5vh;
  padding: 5vh 0 15vh 0;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const StyledProjectsTitle = styled.h2`
  font-weight: 600;
  line-height: 48px;
  font-size: 3rem;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const StyledProjectsOuterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5vw;
  row-gap: 10vh;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    row-gap: 10vh;
    column-gap: 0;
    height: 100%;
  }

  @media (max-height: 570px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;

function Projects(props) {
  const { theme } = props;

  return (
    <StyledProjectsContainer id="projects">
      <StyledProjectsTitle>Projects</StyledProjectsTitle>
      <StyledProjectsOuterContainer>
        {projects.map((project) => (
          <Project key={project.id} project={project} theme={theme} />
        ))}
      </StyledProjectsOuterContainer>
    </StyledProjectsContainer>
  );
}

export default Projects;
