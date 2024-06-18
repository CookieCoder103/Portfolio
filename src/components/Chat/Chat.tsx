import { motion } from "framer-motion";

interface Props {
  chatleft: string;
  chatRight: string;
}

const slideInAnimVarient1 = {
  initial: {
    scale: 0.5,
    x: -100,
    y: 50,
    opacity: 0,
  },
  animate: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const slideInAnimVarient2 = {
  initial: {
    scale: 0.5,
    x: 100,
    y: 50,
    opacity: 0,
  },
  animate: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const Chat = ({ chatleft, chatRight }: Props) => {
  return (
    <>
      <div className="md:w-6/12 mx-auto">
        <motion.div
          variants={slideInAnimVarient1}
          initial="initial"
          whileInView="animate"
          transition={{
            type: "spring",
            delay: 0.5,
            damping: 10,
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="chat chat-start py-2"
        >
          <div className="chat-bubble rounded-lg">{chatleft}</div>
        </motion.div>

        <motion.div
          variants={slideInAnimVarient2}
          initial="initial"
          whileInView="animate"
          transition={{
            type: "spring",
            delay: 0.5,
            damping: 10,
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="chat chat-end py-2"
        >
          <div className="chat-bubble bg-secondary rounded-lg">
            {chatRight}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Chat;
