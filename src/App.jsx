import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import GalaxyBackground from "./assets/components/GalaxyBackground";

import { Routes, Route } from "react-router-dom";
import UFO from "./assets/components/UFO";
import Footer from "./assets/components/Footer";
import ScrollToHash from "./assets/components/ScrollToHash";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* 🌌 GLOBAL GALAXY BACKGROUND */}
      <GalaxyBackground />
      <UFO />

      {/* CONTENT */}
      <Navbar />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily:"fantasy"
          },
        }}
      />
      <ScrollToHash />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
