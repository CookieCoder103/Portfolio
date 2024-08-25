import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import TechBadge from "./TechBadge";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

interface Props {
  image?: string;
  title: string;
  description: string;
  webLink: string;
  gitLink: string;
}

const ProjectCard: React.FC<Props> = ({
  image,
  title,
  description,
  webLink,
  gitLink,
}): JSX.Element => {
  return (
    <>
      <Card className="bg-secondary flex md:flex-row flex-col justify-center items-center shadow-none border-0">
        <CardHeader className="p-2">
          <img
            src={image}
            className="rounded-md md:w-[350px] w-[200px] h-[200px] object-cover"
          />
        </CardHeader>
        <div>
          <CardContent className="md:w-[400px] w-auto flex flex-col justify-center p-2">
            <CardTitle className="md:text-xl text-sm px-2 pb-2">
              {title}
            </CardTitle>
            <p className="text-sm md:text-md px-4">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <a href={webLink} target="_blank">
            <TechBadge icon={<FaGithub />} name="Web" />
            </a>
            <a href={gitLink} target="_blank">
              <TechBadge icon={<FaGlobe />} name="Git"/>
            </a>
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
