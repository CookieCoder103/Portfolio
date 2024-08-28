import MyResume from "../../assets/SohrabYavari.pdf";
import CardComp from "../global/CardComp";

const Resume = () => {
  return (
    <>
      <div>
        <CardComp
          title="My Experience"
          header="Resume"
          description="Have a look through my experience and contact me if you have any questions."
        >
          <div>
            <embed src={MyResume} className="mx-auto w-full h-screen rounded-md" />
          </div>
        </CardComp>
      </div>
    </>
  );
};

export default Resume;
