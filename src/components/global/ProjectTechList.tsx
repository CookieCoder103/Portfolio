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
        <PopoverTrigger className="bg-primary text-secondary p-1 px-3 rounded-full">Tech </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 flex-wrap mt-2 ml-10 justify-center items-center w-[200px]">{techStack}</PopoverContent>
      </Popover>
    </>
  );
};

export default ProjectTechList;
