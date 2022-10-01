import * as React from "react";
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

const Index = () => {
  return (
    <GlobalStyles>
      <Header />
      <Main />
      <Footer />
    </GlobalStyles>
  );
};

export default Index;