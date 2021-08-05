import React from "react";
import ReactDOM from "react-dom";
import { AppClass } from "./AppClass";
import { AppFunc } from "./AppFunc";

ReactDOM.render(
  <React.StrictMode>
    <AppClass title="Чатик (class app)" author="Alex" />
    <hr />
    <AppFunc title="Чатик (function app)" author="John Doe" />
  </React.StrictMode>,
  document.getElementById("root")
);
