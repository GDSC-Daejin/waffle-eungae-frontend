import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routing from "./Routing";

import { ContainerInner, LayoutContainer } from "./styles/layout";

function App() {
  return (
    <>
      <Header />
      <Routing />
    </>
  );
}

export default App;
