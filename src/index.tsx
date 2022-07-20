import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { ContextProvider } from "./Context/ContextProvider";
import "./index.css";
import GlobalCSS from "./global.styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContextProvider>
          <GlobalCSS />
          <App />
        </ContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
