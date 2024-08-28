import MyResume from "../../assets/SohrabYavari.pdf";
import CardComp from "../global/CardComp";

const Resume = () => {
  return (
    <>
      <div>
        <CardComp
          title="My Experience"
          header="Resume"
          description="Have a look through my experience and contact me if you have any questions"
        >
          <div>
            <embed src={MyResume} className="mx-auto py-4 w-11/12 h-screen" />
          </div>
        </CardComp>
      </div>
    </>
  );
};

export default Resume;
