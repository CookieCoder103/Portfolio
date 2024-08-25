import CardComp from "../global/CardComp";
import profileImage from "../../assets/Me.jpg";
import TechBadge from "../global/TechBadge";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiCsharp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const About = () => {
  return (
    <>
      <CardComp
        image={profileImage}
        title="Web Developer"
        description="Either hate it or love it, no inbetween."
        header="About Me"
      >
          <div className="px-2">
            <h1>Languages & FrameWorks:</h1>
          </div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechBadge icon={<FaReact/>} name="React"/>
          <TechBadge icon={<SiTypescript/>} name="TypeScript"/>
          <TechBadge icon={<IoLogoJavascript/>} name="JavaScript"/>
          <TechBadge icon={<SiCsharp/>} name="C#"/>
          <TechBadge icon={<RiTailwindCssFill/>} name="TailWindCSS"/>
          <TechBadge icon={<AiOutlineDotNet/>} name="ASP.Net-Core-8.0"/>
          <TechBadge icon={<FaPython/>} name="Python"/>
        </div>
        <div className="px-2 pt-8">
            <h1>UI Libraries:</h1>
          </div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechBadge icon={<SiDaisyui/>} name="DaisyUI"/>
          <TechBadge icon={<SiShadcnui/>} name="ShadcnUI"/>
          <TechBadge icon={<SiMui/>} name="MaterialUI"/>
        </div>
      </CardComp>
    </>
  );
};

export default About;
