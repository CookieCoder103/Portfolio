import Chat from "../components/Chat/Chat";

const About = () => {
  return (
    <div id="About" className="p-5">
      <h1 className="w-full text-center font-bold text-5xl py-5 hover:tracking-widest duration-300 ease-in-out">
        About Me
      </h1>

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
      />
    </div>
  );
};

export default About;
