import CardComp from "../global/CardComp";
import ProjectCard from "../global/ProjectCard";
import Jane from "../../assets/jane.jpg";
import InvestIQ from "../../assets/InvestIQ.jpg";
import Solar from "../../assets/Solar.jpg";
import TechBadge from "../global/TechBadge";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiMui } from "react-icons/si";

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
            webLink="https://SohrabYavari.github.io/janes-photography/"
            gitLink="https://github.com/SohrabYavari/janes-photography"
            title="Janes Photography"
            description="A personal Portfolio for a wedding photographer."
            techStack={
              <>
                <TechBadge icon={<FaReact />} name="React" />
                <TechBadge icon={<SiTypescript />} name="TypeScript" />
                <TechBadge icon={<RiTailwindCssFill />} name="TailWindCSS" />
                <TechBadge icon={<SiShadcnui />} name="ShadcnUI" />
              </>
            }
            />

          <ProjectCard
            image={InvestIQ}
            webLink="https://SohrabYavari.github.io/InvestIQ/"
            gitLink="https://github.com/SohrabYavari/InvestIQ"
            title="InvestIQ"
            description="This uses axios to utilise REST apis to get real-time stock prices for NASDAQ companies."
            techStack={
              <>
                <TechBadge icon={<FaReact />} name="React" />
                <TechBadge icon={<SiTypescript />} name="TypeScript" />
                <TechBadge icon={<RiTailwindCssFill />} name="TailWindCSS" />
                <TechBadge icon={<SiDaisyui />} name="DaisyUI" />
              </>
            }
            />

          <ProjectCard
            image={Solar}
            webLink="https://SohrabYavari.github.io/Refreshed-Solar/"
            gitLink="https://github.com/SohrabYavari/Refreshed-Solar"
            title="Refreshed Solar"
            description="A website for a company that refurbishes and re-sells solar panels at an affordable rate for bussinesses and homeowners."
            techStack={
              <>
                <TechBadge icon={<FaReact />} name="React" />
                <TechBadge icon={<IoLogoJavascript />} name="JavaScript" />
                <TechBadge icon={<SiMui />} name="MaterialUI" />
              </>
            }
            />
        </div>
      </CardComp>
    </>
  );
};

export default Projects;
