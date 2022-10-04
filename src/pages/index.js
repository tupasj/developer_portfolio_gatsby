import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { GlobalStyles } from "../GlobalStyles";
import { Footer } from "../components/Footer";

export const Head = () => (
  <>
    <title>Home Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    ></link>
  </>
);

const lightTheme = {
  switchPosition: 28,
  mainBackgroundColor: "var(--light-gray)",
}

const darkTheme = {
  switchPosition: 0,
  mainBackgroundColor: "var(--dark-blue)",
}

const Index = () => {
  const [theme, setTheme] = React.useState("light");
  const isDarkTheme = (theme === "dark");

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  }

  return (
    <GlobalStyles>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Main />
        <Footer />
      </ThemeProvider>
    </GlobalStyles>
  );
};

export default Index;
