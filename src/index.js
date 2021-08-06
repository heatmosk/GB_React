import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App title="My chat" user="Alex" />
  </React.StrictMode>,
  document.getElementById("root")
);
