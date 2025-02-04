import React from "react";
import './index.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Gallery from "./Routes/Gallery";
import DownloadCv from "./Routes/DownloadCv";
// import NotFound from "./Routes/NotFound"; // New NotFound component
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/downloadcv" element={<DownloadCv />} />
        {/* <Route path="*" element={<NotFound />} /> Fallback route */}
      </Routes>
    </>
  );
}

export default App;
