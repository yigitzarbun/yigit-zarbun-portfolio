import React from "react";
import styled from "styled-components";
const StyledProjectContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  width: 28%;

  @media (max-width: 1000px) {
    width: 70%;
    align-items: center;
    row-gap: 5vh;
    margin: 0 auto;
  }
  @media (max-width: 450px) {
    row-gap: 2vh;
    width: 100%;
  }

  @media (max-height: 570px) {
    width: 70%;
    align-items: center;
    text-align: center;
    row-gap: 5vh;
    padding: 5vh 0;
    justify-content: space-around;
  }
  @media (min-height: 620px) {
    justify-content: space-evenly;
  }
`;

const StyledProjectImg = styled.img`
  width: 100%;
  border-radius: 18px;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
`;
const StyledProjectTitle = styled.h4`
  font-size: 1.87rem;
  font-weight: 500;
  line-height: 28px;
`;

const StyledSkillsText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }
  @media (max-width: 450px) {
    width: 70%;
  }
  @media (max-height: 570px) {
    width: 80%;
  }
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4vh;
`;
const StyledLanguagesContainer = styled.div`
  display: flex;
  column-gap: 0.5vw;
  color: ${(props) => props.theme === "light" && "#4338CA"};
  @media (max-width: 1000px) {
    column-gap: 2vw;
  }
`;

const StyledLanguage = styled.p`
  border: 1px solid #3730a3;
  padding: 0.3vh 0.9vw;
  font-size: 0.8rem;
  border-radius: 4px;
  font-weight: 500;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme === "light" && "#4338CA"};
  @media (max-width: 1000px) {
    column-gap: 5vw;
  }
`;

const StyledLink = styled.a`
  text-decoration: underline;
  line-height: 16px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
`;
function Project(props) {
  const { theme, project } = props;
  return (
    <StyledProjectContainer>
      <a href={project.site} target="_blank">
        <StyledProjectImg src={project.img} />
      </a>
      <StyledProjectTitle>{project.title}</StyledProjectTitle>
      <StyledSkillsText>{project.description}</StyledSkillsText>
      <StyledDetailsContainer>
        <StyledLanguagesContainer theme={theme}>
          <StyledLanguage>{project.lang1}</StyledLanguage>
          <StyledLanguage>{project.lang2}</StyledLanguage>
          <StyledLanguage>{project.lang3}</StyledLanguage>
        </StyledLanguagesContainer>

        <StyledLinkContainer theme={theme}>
          <StyledLink href={project.github} target="_blank">
            Github
          </StyledLink>
          <StyledLink href={project.site} target="_blank">
            View Site
          </StyledLink>
        </StyledLinkContainer>
      </StyledDetailsContainer>
    </StyledProjectContainer>
  );
}

export default Project;
