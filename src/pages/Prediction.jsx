import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import Disclaimer from "../components/Disclaimer";
import ReactMarkdown from "react-markdown";

const Prediction = () => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [predictionHistory, setPredictionHistory] = useState(() => {
    const storedHistory = localStorage.getItem("predictionHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });
  const chatRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
      "predictionHistory",
      JSON.stringify(predictionHistory)
    );
  }, [predictionHistory]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [predictionHistory]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) {
      toast.error("Input text cannot be empty.");
      return;
    }
    const userMessage = {
      text: inputText,
      sender: "user",
    };

    setPredictionHistory((prev) => [...prev, userMessage]);
    setInputText("");

    try {
      setIsProcessing(true);
      console.log(inputText);
      const response = await axios.post(
        "https://threat-leans-be.vercel.app/api/prediction",
        {
          message: inputText,
        }
      );

      const botMessage = {
        text: response.data.verdict,
        sender: "bot",
      };

      setPredictionHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error communicating with the server.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClearAll = () => {
    toast.info(
      <div>
        <p>Are you sure you want to clear chats?</p>
        <button
          onClick={clearPredictionHistory}
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md mt-2"
        >
          Confirm
        </button>
      </div>,
      { autoClose: false, theme: "dark", role: "status" }
    );
  };

  const clearPredictionHistory = () => {
    setPredictionHistory([]);
    localStorage.removeItem("predictionHistory");
    toast.dismiss();
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose="3000" />
      <div className="px-3 md:px-10 w-full min-h-screen font-primary flex flex-col justify-center items-center">
        <Header />
        <section className="relative max-w-[950px] h-[85vh] md:h-[80vh] w-full animate-fadeIn flex flex-col justify-between shadow-lg bg-white rounded-lg text-black mt-20 mb-6 md:mb-0 md:mt-5 px-3 md:px-6 pt-8 pb-5">
          {/* Box Header section */}
          {predictionHistory.length > 0 && (
            <div className="absolute top-2 right-3 left-3 flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <Link
                  to="/"
                  aria-label="Home button"
                  className="hover:scale-110 transition duration-300 hover:ease-in-out"
                >
                  <ion-icon
                    className="text-2xl"
                    aria-hidden="true"
                    name="arrow-back-outline"
                  ></ion-icon>
                </Link>
                <h3 className="font-semibold flex items-center gap-1 font-main text-2xl tracking-normal ml-2">
                  S.E Predictor
                </h3>
              </div>
              <button
                aria-label="Clear chats button"
                onClick={handleClearAll}
                className="hover:scale-105 top-2 right-3 text-red-600 rounded-lg px-2 py-1 transition duration-300 hover:ease-in-out"
              >
                {" "}
                <ion-icon
                  // size="large"
                  className="text-2xl md:text-3xl"
                  aria-hidden="true"
                  name="trash-bin"
                ></ion-icon>
                <span className="sr-only">Clear Chat</span>
              </button>
            </div>
          )}
          {predictionHistory.length > 0 ? (
            <section
              ref={chatRef}
              aria-live="polite"
              className="overflow-y-auto scroll-smooth text-sm md:text-base mt-8 px-1 rounded-md overflow-x-hidden"
            >
              {predictionHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col mb-3 ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 w-[90%] md:w-[70%] animate-textIn shadow-md rounded-lg mb-2 ${
                      msg.sender === "user"
                        ? "bg-[#1d40a bg-[#33508C] text-white"
                        : "bg-neutral-900 text-white"
                    }`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {isProcessing && (
                <span className="w-fit mb-2 flex items-center">
                  <img
                    src="/loading.svg"
                    className="text-black animate-spin mr-1 w-5 h-5"
                    alt="loading image"
                  />
                  Processing...
                </span>
              )}
            </section>
          ) : (
            <Welcome
              feature={"Prediction"}
              subtitle={"Your Personal Social Engineering Attack Predictor"}
            />
          )}
          <section className="space-y-2">
            <div className="has-[:focus]:border-neutral-900 w-full border-2 shadow-md border-neutral-300 flex items-end rounded-xl p-2 gap-2">
              <textarea
                rows={3}
                placeholder="Enter message here. Press Enter to Submit."
                className="w-full outline-none focus:border-neutral-500 "
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                aria-label="Enter your text"
                onKeyDown={handleKeyDown}
              ></textarea>
              <button
                onClick={handleSendMessage}
                disabled={isProcessing}
                className="text-2xl hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-70 transition duration-300 hover:ease-in-out"
                aria-label="Send message"
              >
                <ion-icon className="p-0" name="send-outline"></ion-icon>
              </button>
            </div>
            <Disclaimer />
          </section>
        </section>
      </div>
    </>
  );
};

export default Prediction;
