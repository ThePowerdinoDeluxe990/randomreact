import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import Layout from "./layout.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout/>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
