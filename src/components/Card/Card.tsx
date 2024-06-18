import { motion } from "framer-motion";

interface Props {
  description: string;
  img: string;
  tech: string;
  title: string;
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

const Card = ({ title, description, img, tech }: Props) => {
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
      className="card w-11/12 h-96 mx-auto shadow-xl image-full"
    >
      <figure>
        <img
          src={img}
          className="w-full object-cover object-center"
        />
      </figure>
      <div className="card-body rounded-2xl">
        <h2 className="card-title text-3xl pb-4">{title}</h2>
        <p className="md:w-3/4">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">{tech}</button>
        </div>
      </div>
    </motion.div>

    // <motion.div
    //   variants={fadeAnimVarient}
    //   initial="initial"
    //   whileInView="animate"
    //   transition={{
    //     type: "spring",
    //     delay: 0.5,
    //     damping: 15,
    //     duration: 0.5,
    //   }}
    //   viewport={{
    //     once: true,
    //   }}
    //   className="card rounded-2xl shadow-xl image-full"
    // >
    //   <div className="card-body p-0">
    //     <img
    //       src={img}
    //       className="md:h-96 w-full h-80 object-cover object-center rounded-2xl"
    //     />
    //     <h2 className="text-left px-4 pt-4 text-2xl font-bold">{title}</h2>
    //     <div className="flex md:flex-row flex-col justify-center items-center p-4 gap-5">
    //       <p className="text-center">{description}</p>
    //       <div className="btn btn-secondary flex-end">Js, React, MUI{tech}</div>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default Card;
