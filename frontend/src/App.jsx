import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Clubs from "./pages/Clubs";
import Navbar from "./components/Navbar";
import Cells from "./pages/Cells";

function App() {

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/Cells" element={<Cells />} />
      </Routes>
    </Router>
    
    
  )
}

export default App
