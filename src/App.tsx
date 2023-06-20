import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./normalize.css";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import "./adaptive.css"
import AboutProduct from "./pages/AboutProduct";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element = {<AboutProduct/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
