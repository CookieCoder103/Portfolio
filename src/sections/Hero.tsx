import HeroImg from "./../assets/Me.jpg";
import { motion } from "framer-motion";
import DownloadBtn from "./../assets/download-button-svgrepo-com.svg";
import { Link } from "react-router-dom";

const fadeInAnimVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const scaleAndFadeAnimVarient = {
  initial: {
    scale: 0,
    y: 200,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <div id="Hero" className="hero min-h-screen mx-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="lg:mb-80 mb-40">
          <motion.img
            variants={scaleAndFadeAnimVarient}
            initial="initial"
            whileInView="animate"
            transition={{
              type: "spring",
              delay: 0.5,
              damping: 35,
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            src={HeroImg}
            className="rounded-full shadow-2xl"
          />
        </figure>
        <div className="">
          <div className="flex items-center gap-2 ">
            <motion.h1
              variants={fadeInAnimVariant}
              initial="initial"
              whileInView="animate"
              transition={{
                type: "spring",
                delay: 0.5,
                damping: 20,
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className="text-4xl text-center font-bold pl-10"
            >
              Sohrab Yavari
            </motion.h1>
          </div>
          <p className="px-10 py-6 md:pr-16 text-justify">
            Hi, I'm Sohrab Yavari but I go by Sam. I have a background in
            Mechanical Engineering but Software Engineering is where my
            interests lie, I have a strong focus on frontend development; as you
            can tell throught my projects and portfolio I favour a more sleek
            and minimalistic style. I am also continuously learning more about
            backend development through C# and the .Net framework.
          </p>
          <Link className="btn btn-secondary ml-10" to="/Portfolio/Resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
