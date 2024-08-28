import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";

import About from "./components/sections/About";
import Header from "./components/sections/Header";
import Nav from "./components/sections/Nav";
import Footer from "./components/sections/Footer";
import Projects from "./components/sections/Projects";
import More from "./components/sections/More";
import Resume from "./components/sections/Resume";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1000);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSections = () => (
    <>
      <section id="about-me">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="more-on-me">
        <More />
      </section>
      <section id="resume">
        <Resume />
      </section>
    </>
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={`container mx-auto ${isSmallScreen ? "main-content" : "md:px-20"}`}>
        <Header />
        <div className={`grid ${isSmallScreen ? "grid-cols-1" : "grid-cols-4 gap-5"}`}>
          <div className={`${isSmallScreen ? "col-span-1" : "col-span-1"}`}>
            <Nav />
          </div>
          <div className={`${isSmallScreen ? "w-full flex flex-col gap-5 mt-20" : "col-span-3 flex flex-col gap-5"}`}>
            {renderSections()}
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
