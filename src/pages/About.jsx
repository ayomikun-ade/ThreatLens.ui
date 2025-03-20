import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <ToastContainer role="status" theme="dark" />
      <div className="px-3 pt-3 pb-4 md:px-10 w-full min-h-screen font-primary flex flex-col justify-center items-center">
        <Header />
        <section className=" text-white flex flex-col backdrop-blur animate-fadeIn border border-neutral-200 rounded-xl justify-center items-center max-w-[700px] mt-20 mb-6 md:mb-0 md:mt-5 px-3 md:px-6 py-10">
          <h2 className="relative w-full font-main text-4xl font-semibold text-center pb-2 border-b border-neutral-400">
            <Link
              to="/"
              aria-label="back to home button"
              className="absolute left-0 md:left-3 -top-6 md:top-0 text-2xl hover:scale-105 transition duration-300 hover:ease-in-out"
            >
              <ion-icon
                className="text-white"
                aria-hidden="true"
                name="arrow-back-outline"
              ></ion-icon>
            </Link>
            About ThreatLens
          </h2>
          <section className=" my-8 flex flex-col gap-1">
            <h3 className="font-main text-xl font-semibold">
              Your AI-Powered Cybersecurity Assistant
            </h3>
            <p>
              ThreatLens is an intelligent AI-driven cybersecurity assistant
              designed to help individuals and organizations identify, analyze,
              and respond to cybersecurity threats. Powered by advanced AI
              models and real-time threat intelligence, ThreatLens provides
              expert insights into cyber threats, social engineering tactics,
              and security best practices.
            </p>
            <h3 className="font-main text-xl font-semibold mt-5">
              What ThreatLens Does
            </h3>
            <p>
              ✔️ General Cybersecurity Assistance – Get answers to
              cybersecurity-related questions, ranging from network security to
              data protection strategies.
            </p>
            <p>
              ✔️ Social Engineering Threat Detection – Analyze suspicious
              messages for potential phishing, impersonation, or scam attempts.
            </p>
            <h3 className="font-main text-xl font-semibold mt-5">
              How It Works
            </h3>
            <p>
              ThreatLens combines Retrieval-Augmented Generation (RAG) with
              AI-powered natural language processing to ensure accurate,
              up-to-date responses. Using a knowledge base of cybersecurity
              reports, guidelines, and best practices, it retrieves relevant
              information before generating a response, enhancing the accuracy
              of threat analysis.
            </p>
          </section>
          <div className="mt-5 flex flex-col text-center h-fit items-center md:justify-center md:flex-row w-fit gap-2">
            <Link
              to="/general"
              aria-label="Link to documentation page"
              className="bg-neutral-100 text-black w-fit h-full border-2 border-neutral-100 hover:border-neutral-100/70 hover:bg-neutral-100/70 transition duration-500 hover:ease-in-out px-3 py-2 rounded-md font-primary"
            >
              Cybersecurity Assistant
            </Link>
            <Link
              to="/prediction"
              aria-label="Link to key points page"
              className="border-2 border-neutral-100 text-white hover:bg-neutral-100 hover:text-black w-full md:w-fit h-full transition duration-500 hover:ease-in-out px-3 py-2 rounded-md font-primary"
            >
              S.E. Predictor
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
