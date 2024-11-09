cdimport getResponse from "./geminiAPI";

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
   
   getReply = async (message) => {
     const reply= await getResponse(message);
     const response=this.createChatBotMessage(reply);
      this.setChatbotMessage(response);
   }

   setChatbotMessage = (message) => {
     this.setState((state) => ({
       ...state,
       messages: [...state.messages, message],
     }));
   }
 }
 
 export default ActionProvider;