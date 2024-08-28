import CardComp from "../global/CardComp";

const More = () => {
  return (
    <>
      <div>
        <CardComp title="Who Is Sohrab?" header="MORE ON ME" description="">
          <div className="px-2">
            <h1 className="text-2xl py-1 font-semibold">What I like to do?</h1>
            <p className="md:px-4">Majority of my time is spent either learning programming or gaming.</p>

            <h1 className="text-2xl py-1 font-semibold">Next Projects?</h1>
            <p className="md:px-4">
              I am working on making a notes app to the likes of obsidian using
              C. Which will teach me the opitome of how computers work and
              operate.{" "}
              <br />
              <span className="opacity-50">
                ( making me a computer wizard )
              </span>
            </p>

            <p>

            </p>
          </div>
        </CardComp>
      </div>
    </>
  );
};

export default More;
