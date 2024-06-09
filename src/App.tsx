import { Outlet } from "react-router";
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
      <div className="pl-2 pt-2">
        <ThemeController />
      </div>
      <Navbar />
      <Routes>
        <Route path="/Portfolio/" element={<Home />}></Route>
        <Route path="/Portfolio/Resume" element={<Resume />}></Route>
      </Routes>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
