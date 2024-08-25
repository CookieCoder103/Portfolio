import CardComp from "../global/CardComp";
import ProjectCard from "../global/ProjectCard";
import Jane from "../../assets/jane.jpg";
import InvestIQ from "../../assets/InvestIQ.jpg";
import Solar from "../../assets/Solar.jpg";

const Projects = () => {
  return (
    <>
      <CardComp
        header="Projects"
        title="Finished Projects"
        description="A showcase on the different projects that I have worked on."
      >
        <div className="flex flex-col gap-2">
          <ProjectCard
            image={Jane}
            webLink="https://cookiecoder103.github.io/janes-photography/"
            gitLink="https://github.com/CookieCoder103/janes-photography"
            title="Janes Photography"
            description="A personal Portfolio for a wedding photographer."
          />

          <ProjectCard
            image={InvestIQ}
            webLink="https://cookiecoder103.github.io/InvestIQ/"
            gitLink="https://github.com/CookieCoder103/InvestIQ"
            title="InvestIQ"
            description="A Website where you can track the top F500 and NASDAQ companies stock prices."
          />

          <ProjectCard
            image={Solar}
            webLink="https://cookiecoder103.github.io/Refreshed-Solar/"
            gitLink="https://github.com/CookieCoder103/Refreshed-Solar"
            title="Refreshed Solar"
            description="A website for a company that refurbishes and re-sells solar panels at an affordable rate for bussinesses and homeowners."
          />
        </div>
      </CardComp>
    </>
  );
};

export default Projects;
