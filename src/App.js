import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import React, { Component } from 'react';
import Contact from "./pages/contact"
import Projects from "./pages/projects"

function App() {
  return <><Navbar></Navbar>
  <div className="container">
    <Routes>
      <route path="./pages/contact" element={<Contact />} />
      <route path="./pages/projects" element={<Projects />} />
    </Routes>
  </div></>
}


export default App;
