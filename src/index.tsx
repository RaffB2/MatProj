import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EuRozpocet } from "./components/EuRozpocet";
import { EuClen } from "./components/EuClen";
import { EuProblemy } from "./components/EuProblemy";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="eu-rozpocet" element={<EuRozpocet />} />
        <Route path="eu-clen" element={<EuClen />} />
        <Route path="eu-problemy" element={<EuProblemy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
