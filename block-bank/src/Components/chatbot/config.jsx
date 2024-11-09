import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey There! I am you friendly neighbourhood bot! If you want to devise loan payment strategies, just type Shazam!`,
      { widget: "options" }
    ),
  ],
  botName: "LoanBot",
  customStyles: {
    botMessageBox: { backgroundColor: "#34d399" },
    chatButton: { backgroundColor: "#34d399" },
  },
};

export default config;
