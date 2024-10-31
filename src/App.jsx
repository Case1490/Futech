import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home } from "./components/Home";
import ElectricMotorcycles from "./components/ElectricMotorcycles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import ChangesReturns from "./components/ChangesReturns";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motos-electricas" element={<ElectricMotorcycles />} />
        <Route path="/motos-electricas/:id" element={<Product />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/cambios-devoluciones" element={<ChangesReturns />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
