import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Reserve from "./pages/Reserve/Reserve";

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/reserve" element={<Reserve/>} />
     </Routes>
    </>
  );
};

export default App;
