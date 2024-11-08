const ethers = require('ethers');

function DepositFunds({state}){
    const deposit = async (event) => {
        event.preventDefault();
        const {contract} = state;
        const amount = document.getElementById('amount').value;
        const transaction = await contract.depositFunds({value: ethers.parseEther(amount)});
        await transaction.wait();
        console.log('Funds deposited');
    }
    return (
        <div>
            <form onSubmit={deposit}>
                <label>Amount</label>
                <input type="text" id="amount" name="amount" required />
                <button type="submit">Deposit</button>
            </form>
        </div>
    );
}

export default DepositFunds;