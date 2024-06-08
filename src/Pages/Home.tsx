import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
    <div>
      <Hero />
      <div className="divider p-2" />
      <About />
      <div className="divider p-2" />
      <Projects />
    </div>
    </>
  );
};

export default Home;
