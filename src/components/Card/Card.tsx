import { motion } from "framer-motion";

interface Props {
  description: string;
  img: string;
}

const fadeAnimVarient = {
  initial: {
    y: 90,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Card = ({ description, img }: Props) => {
  return (
    <motion.div
      variants={fadeAnimVarient}
      initial="initial"
      whileInView="animate"
      transition={{
        type: "spring",
        delay: 0.5,
        damping: 15,
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="card w-full bg-secondary flex mx-auto my-5"
    >
      <div className="card-body flex md:flex-row items-center p-1.5 ">
        <img
          src={img}
          className="md:w-40 md:h-40 w-full h-80 object-cover object-top"
        />
        <p className="text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
