import * as React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { GlobalStyles } from "../GlobalStyles";

export const Head = () => <title>Home Page</title>;

const Index = () => {
  return (
    <GlobalStyles>
      <Header />
      <Main />
    </GlobalStyles>
  );
};

export default Index;
