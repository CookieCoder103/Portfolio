import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  image?: string;
  title: string;
  header: string;
  description: string;
  children: React.ReactNode;
}

const CardComp: React.FC<Props> = ({
  image,
  title,
  header,
  description,
  children,
}): JSX.Element => {
  return (
    <>
      <Card className="bg-secondary">
        <CardHeader>
            <img src={image} className="rounded-full w-2/3" />
          <div className="relative px-2">
            <p className="absolute text-xl bottom-0 uppercase">// {header}</p>
            <p className="text-stroke uppercase font-bold text-5xl opacity-50">{header}</p>
          </div>
          <CardTitle className="p-2 text-5xl tracking-wide">{title}</CardTitle>
          <p className="px-2">{description}</p>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default CardComp;
