import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // Handle Enter key for input
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onSent();
      setInput("");
    }
  };

  // Handle send button click
  const handleSend = () => {
    if (input.trim()) {
      onSent();
      setInput("");
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini by Suyash</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today ?</p>
            </div>
            <div className="info-text">
              <p>
                Welcome to Gemini! Enter your prompt below and press{" "}
                <b>Enter</b> or click the send button to get started.
                <br />
                Gemini can help you brainstorm ideas, summarize concepts, and
                answer your questions.
              </p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="input-container">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here.."
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend} aria-label="Send">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 10l15-6-6 15-2-7-7-2z" />
              </svg>
            </button>
          </div>
          <p className="bottom-info">
            Gemini may dispaly inaccurate info, including about people, so
            double-check its response. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
