import React, { useState } from "react";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const ChatLoan = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <div className="fixed bg-white bottom-4 right-4 flex flex-col items-end">
        <button
          className="bg-emerald-600 transition-all text-lg font-semibold text-[#fcfdfc] rounded-full px-4 py-2 mb-2 hover:bg-emerald-500 focus:outline-none"
          onClick={toggleChatbot}
        >
          {isChatbotOpen ? "Close Chat" : "Chat with Us"}
        </button>
        {isChatbotOpen && (
          <div className="fixed bottom-52 right-6 w-72 h-96 rounded-lg shadow-lg ">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ChatLoan;
