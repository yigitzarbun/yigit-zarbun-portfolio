import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.78vw;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const StyledLine = styled.hr`
  border: 0.1rem solid #3730a3;
  width: 7.9vw;
`;

const StyledNameText = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
`;

const StyledHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5vw;
  @media (max-width: 850px) {
    flex-direction: column;
    row-gap: 5vh;
  }
`;

const StyledHeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  margin-top: 5vh;
  overflow-wrap: break-word;
  width: 75%;
  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 450px) {
    text-align: center;
    width: 90%;
  }
`;

const StyledHeroTitle = styled.h2`
  font-weight: 900;
  font-size: 4rem;
  line-height: 72px;
  word-break: break-word;
  @media (max-width: 450px) {
    font-size: 3.2rem;
    line-height: 60px;
  }
`;

const StyledHeroTexts = styled.p``;

const StyledLinkOuterContainer = styled.div`
  display: flex;
  column-gap: 1vw;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1vh;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHireMeContainer = styled.div`
  width: 10vw;
  height: 7vh;
  border: 1px solid #3730a3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1vw;
  background-color: #3730a3;
  cursor: pointer;
  @media (max-width: 880px) {
    width: 50%;
    height: 6vh;
  }
`;

const StyledHireMeContainerText = styled.p`
  font-size: 1.1rem;
  color: white;
`;

const StyledLinkContainer = styled.div`
  width: 10vw;
  height: 7vh;
  border: 1px solid #3730a3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1vw;
  cursor: pointer;
  @media (max-width: 950px) {
    column-gap: 0.1vw;
  }
  @media (max-width: 880px) {
    width: 50%;
    column-gap: 1.5vw;
    height: 6vh;
  }
`;

const StyledLinkContainerText = styled.a`
  font-size: 1.1rem;
`;

const StyledLinkContainerImage = styled.img`
  width: 1rem;
`;
const StyledYigitImage = styled.div`
  width: 42vw;
  height: 50.3vh;
  background-position: center;
  background-size: cover;
  background-image: url("./images/yigit.JPG");
  background-repeat: no-repeat;
  border-radius: 18px;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  @media (max-width: 850px) {
    width: 60%;
    height: 30vh;
  }
  @media (max-width: 450px) {
    width: 90%;
    height: 30vh;
  }
`;

function Intro() {
  return (
    <StyledIntroContainer>
      <StyledHeroContainer>
        <StyledHeroTextContainer>
          <StyledNameContainer>
            <StyledLine />
            <StyledNameText>Yiğit Zarbun</StyledNameText>
          </StyledNameContainer>
          <StyledHeroTitle>Business-oriented web developer </StyledHeroTitle>
          <StyledHeroTexts>
            Hi, I’m Yigit, a full-stack developer. If you are looking for a
            Developer to craft solid and scalable frontend products, check out
            some of my work and feel free to get in touch with me.
          </StyledHeroTexts>
          <StyledLinkOuterContainer>
            <StyledHireMeContainer>
              <HashLink smooth to="/#hire-me">
                <StyledHireMeContainerText>Hire me</StyledHireMeContainerText>
              </HashLink>
            </StyledHireMeContainer>
            <StyledLinkContainer>
              <StyledLinkContainerImage src="./images/github.png" />
              <StyledLinkContainerText
                href="https://github.com/yigitzarbun"
                target="_blank"
              >
                Github
              </StyledLinkContainerText>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLinkContainerImage src="./images/LinkedIn.png" />
              <StyledLinkContainerText
                href="https://www.linkedin.com/in/yigit-zarbun-732924107/"
                target="_blank"
              >
                LinkedIn
              </StyledLinkContainerText>
            </StyledLinkContainer>
          </StyledLinkOuterContainer>
        </StyledHeroTextContainer>
        <StyledYigitImage></StyledYigitImage>
      </StyledHeroContainer>
    </StyledIntroContainer>
  );
}

export default Intro;
