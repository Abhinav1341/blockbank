import abi from './contract/CommunityLending.json';
import {useState, useEffect} from 'react';
const {ethers} = require('ethers');
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xc4162Dd50A36E72dfA2e42423dC4c9f4435Ba4a1";
      const contractAbi = abi.abi;
      try {
        const {ethereum} = window;

        if (ethereum){
          const account = await ethereum.request({method: 'eth_requestAccounts'});
        }
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setState({provider, signer, contract});
      } catch(error){
        console.error(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
