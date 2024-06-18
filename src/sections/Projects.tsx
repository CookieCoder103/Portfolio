import Card from "../components/Card/Card";
import Marc from "./../assets/Marc.jpg";
import John from "./../assets/Johns-Photography.jpg";
import Solar from "./../assets/Solar.jpg";

const Projects = () => {
  return (
    <>
      <div id="Projects">
        <h1 className="w-full text-center font-bold text-5xl py-5 cursor-default pb-7">
          Projects
        </h1>
        <div className="flex flex-col gap-10 pb-20">
          <div className="hover:scale-105 duration-300 ease-in-out">
            <a
              href="https://cookiecoder103.github.io/Refreshed-Solar/"
              target="_blank"
            >
              <Card
                title="Refreshed Solar"
                description="The Refreshed Solar React project refurbishes broken solar panels for affordable resale to homes and corporations. Key functionalities include React-Router-Dom for routing, React hooks, and Framer-Motion for professional animations."
                img={Solar}
                tech="React"
              />
            </a>
          </div>
          <div className="hover:scale-105 duration-300 ease-in-out">
            <a
              href="https://cookiecoder103.github.io/Johns-Photography/"
              target="_blank"
            >
              <Card
                title="Johns Photography"
                description="I initially created this website with HTML, CSS, and
              JavaScript, but later rebuilt it using React. This was my
              first React project, and I used react-scroll to get accustomed
              to components and React as a whole."
                img={John}
                tech="React"
              />
            </a>
          </div>
          <div className="hover:scale-105 duration-300 ease-in-out">
            <a
              href="https://github.com/CookieCoder103/Meditations_Quotes"
              target="_blank"
            >
              <Card
                title="Meditations Quotes"
                description="This Chrome extension provides inspiring quotes from Marcus
              Aurelius for tough days. It's crafted with basic HTML, CSS,
              and JavaScript."
                img={Marc}
                tech="Html | Css | Js"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
