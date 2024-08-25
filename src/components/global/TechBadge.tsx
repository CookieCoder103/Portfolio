import React from "react";

interface Props {
  icon: React.ReactNode;
  name: string;
}

const TechBadge: React.FC<Props> = ({ icon, name }): JSX.Element => {
  return (
    <>
      <div className="px-4 border-dotted border-2 border-[#444] p-1 rounded-full">
        <div className="flex items-center opacity-50 hover:opacity-100 duration-150 ease-in-out">
          <figure>{icon}</figure>
          <p className="text-md pl-1">{name}</p>
        </div>
      </div>
    </>
  );
};

export default TechBadge;
