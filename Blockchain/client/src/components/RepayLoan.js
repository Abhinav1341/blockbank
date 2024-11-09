const {ethers} = require('ethers');
function RepayLoan({state}){
    const repay = async (event) => {
        event.preventDefault();
        const {contract} = state;
        const loanId = document.getElementById('loanId').value;
        const amount = document.getElementById('amounts').value;
        const transaction = await contract.repayLoan(parseInt(loanId), {value: ethers.parseEther(amount)});
        await transaction.wait();
        console.log('Loan repaid');
    }
    return (
        <div>
            <form onSubmit={repay}>
                <label>Loan ID</label>
                <input type="text" id="loanId" name="loanId" required />
                <label>Amount</label>
                <input type="text" id="amounts" name="amount" required />
                <button type="submit">Repay</button>
            </form>
        </div>
    );
}

export default RepayLoan;