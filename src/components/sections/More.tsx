import CardComp from "../global/CardComp";

const More = () => {
  return (
    <>
      <div>
        <CardComp title="Who Is Sohrab?" header="MORE ON ME" description="">
          <div className="px-2">
            <h1 className="text-2xl py-1 font-semibold">What I like to do?</h1>
            <p className="px-2">If I am not programming I am either gaming or gaining!</p>
            <h1 className="text-2xl py-1 font-semibold">Next Projects?</h1>
            <p className="px-2">
              I am working on making a notes app to the likes of obsidian using
              C. Which will teach me the opitome of how computers work and
              operate.{" "}
              <span className="opacity-50">
                ( making me a computer wizard )
              </span>
            </p>
          </div>
        </CardComp>
      </div>
    </>
  );
};

export default More;
