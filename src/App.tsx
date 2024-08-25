import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";

import About from "./components/sections/About";
import Header from "./components/sections/Header";
import Nav from "./components/sections/Nav";
import Footer from "./components/sections/Footer";
import Projects from "./components/sections/Projects";
import More from "./components/sections/More";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {isSmallScreen ? (
        <>
          <div className="container mx-auto main-content">
            <Header />
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <Nav />
              </div>
              <div className="w-full flex flex-col gap-5 mt-20">
                <section id="about-me">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="more-on-me">
                  <More />
                </section>
                <section id="resume"></section>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className="container mx-auto md:px-20">
            <Header />
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-1">
                <Nav />
              </div>
              <div className="col-span-3 flex flex-col gap-5">
                <section id="about-me">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="more-on-me">
                  <More />
                </section>
                <section id="resume"></section>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
