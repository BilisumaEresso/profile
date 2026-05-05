import About from "./About";
import Contact from "./Contact";
import HeroSection from "./sections/HeroSection";
import ManifestoSection from "./sections/ManifestoSection";
import TelegramCtaSection from "./sections/TelegramCtaSection";
import ToolkitSection from "./sections/ToolkitSection";

const Home = () => {
  return (
    <div className="mx-auto flex grow w-full max-w-5xl flex-col overflow-visible px-4 sm:px-6 md:px-8">
      <HeroSection />
      <ManifestoSection />
      <ToolkitSection />
      <About />
      <TelegramCtaSection />
      <Contact />
    </div>
  );
};

export default Home;
