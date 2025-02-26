import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="px-10 w-full min-h-screen flex flex-col justify-center items-center">
      <Header />
      <main className="flex flex-col text-white animate-fadeIn justify-center items-center max-w-[700px] text-center">
        <h1 className="font-main text-white font-semibold text-4xl md:text-5xl">
          ThreatLens: Sharpen Your Threat Intelligence
        </h1>
        <p className="font-primary mt-3 text-base md:text-lg ">
          Upgrade your threat intelligence with ThreatLens, the AI-driven
          chatbot that predicts and analyzes social engineering threats.
        </p>
        <div className="mt-5 flex flex-col h-fit items-center md:justify-center md:flex-row w-fit gap-2">
          <Link
            aria-label="Link to documentation page"
            className="bg-neutral-100 text-black w-fit h-full border-2 border-neutral-100 hover:border-neutral-100/70 hover:bg-neutral-100/70 transition duration-500 hover:ease-in-out px-3 py-2 rounded-md font-primary"
          >
            Get Started
          </Link>
          <Link
            aria-label="Link to key points page"
            className="border-2 border-neutral-100 text-white hover:bg-neutral-100 hover:text-black w-full md:w-fit h-full transition duration-500 hover:ease-in-out px-3 py-2 rounded-md font-primary"
          >
            Try Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
