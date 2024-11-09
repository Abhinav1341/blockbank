import getResponse from "./geminiAPI";
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    let temp = message.toUpperCase();
    if (temp.includes("SHAZAM")) {
      const loadData = [
        {
          id: 1,
          loanAmount: 5000,
          interest: 5.5,
          createdDate: "2024-11-01",
          dueDate: "2024-11-15",
        },
        {
          id: 2,
          loanAmount: 10000,
          interest: 6.2,
          createdDate: "2024-11-03",
          dueDate: "2024-11-18",
        },
        {
          id: 3,
          loanAmount: 7500,
          interest: 4.8,
          createdDate: "2024-11-05",
          dueDate: "2024-11-20",
        },
        {
          id: 4,
          loanAmount: 6000,
          interest: 5.0,
          createdDate: "2024-11-06",
          dueDate: "2024-11-21",
        },
        {
          id: 5,
          loanAmount: 9500,
          interest: 6.1,
          createdDate: "2024-11-07",
          dueDate: "2024-11-22",
        },
        {
          id: 6,
          loanAmount: 12000,
          interest: 5.3,
          createdDate: "2024-11-08",
          dueDate: "2024-11-23",
        },
        {
          id: 7,
          loanAmount: 4500,
          interest: 5.8,
          createdDate: "2024-11-09",
          dueDate: "2024-11-24",
        },
        {
          id: 8,
          loanAmount: 8200,
          interest: 6.5,
          createdDate: "2024-11-10",
          dueDate: "2024-11-25",
        },
        {
          id: 9,
          loanAmount: 6700,
          interest: 4.9,
          createdDate: "2024-11-11",
          dueDate: "2024-11-26",
        },
        {
          id: 10,
          loanAmount: 11000,
          interest: 5.7,
          createdDate: "2024-11-12",
          dueDate: "2024-11-27",
        },
        {
          id: 11,
          loanAmount: 9800,
          interest: 6.3,
          createdDate: "2024-11-13",
          dueDate: "2024-11-28",
        },
        {
          id: 12,
          loanAmount: 5600,
          interest: 5.4,
          createdDate: "2024-11-14",
          dueDate: "2024-11-29",
        },
        {
          id: 13,
          loanAmount: 7300,
          interest: 5.6,
          createdDate: "2024-11-15",
          dueDate: "2024-11-30",
        },
        {
          id: 14,
          loanAmount: 9000,
          interest: 6.0,
          createdDate: "2024-11-16",
          dueDate: "2024-12-01",
        },
        {
          id: 15,
          loanAmount: 6500,
          interest: 5.2,
          createdDate: "2024-11-17",
          dueDate: "2024-12-02",
        },
      ];
      const data = JSON.stringify(loadData);
      message =
        "Act as if you are a financial advisor in my dummy bank and you are talking to a client who wants to repay his loans. Create a mock timeline for him to repay the loans so that he is fined the least, considering he can pay 1 loan every 3 days.\n Pending loans:\n ";
      message += data;
    } else {
      message =
        "Act as if you are a financial advisor in my dummy bank and you are talking to a client.\n QUERY: ";
    }
    console.log("MessageParser:parse:message: ", message);
    this.actionProvider.getReply(message);
  }
}

export default MessageParser;
