import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { lightTheme, darkTheme } from "./Themes";

const StyledFooterOuterContainer = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "black" : "#f9f9f9"};
  box-sizing: border-box;
  padding: 14vh 0;

  display: flex;
  align-items: start;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2vh;
  }
`;

const StyledFooterInnerContainer = styled.div`
  width: 80%;
  margin: 0 0 0 10%;
  display: flex;
  flex-direction: column;
  row-gap: 8vh;
  @media (max-width: 1000px) {
    width: 60%;
    align-items: center;
    margin: 0;
  }
`;

const StyledFooterTitle = styled.h2`
  font-size: 2.625rem;
  font-weight: 600;
  width: 80%;
  line-height: 52.5px;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 0;
    text-align: center;
  }
`;

const StyledEmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  column-gap: 2vw;
  @media (max-width: 1000px) {
    flex-direction: column;
    row-gap: 3vh;
    align-items: center;
  }
`;

const StyledEmail = styled.a`
  color: #af0c48;
  text-decoration: underline;
  font-weight: 500;
  font-size: 1.25rem;
`;

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 3vw;
  width: 50%;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const StyledGithubLink = styled.a`
  color: #00ab6b;
  font-weight: 500;
  line-height: 27px;
  font-size: 1.125rem;
`;

const StyledLinkedinLink = styled.a`
  color: #0077b5;
  font-weight: 500;
  line-height: 27px;
  font-size: 1.1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  row-gap: 2vh;
  margin-right: 10%;
  font-family: "Inter", sans-serif;
  @media (max-width: 1000px) {
    margin: 0;
    row-gap: 4vh;
  }
  @media (max-width: 450px) {
    width: 70%;
  }
`;

const StyledFormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #3730a3;
  border-radius: 6px;
  padding: 1vh 0;
  color: #6b7280;
  font-size: 0.85rem;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid #3730a3;
  border-radius: 6px;
  padding: 1vh 0;
  color: #6b7280;
`;

const StyledButton = styled.button`
  border: 1px solid #3730a3;
  width: 50%;
  margin: 0 auto;
  border-radius: 6px;
  padding: 1vh 0;
  font-weight: 500;
  &:hover {
    background-color: #3730a3;
    color: white;
  }
  background-color: ${(props) => (props.disabled ? "#CFD2CF" : "white")};
  color: ${(props) => (props.disabled ? "white" : "#3730a3")};
  border: ${(props) =>
    props.disabled ? "1px solid white" : "1px solid #3730a3"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Footer(props) {
  const { formSuccess, theme } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    formSuccess();
    reset();
  };

  const sendEmail = (formData) => {
    onSubmit(formData);
    emailjs
      .send(
        "service_9z316dy",
        "template_mn0e4ld",
        formData,
        "vR-TZXFb4CC3SnQKa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <StyledFooterOuterContainer id="hire-me" theme={theme}>
      <StyledFooterInnerContainer>
        <StyledFooterTitle>
          Let's work together on your next product
        </StyledFooterTitle>
        <StyledEmailContainer>
          <StyledEmail href="mailto:yzarbun@gmail.com" target="_blank">
            yzarbun@gmail.com
          </StyledEmail>
          <StyledLinksContainer>
            <StyledGithubLink
              href="https://github.com/yigitzarbun"
              target="_blank"
            >
              Github
            </StyledGithubLink>
            <StyledLinkedinLink
              href="https://www.linkedin.com/in/yigit-zarbun-732924107/"
              target="_blank"
            >
              LinkedIn
            </StyledLinkedinLink>
          </StyledLinksContainer>
        </StyledEmailContainer>
      </StyledFooterInnerContainer>
      <StyledForm
        onSubmit={handleSubmit(sendEmail)}
        href="mailto:yzarbun@gmail.com"
      >
        <StyledFormTitle>Contact me</StyledFormTitle>
        <StyledLabel htmlFor="name">
          Full Name
          <StyledInput
            type="text"
            name="name"
            id="name"
            {...register("name", {
              required: "Please enter your name",
              maxLength: {
                value: 25,
                message: "Maximum 25 characters allowed",
              },
            })}
          />
        </StyledLabel>
        {errors.name && (
          <p className="formErrorMessage">{errors.name.message}</p>
        )}
        <StyledLabel htmlFor="email">
          Email
          <StyledInput
            type="email"
            name="email"
            id="email"
            {...register("email", { required: "Email address is required" })}
          />
        </StyledLabel>
        {errors.email && (
          <p className="formErrorMessage">{errors.email.message}</p>
        )}
        <StyledLabel htmlFor="message">
          Message
          <StyledTextArea
            name="message"
            id="message"
            {...register("message", {
              required: "This is a required field",
              maxLength: {
                value: 200,
                message: "Maximum 200 characters allowed",
              },
            })}
          />
        </StyledLabel>
        {errors.message && (
          <p className="formErrorMessage">{errors.message.message}</p>
        )}
        <StyledButton type="submit" disabled={!isValid}>
          Send
        </StyledButton>
      </StyledForm>
    </StyledFooterOuterContainer>
  );
}

export default Footer;
