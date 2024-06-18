import { Route, Routes } from "react-router-dom";

// Comps
import Navbar from "./components/Navbar/Navbar";
import ThemeController from "./components/ThemeController/ThemeController";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col gap-2 fixed z-50">
          <div className="relative left-4 top-2">
            <ThemeController />
          </div>
          <Navbar />
      </div>
      
      {/*  */}

      <div className="container mx-auto">
        <Routes>
          <Route path="/Portfolio/" element={<Home />}></Route>
          <Route path="/Portfolio/Resume" element={<Resume />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
