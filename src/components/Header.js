import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const StyledHeaderContainer = styled.div`
  padding: 11vh 0 7vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 450px) {
    flex-direction: column;
    row-gap: 3vh;
    padding: 5vh 0 2vh 0;
  }
`;
const StyledLogoContainer = styled.div`
  color: #7b61ff;
  transform: rotate(24deg);
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  display: flex;

  @media (max-width: 920px) {
    border-radius: 5px;
    width: 10vw;
    height: 10vh;
    transform: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const StyledDarkIcon = styled.img`
  width: 2rem;
  cursor: pointer;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  column-gap: 4vw;
  align-items: center;
  width: 50%;
  @media (max-width: 850px) {
    padding: 0.5vh 1vw;
    width: 50vw;
  }
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const StyledNavLink = styled.a`
  font-size: 1.125;

  font-weight: 500;
  line-height: 28px;
  cursor: pointer;
  &:hover {
    color: #3730a3;
  }
`;

const StyledHireContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border: 1px solid #3730a3;
  border-radius: 6px;
  padding: 1vh 0;
  width: 12vw;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #3730a3;
    color: white;
  }

  @media (max-width: 850px) {
    width: 15vw;
  }
  @media (max-width: 450px) {
    width: 25vw;
  }
`;

function Header(props) {
  const { handleDarkmode } = props;
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer>
        <p>Y</p>
      </StyledLogoContainer>
      <StyledNav>
        <StyledDarkIcon src="./images/moon.png" onClick={handleDarkmode} />
        <a href="/files/cv.pdf" target="_blank">
          CV
        </a>
        <HashLink smooth to="/#skills">
          {" "}
          <StyledNavLink>Skills</StyledNavLink>
        </HashLink>
        <HashLink smooth to="/#projects">
          <StyledNavLink>Projects</StyledNavLink>
        </HashLink>
        <HashLink smooth to="/#hire-me">
          <StyledHireContainer>
            <p>Hire Me</p>
          </StyledHireContainer>
        </HashLink>
      </StyledNav>
    </StyledHeaderContainer>
  );
}

export default Header;
