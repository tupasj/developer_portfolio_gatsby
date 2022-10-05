import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { GlobalStyles } from "../GlobalStyles";
import { Footer } from "../components/Footer";

export const Head = () => (
  <>
    <title>Jeremy Tupas | Web Developer Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    ></link>
    <link rel="apple-touch-icon" sizes="180x180" href="http://localhost:8080/images/favicon/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="http://localhost:8080/images/favicon/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="http://localhost:8080/images/favicon/favicon-16x16.png"></link>
    <link rel="icon" type="image/x-icon" href="http://localhost:8080/images/favicon/favicon.ico"></link>
    <link rel="manifest" href="http://localhost:8080/site.webmanifest"></link>
  </>
);

const lightTheme = {
  switchPosition: 29,
  h2Color: "var(--dark-blue)",
  bannerIntroTextTopColor: "var(--dark-blue)",
  mainTextColor: "var(--dark-blue)",
  mainBackgroundColor: "var(--light-gray)",
  aboutBackgroundColor: "var(--regular-gray)",
  projectsBackgroundColor: "var(--regular-gray)",
  projectBackgroundColor: "var(--light-gray)",
  projectBoxShadow: "0px 0px 6px 2px rgba(0,0,0,0.25)",
  technologyUsedBackgroundColor: "var(--dark-blue)",
  contactFormBackgroundColor: "var(--light-gray)",
  contactFormBoxShadow: "0px 0px 2px 2px rgba(0,0,0,0.25)",
  footerBorderTop: "none",
};

const darkTheme = {
  switchPosition: 0,
  h2Color: "var(--light-gray)",
  bannerIntroTextTopColor: "var(--light-gray)",
  mainTextColor: "var(--light-gray)",
  mainBackgroundColor: "var(--dark-blue)",
  aboutBackgroundColor: "var(--dark-gray)",
  projectsBackgroundColor: "var(--dark-gray)",
  projectBackgroundColor: "var(--dark-blue)",
  projectBoxShadow: "0px 0px 6px 2px rgba(255,255,255,0.25)",
  technologyUsedBackgroundColor: "var(--light-blue)",
  contactFormBackgroundColor: "var(--dark-blue)",
  contactFormBoxShadow: "0px 0px 2px 2px rgba(255,255,255,0.25)",
  footerBorderTop: "2px solid rgba(255,255,255,0.25)",
};

const Index = () => {
  const [theme, setTheme] = React.useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

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
