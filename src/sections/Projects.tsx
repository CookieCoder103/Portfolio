
import Timeline from "../components/Timeline/Timeline";

const Projects = () => {
  return (
    <>
      <div id="Projects">
        <h1 className="w-full text-center font-bold text-5xl py-5 hover:tracking-widest duration-300 ease-in-out">
          Projects
        </h1>
        <div className="md:px-10">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default Projects;
