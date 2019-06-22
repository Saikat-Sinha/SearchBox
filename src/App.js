import React from "react";
import { createGlobalStyle } from "styled-components";

import SearchBox from "./components/SearchBox";

import data from "./data";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e4ccc5;
    font-size: 20px;
    font-weight: 200;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SearchBox data={data} />
    </div>
  );
}

export default App;
