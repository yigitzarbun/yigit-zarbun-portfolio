import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyled";
import { lightTheme, darkTheme } from "./components/Themes";
//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");
  const handleDarkmode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const formSuccess = () => {
    toast("Thank you for your message!");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToastContainer />
      <Header handleDarkmode={handleDarkmode} />
      <Intro />
      <Skills />
      <Profile />
      <Projects />
      <Footer formSuccess={formSuccess} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
