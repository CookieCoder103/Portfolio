import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
    <div className="px-5">
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
