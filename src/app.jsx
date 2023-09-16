import React from "react";
import Mainapp from "./pages/main.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./layout.jsx";


export default function App() {
  return (
     <Routes>
      <Route path="/" element={<Mainapp/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/about" element={<div>hola</div>} />
    </Routes>
  );
}
