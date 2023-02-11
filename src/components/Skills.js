import React from "react";
import styled from "styled-components";

const StyledSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  width: 80%;
  margin: 19vh auto 0 auto;
  @media (max-width: 850px) {
    margin-top: 10vh;
  }
`;

const StyledSkillsTitle = styled.h2`
  font-weight: 600;
  line-height: 48px;
  font-size: 3rem;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const StyledSkillsOuterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    row-gap: 5vh;
  }
`;

const StyledSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  row-gap: 5vh;
  @media (max-width: 750px) {
    width: 70%;
    align-items: center;
  }
  @media (max-width: 450px) {
    row-gap: 2vh;
  }
`;

const StyledSkillTitle = styled.h4`
  font-size: 1.87rem;
  font-weight: 500;
  line-height: 28px;
`;

const StyledSkillsText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  @media (max-width: 750px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
  }
`;

function Skills() {
  return (
    <StyledSkillsContainer id="skills">
      <StyledSkillsTitle>Skills</StyledSkillsTitle>
      <StyledSkillsOuterContainer>
        <StyledSkillContainer>
          <StyledSkillTitle>Javascript</StyledSkillTitle>
          <StyledSkillsText>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </StyledSkillsText>
        </StyledSkillContainer>
        <StyledSkillContainer>
          <StyledSkillTitle>React.Js</StyledSkillTitle>
          <StyledSkillsText>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </StyledSkillsText>
        </StyledSkillContainer>
        <StyledSkillContainer>
          <StyledSkillTitle>Node.Js</StyledSkillTitle>
          <StyledSkillsText>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </StyledSkillsText>
        </StyledSkillContainer>
      </StyledSkillsOuterContainer>
    </StyledSkillsContainer>
  );
}

export default Skills;
