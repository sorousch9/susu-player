import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
