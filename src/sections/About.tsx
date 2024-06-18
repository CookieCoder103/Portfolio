import Chat from "../components/Chat/Chat";
import MyImage from "./../assets/Me.jpg";
import { motion } from "framer-motion";

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

const About = () => {
  return (
    <div id="About" className="mx-auto cursor-default">
      <h1 className="w-full text-center font-bold text-5xl pb-7">About Me</h1>

      <div className="w-11/12 mx-auto flex flex-row flex-wrap items-center">
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
          src={MyImage}
          className="rounded-xl shadow-2xl md:w-2/5"
        />

        <Chat
          chatleft="Hi, I'm Sohrab Yavari but I go by Sam. I have a background in Mechanical
          Engineering but Software Engineering is where my interests lie, I have a
          strong focus on frontend development. I
          am also continuously learning more about backend development through C#
          and the .Net framework."
          chatRight="For progressing my knowledge on this hemisphere, I go to tech events to gain more of an understanding on the industry and expand my network. In my free time I train and compete in Muay Thai and to wind down after a hard training session I play some PC games."
        />
      </div>

      {/* 
      <p className="py-6 md:pr-16 text-justify">
        Hi, I'm Sohrab Yavari but I go by Sam. I have a background in Mechanical
        Engineering but Software Engineering is where my interests lie, I have a
        strong focus on frontend development; as you can tell throught my
        projects and portfolio I favour a more sleek and minimalistic style. I
        am also continuously learning more about backend development through C#
        and the .Net framework.
      </p>
      <p className="py-6 md:pr-16 text-justify">
        For progressing my knowledge on this hemisphere, I go to tech events to
        gain more of an understanding on the industry and expand my network. In
        my free time I train and compete in Muay Thai and to wind down after a
        hard training session I play some PC games.
      </p>

      <Chat
        chatleft="What is your background?"
        chatRight="My background is in Mechanical Engineering however, my interests lie
            in programming as it promotes constant growth and challanges to over
            come."
      />
      <Chat
        chatleft="What Languages do you know?"
        chatRight="I inittialy learnt HTML, CSS and Javascript, and then I gradually
            moved onto learning React & tailwind. For backend engineering I
            decided to learn C# and the .Net."
      />
      <Chat
        chatleft="What are you doing to progress?"
        chatRight="For progressing my knowledge on this hemisphere, I go to tech events
            to gain more of an understanding on the industry and expand my
            network."
      />
      <Chat
        chatleft="Tell us more about you."
        chatRight="In my free time I train and compete in Muay Thai and to wind down
            after a hard training session I play some PC games."
      /> */}
    </div>
  );
};

export default About;
