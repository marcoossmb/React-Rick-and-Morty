/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./Layout";
import Actores from "./components/autor/Actores";
import Episodios from "./components/episodiocars/Episodios";
import EpisodiosActores from "./components/episodiosactors/EpisodiosActores";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="actores" element={<Actores />} />
        <Route path="episodios" element={<Episodios />}>
          <Route path=":id" element={<EpisodiosActores />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);