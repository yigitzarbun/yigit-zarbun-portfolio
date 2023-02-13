import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  h2 {
     color: ${({ theme }) => theme.h2};
  }
  h4{
    color: ${({ theme }) => theme.h4};
  }
  `;
