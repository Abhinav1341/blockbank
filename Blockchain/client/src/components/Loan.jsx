import React from "react";
import LendMoney from "./LendMoney";
import RepayLoan from "./RepayLoan";

const Loan = ({ state, account }) => {
  return (
    <>
      <LendMoney state={state} account={account} />
      <RepayLoan state={state} />
    </>
  );
};

export default Loan;
