import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/home";
import Landing from "./Components/landing";
import Navbar from "./Components/navbar";
import Profile from "./Components/profile/profile";
import KYC from "./Components/profile/kyc";
import Loan from "./Components/Loan";
import { singleUser } from "./Components/data";

export default function App() {
  return (
    <>

   <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/profile" element={<Profile {...singleUser} />} />
    <Route path="/kyc" element={<KYC/>} />
    <Route path="/getloan" element={<Loan/>} />
    
   </Routes>
   
   
   </BrowserRouter>,
     
    </>
  );
}
