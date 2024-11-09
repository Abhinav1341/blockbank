import RegisterUser from './components/RegisterUser';
import DepositFunds from './components/DepositFunds';
import GetProfile from './components/GetProfile';
import GetContractBalance from './components/GetContractBalance';
import LendMoney from './components/LendMoney';
import RepayLoan from './components/RepayLoan';
import abi from './contract/CommunityLending.json';
import {useState, useEffect} from 'react';
const {ethers} = require('ethers');
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x139B815e15bba57A17Ff9ef85F930B6AfDb52C8e";
      const contractAbi = abi.abi;
      try {
        const {ethereum} = window;

        if (ethereum){
          const account = await ethereum.request({method: 'eth_requestAccounts'});
          setAccount(account);
          console.log(account);
        }
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setState({provider, signer, contract});
      } catch(error){
        console.error(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(account);
  return (
    <div className="App">
      <RegisterUser state={state} />
      <DepositFunds state={state} />
      <GetProfile state={state} />
      <GetContractBalance state={state} />
      <LendMoney state={state} account={account}/>
      <RepayLoan state={state} />
    </div>
  );
}

export default App;
