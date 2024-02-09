import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Blag from "./Components/Blag";
import TenBlags from "./Components/TenBlags";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blag" element={<Blag />}></Route>
        <Route path="/blags" element={<TenBlags />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
