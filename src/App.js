import "./App.css";
import { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState(getTheme());

  function getTheme() {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  }

  function themeProvider() {
    localStorage.setItem("theme", theme);
  }
  const handleDarkmode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const formSuccess = () => {
    toast("Thank you for your message!");
  };

  useEffect(() => {
    themeProvider();
    getTheme();
  }, [theme]);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToastContainer />
      <Header handleDarkmode={handleDarkmode} />
      <Intro />
      <Skills />
      <Profile />
      <Projects theme={theme} />
      <Footer formSuccess={formSuccess} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
