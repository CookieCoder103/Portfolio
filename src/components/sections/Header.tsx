
import { ModeToggle } from "../mode-toggle";
import GitHub from "../svgComps/GitHub";
import LinkedIn from "../svgComps/LinkedIn";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="relative pb-5">
          <div className="absolute top-2 right-0">
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/sam-yavari-a3aa65198/"
                target="_blank"
              >
                <LinkedIn />
              </a>

              <a href="https://github.com/CookieCoder103" target="_blank">
                <GitHub />
              </a>
              <div className="pl-5">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="md:text-7xl text-4xl pt-8 font-bold tracking-wide">
            Sohrab
            <span className="font-bold text-stroke text-white">Yavari</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
