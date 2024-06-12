import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInAnimVariant = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const fadeInAnimVariant2 = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Hero = () => {
  return (
    <div className="min-h-3/5">
      <div>
        <motion.h1
          variants={fadeInAnimVariant}
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
          className="md:text-9xl text-7xl font-bold text-right "
        >
          Sohrab
          <motion.h1
            variants={fadeInAnimVariant}
            initial="initial"
            whileInView="animate"
            transition={{
              type: "spring",
              delay: 0.75,
              damping: 35,
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
          >
            {" "}
            Yavari{" "}
          </motion.h1>
        </motion.h1>
        <motion.p 
        variants={fadeInAnimVariant2}
        initial="initial"
        whileInView="animate"
        transition={{
          type: "spring",
          delay: 0.75,
          damping: 35,
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        className="py-6 md:text-6xl text-2xl"
        >Frontend Web Developer</motion.p>
        <Link className="btn btn-secondary text-current" to="/Portfolio/Resume">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
