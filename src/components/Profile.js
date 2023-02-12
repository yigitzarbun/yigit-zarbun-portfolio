import React from "react";
import styled from "styled-components";

const StyledProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  width: 80%;
  row-gap: 5vh;
  border-top: 0.1rem solid #bab2e7;
  border-bottom: 0.1rem solid #bab2e7;
  padding: 5vh 0;
`;

const StyledProfileTitle = styled.h2`
  font-weight: 600;
  line-height: 48px;
  font-size: 3rem;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const StyledProfileTextsContainer = styled.div`
  display: flex;
  column-gap: 5vw;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    row-gap: 5vh;
  }
`;

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  width: 40%;
  @media (max-width: 750px) {
    width: 70%;
    align-items: center;
  }
`;

const StyledTable = styled.table`
  text-align: left;
  width: 30vw;
  border-collapse: separate;
  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    padding-left: 12vw;
  }
  @media (max-width: 450px) {
    width: 70vw;
  }
`;

const StyledTh = styled.th`
  padding-top: 0.3vw;
  vertical-align: top;
  @media (max-width: 750px) {
    padding-top: 3vh;
  }
`;

const StyledTd = styled.td`
  padding-top: 0.3vw;
  vertical-align: top;
  @media (max-width: 750px) {
    padding-top: 3vh;
  }
`;

const StyledAboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  width: 50%;
  @media (max-width: 750px) {
    align-items: center;
    width: 70%;
  }
`;

const StyledProfileSubTitle = styled.h4`
  font-size: 1.87rem;
  font-weight: 500;
  line-height: 28px;
`;

const StyledProfileText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

function Profile() {
  return (
    <StyledProfilesContainer>
      <StyledProfileTitle>Profile</StyledProfileTitle>
      <StyledProfileTextsContainer>
        <StyledProfileContainer>
          <StyledProfileSubTitle>Profile</StyledProfileSubTitle>
          <StyledTable>
            <tr>
              <StyledTh>Date of Birth</StyledTh>
              <StyledTd>03 December 1993</StyledTd>
            </tr>
            <tr>
              <StyledTh>Location</StyledTh>
              <StyledTd>Istanbul</StyledTd>
            </tr>
            <tr>
              <StyledTh>Education</StyledTh>
              <StyledTd>University of Edinburgh, Int'l Business, 2016</StyledTd>
            </tr>
            <tr>
              <StyledTh>Preferred Position</StyledTh>
              <StyledTd>Frontend</StyledTd>
            </tr>
          </StyledTable>
        </StyledProfileContainer>
        <StyledAboutMeContainer>
          <StyledProfileSubTitle>About Me</StyledProfileSubTitle>
          <StyledProfileText>
            After studying International Relations, International Business and
            Energy Technologies in the United Kingdom for over 6 years and
            working at export, business development and strategy positions, I
            decided to embark on a new career path towards web-development. I
            enjoy developing functional products and solving problems. I'm
            looking for projects and teams to collaborate with on creative
            projects.
          </StyledProfileText>
        </StyledAboutMeContainer>
      </StyledProfileTextsContainer>
    </StyledProfilesContainer>
  );
}

export default Profile;
