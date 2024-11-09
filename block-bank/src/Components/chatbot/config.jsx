import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey There! I am you friendly neighbourhood bot! If you want to devise loan payment strategies, just type Shazam!`,
      { widget: "options" }
    ),
  ],
  botName: "LearningBot",
  customStyles: {
    botMessageBox: { backgroundColor: "#376B7E" },
    chatButton: { backgroundColor: "#5ccc9d" },
  },
};

export default config;
