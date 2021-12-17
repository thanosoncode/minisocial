import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./Context";
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
