import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routing from "./Routing";

import {
  ContainerInner,
  ContainerInners,
  LayoutContainer,
  LayoutContainers,
} from "./styles/layout";

function App() {
  return (
    <LayoutContainers>
      <ContainerInners>
        <Header />
        <Routing />
      </ContainerInners>
    </LayoutContainers>
  );
}

export default App;
