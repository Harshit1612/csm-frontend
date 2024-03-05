import React from "react";
import Upload from "./components/Upload.jsx";
import Process from "./components/Process.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/upload" element={<Upload />} />
      <Route path="/data" element={<Process />} />
    </Routes>
  </BrowserRouter>
);
