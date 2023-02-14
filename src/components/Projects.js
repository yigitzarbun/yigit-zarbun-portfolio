import React from "react";
import styled from "styled-components";

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
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    row-gap: 10vh;
  }
`;

const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  row-gap: 3vh;
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
`;

const StyledProjectImg = styled.img`
  width: 90%;
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

function Projects(props) {
  const { theme } = props;
  return (
    <StyledProjectsContainer id="projects">
      <StyledProjectsTitle>Projects</StyledProjectsTitle>
      <StyledProjectsOuterContainer>
        <StyledProjectContainer>
          <StyledProjectImg src="./images/fav-movies.png" />
          <StyledProjectTitle>Favourite Movies</StyledProjectTitle>
          <StyledSkillsText>
            A simple app that allows users to browse along a range of movies and
            add/remove movies to their favourite movies list. This app was
            created with React, Redux, React-Router-Dom and Tailwindcss.
          </StyledSkillsText>
          <StyledLanguagesContainer theme={theme}>
            <StyledLanguage>react</StyledLanguage>
            <StyledLanguage>redux</StyledLanguage>
            <StyledLanguage>tailwind</StyledLanguage>
          </StyledLanguagesContainer>
          <StyledLinkContainer theme={theme}>
            <StyledLink
              href="https://github.com/yigitzarbun/fsweb-s10g3-redux-watchlist"
              target="_blank"
            >
              Github
            </StyledLink>
            <StyledLink
              href="https://fsweb-s10g3-redux-watchlist-kh1ced2d3-yigitzarbun.vercel.app/"
              target="_blank"
            >
              View Site
            </StyledLink>
          </StyledLinkContainer>
        </StyledProjectContainer>
        <StyledProjectContainer>
          <StyledProjectImg src="./images/shopping-cart.png" />
          <StyledProjectTitle>Shopping Cart</StyledProjectTitle>
          <StyledSkillsText>
            A shopping cart page where users may add/remove products to their
            basket. Data is stored on the Local Storage, which prevents
            unintended loss of changes. This app was created using React and
            Context API.
          </StyledSkillsText>
          <StyledLanguagesContainer theme={theme}>
            <StyledLanguage>react</StyledLanguage>
            <StyledLanguage>context api</StyledLanguage>
            <StyledLanguage>styled comp.</StyledLanguage>
          </StyledLanguagesContainer>
          <StyledLinkContainer theme={theme}>
            <StyledLink
              href="https://github.com/yigitzarbun/fsweb-s11g1-shopping-cart"
              target="_blank"
            >
              Github
            </StyledLink>
            <StyledLink
              href="https://fsweb-s11g1-shopping-cart.vercel.app/"
              target="_blank"
            >
              View Site
            </StyledLink>
          </StyledLinkContainer>
        </StyledProjectContainer>
        <StyledProjectContainer>
          <StyledProjectImg src="./images/movie-db.png" />
          <StyledProjectTitle>IMDB Movies</StyledProjectTitle>
          <StyledSkillsText>
            This is a simple movie database app where users can add/remove
            movies to their favourite movies list and add/delete movies. It was
            created by using React, Redux and Tailwindcss. created
          </StyledSkillsText>
          <StyledLanguagesContainer theme={theme}>
            <StyledLanguage>react</StyledLanguage>
            <StyledLanguage>redux</StyledLanguage>
            <StyledLanguage>tailwind</StyledLanguage>
          </StyledLanguagesContainer>
          <StyledLinkContainer theme={theme}>
            <StyledLink
              href="https://github.com/yigitzarbun/fsweb-s10g2-redux-filmler"
              target="_blank"
            >
              Github
            </StyledLink>
            <StyledLink
              href="https://fsweb-s10g2-redux-filmler-olive.vercel.app/movies"
              target="_blank"
            >
              View Site
            </StyledLink>
          </StyledLinkContainer>
        </StyledProjectContainer>
      </StyledProjectsOuterContainer>
    </StyledProjectsContainer>
  );
}

export default Projects;
