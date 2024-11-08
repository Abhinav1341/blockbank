import { useState } from "react";
const {ethers} = require('ethers');
function GetContractBalance({state}){
    const [balance, setBalance] = useState(null);
    const getBalance = async (event) => {
        event.preventDefault();
        const {contract} = state;
        const balanceW = await contract.getContractBalance();
        const balance = ethers.formatEther(balanceW);
        console.log((balance).toString());
        setBalance(balance.toString());
    }
    return (
        <div>
            <form onSubmit={getBalance}>
                <button type="submit">Get Contract Balance</button>
            </form>
            <p>Contract balance: {balance}</p>
        </div>
    );
}

export default GetContractBalance;