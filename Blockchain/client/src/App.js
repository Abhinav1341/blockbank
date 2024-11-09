import RegisterUser from "./components/RegisterUser";
import DepositFunds from "./components/DepositFunds";
// import GetProfile from "./components/GetProfile";
// import GetContractBalance from "./components/GetContractBalance";
// import LendMoney from "./components/LendMoney";
// import RepayLoan from "./components/RepayLoan";
import Loan from "./components/Loan";
import LoanInfo from "./components/LoanInfo";
import abi from "./contract/CommunityLending.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Navbar from "./components/navbar";
const { ethers, BrowserProvider } = require("ethers");
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x3AcC3038C22718FEba069c9626a2E699a5200114";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(account);
          console.log(account);
        }
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.error(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(account);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RegisterUser state={state} />} />
        <Route
          path="/loan"
          element={<Loan state={state} account={account} />}
        />
        <Route path="/depositFunds" element={<DepositFunds state={state} />} />
        <Route path="/getInfo" element={<GeneralInfo state={state} />} />
        <Route path="/loanDetails" element={<LoanInfo state={state} />} />

        {/* <GetProfile state={state} />
          <GetContractBalance state={state} /> */}
        {/* <LendMoney state={state} account={account} />
          <RepayLoan state={state} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
