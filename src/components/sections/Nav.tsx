import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={`${
            isSmallScreen
              ? `fixed top-25 left-8 right-8 z-50 transition-all duration-300 ${
                  isScrolled ? "top-2 opacity-90" : ""
                }`
              : `fixed side-bar ${
                  isScrolled ? "top-2" : ""}`
          }`}
        >
          <div
            className={`${
              isSmallScreen ? "container mx-auto p-4" : "p-5 w-full"
            } bg-primary rounded-md`}
          >
            <nav>
            <ul
              className={`uppercase tracking-tight font-semibold ${
                isSmallScreen
                  ? "flex gap-5 justify-center"
                  : "flex flex-col gap-5"
              }`}
            >
              <NavItem
                link="about-me"
                name={isSmallScreen ? "a" : "about me"}
              />
              <NavItem
                link="projects"
                name={isSmallScreen ? "p" : "projects"}
              />
              <NavItem
                link="more-on-me"
                name={isSmallScreen ? "m" : "more on me"}
              />
              <NavItem link="resume" name={isSmallScreen ? "r" : "resume"} />
            </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <div
          className={`bg-primary container h-auto p-5 z-50 rounded-md ${
            isSmallScreen
              ? "fixed top-25 left-0 right-0 w-4/5"
              : "fixed top-25 left-0 right-0"
          } ${
            isScrolled
              ? "fixed top-2 left-0 right-0 w-full duration-300 ease-in-out opacity-85"
              : "fixed top-25 left-0 right-0"
          }`}
        >
          <nav className={isSmallScreen ? "" : ""}>
            <ul
              className={`uppercase tracking-tight font-semibold ${
                isSmallScreen
                  ? "flex gap-5 justify-center"
                  : "flex flex-col gap-5"
              }`}
            >
              <NavItem
                link="about-me"
                name={isSmallScreen ? "a" : "about me"}
              />
              <NavItem
                link="projects"
                name={isSmallScreen ? "p" : "projects"}
              />
              <NavItem link="resume" name={isSmallScreen ? "r" : "resume"} />
              <NavItem
                link="more-on-me"
                name={isSmallScreen ? "m" : "more on me"}
              />
              <NavItem link="contact" name={isSmallScreen ? "c" : "contact"} />
            </ul>
          </nav>
        </div>
      </div> */}








      {/* {isSmallScreen ? (
        <div className="relative">
          <div className="bg-primary w-full h-auto p-5 rounded-xl sticky top-0 z-50">
            <nav>
              <ul className="uppercase tracking-tight font-semibold flex gap-5 justify-center">
                <NavItem link="about-me" name="a" />
                <NavItem link="projects" name="p" />
                <NavItem link="resume" name="r" />
                <NavItem link="more-on-me" name="m" />
                <NavItem link="contact" name="c" />
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="bg-primary w-full h-auto p-5 rounded-xl sticky top-0 z-50">
            <nav className="pr-20">
              <ul className="uppercase tracking-tight font-semibold flex flex-col gap-5">
                <NavItem link="about-me" name="about me" />
                <NavItem link="projects" name="projects" />
                <NavItem link="resume" name="resume" />
                <NavItem link="more-on-me" name="more on me" />
                <NavItem link="contact" name="contact" />
              </ul>
            </nav>
          </div>
        </div>
      )} */}
    </>
  );
};

interface NavProps {
  link: string;
  name: string;
}

const NavItem = ({ link, name }: NavProps) => {
  return (
    <>
      <li className="text-secondary cursor-pointer">
        <Link
          to={link}
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          onClick={scrollToTop}
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default Nav;
