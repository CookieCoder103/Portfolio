import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  techStack: React.ReactNode;
}

const ProjectTechList = ({ techStack }: Props) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>Tech Stack</PopoverTrigger>
        <PopoverContent className="flex flex-col flex-wrap mt-2 justify-center items-center">{techStack}</PopoverContent>
      </Popover>
    </>
  );
};

export default ProjectTechList;
