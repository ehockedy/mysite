import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about"
import Home from "../pages/home"
import Projects from "../pages/projects"
import Layout from "../pages/layout"

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);