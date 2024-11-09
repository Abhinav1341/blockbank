import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/home";
import Landing from "./Components/landing";
import Profile from "./Components/profile/profile";
import KYC from "./Components/profile/kyc";
import Loan from "./Components/Loan";
import { singleUser } from "./Components/data";
import DeFiInfo from "./Components/defiInfo";
import LoanProcess from "./Components/loanprocess";
import ChatLoan from "./Components/chatbot";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile {...singleUser} />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/getloan" element={<Loan />} />
          <Route path="*" element={<Landing />} />
          <Route path="/know_more" element={<DeFiInfo />} />
          <Route path="/loanprocess" element={<LoanProcess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
