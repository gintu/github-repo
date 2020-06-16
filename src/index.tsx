import * as React from "react";
import { render } from "react-dom";
import { StoreProvider } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
