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
  @media (max-width: 450px) {
    width: 80%;
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
            <tbody>
              <tr>
                <StyledTh>Year of Birth</StyledTh>
                <StyledTd>1993</StyledTd>
              </tr>
              <tr>
                <StyledTh>Location</StyledTh>
                <StyledTd>Istanbul</StyledTd>
              </tr>
              <tr>
                <StyledTh>Education</StyledTh>
                <StyledTd>
                  University of Edinburgh, Int'l Business, 2016
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>Preferred Position</StyledTh>
                <StyledTd>Frontend</StyledTd>
              </tr>
            </tbody>
          </StyledTable>
        </StyledProfileContainer>
        <StyledAboutMeContainer>
          <StyledProfileSubTitle>About Me</StyledProfileSubTitle>
          <StyledProfileText>
            After completing my BA in Int. Relations and MSc in International
            Business in London and Edinburgh, respectively, I returned back to
            my hometown Istanbul in 2018 and obtained my second MSc degree in
            Energy Technologies.Then, I worked at export, business development
            and strategy roles for 5 years at some of the largest coroporations
            in Turkey. Recently, I decided to embark on a new career path
            towards web-development, which I hope will create new opportunities
            for me to craft innovative products that make life easier for
            individuals and businesses.
          </StyledProfileText>
        </StyledAboutMeContainer>
      </StyledProfileTextsContainer>
    </StyledProfilesContainer>
  );
}

export default Profile;
