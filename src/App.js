import React from "react";
import Header from "./components/Header";
import Routing from "./Routing";

import { ContainerInner, LayoutContainer } from "./styles/layout";

function App() {
  return (
    <LayoutContainer>
      <ContainerInner>
        <Header />
        <Routing />
      </ContainerInner>
    </LayoutContainer>
  );
}

export default App;
