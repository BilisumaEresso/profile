import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ScrollToHash from "./assets/components/ScrollToHash";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Background ambient light */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[90px]" />
        <div className="absolute bottom-0 right-1/4 h-[460px] w-[460px] translate-y-1/2 rounded-full bg-blue-500/5 blur-[85px]" />
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
        <main className="grow flex flex-col pt-24 pb-16">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
