import Marc from "./../../assets/Marc.jpg";
import John from "./../../assets/Johns-Photography.jpg";
import Solar from "./../../assets/Solar.jpg";
import Card from "../Card/Card";

const Timeline = () => {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">1</time>
            <div className="text-lg font-black">Marcus Aurelius</div>
            <a
              href="https://github.com/CookieCoder103/Meditations_Quotes"
              target="_blank"
            >
              <Card
                description="This Chrome extension provides inspiring quotes from Marcus
              Aurelius for tough days. It's crafted with basic HTML, CSS,
              and JavaScript."
                img={Marc}
              />{" "}
            </a>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2</time>
            <div className="text-lg font-black">Johns Photography</div>
            <a
              href="https://cookiecoder103.github.io/Johns-Photography/"
              target="_blank"
            >
              <Card
                description="I initially created this website with HTML, CSS, and
                  JavaScript, but later rebuilt it using React. This was my
                  first React project, and I used react-scroll to get accustomed
                  to components and React as a whole."
                img={John}
              />
            </a>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">3</time>
            <div className="text-lg font-black">Refreshed Solar</div>
            <a
              href="https://cookiecoder103.github.io/Refreshed-Solar/"
              target="_blank"
            >
              <Card
                description="The Refreshed Solar React project refurbishes broken solar panels for affordable resale to homes and corporations. Key functionalities include React-Router-Dom for routing, React hooks, and Framer-Motion for professional animations."
                img={Solar}
              />
            </a>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
};

export default Timeline;
