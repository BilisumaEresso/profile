import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";

import { Routes, Route } from "react-router-dom";
import Footer from "./assets/components/Footer";
import ScrollToHash from "./assets/components/ScrollToHash";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Background ambient light */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] mix-blend-screen transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen transform translate-y-1/2"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#171717",
              color: "#fff",
              border: "1px solid #262626",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            },
          }}
        />
        <ScrollToHash />
        <main className="flex-grow flex flex-col pt-24 pb-16">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
