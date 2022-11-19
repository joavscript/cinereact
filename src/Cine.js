import Peliculas from "./pages/Peliculas.js"
import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/components/css/normalize.css"
import "../src/components/css/Estilos1.css"



export default function Cine() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Peliculas" element={<Peliculas />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  )
};