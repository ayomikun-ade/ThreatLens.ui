import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="px-4 md:px-10 w-full min-h-screen flex flex-col justify-center items-center">
      <Header />
      <main className="flex flex-col text-white animate-fadeIn justify-center items-center max-w-[700px] text-center">
        <h1 className="font-main text-white font-semibold text-4xl md:text-5xl">
          <ReactTyped
            strings={[
              "ThreatLens: Sharpen Your Threat Intelligence",
              "ThreatLens: Personal Cybersecurity Assistant",
              "ThreatLens: Social Engineering Predictor",
              "ThreatLens: Sharpen Your Threat Intelligence",
            ]}
            typeSpeed={60}
            backSpeed={40}
          />
        </h1>
        <p className="font-primary mt-3 text-base md:text-lg ">
          Upgrade your threat intelligence with ThreatLens, the AI-driven
          chatbot that predicts and analyzes social engineering threats.
        </p>
        <Link
          to="/about"
          className="bg-neutral-100 text-black w-fit h-full border-2 border-neutral-100 hover:border-neutral-100/70 hover:bg-neutral-100/70 transition duration-500 hover:ease-in-out px-3 py-1 mt-3 rounded-md font-primary"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
};

export default Home;
