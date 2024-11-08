const hre = require("hardhat");

async function main() {
    const [deployer, alice, bob, lender] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CommunityLending = await ethers.getContractFactory("CommunityLending");
    const communityLending = await CommunityLending.deploy();
    await communityLending.waitForDeployment();

    console.log("CommunityLending deployed to:", communityLending.target);

    // Register users
    await communityLending.connect(alice).registerUser("Alice");
    await communityLending.connect(bob).registerUser("Bob");

    // Deposit funds into the contract
    await communityLending.connect(lender).depositFunds({ value: ethers.parseEther("10") });

    // Display contract balance after deposit
    let contractBalance = await communityLending.getContractBalance();
    console.log("Contract balance after deposit:", ethers.formatEther(contractBalance));

    // Display lender balance before lending
    let lenderBalanceBefore = await ethers.provider.getBalance(lender.address);
    console.log("Lender balance before lending:", ethers.formatEther(lenderBalanceBefore));

    // Lend money to Bob
    const dueDate = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60); // 30 days from now
    const tx = await communityLending.connect(lender).lendMoney(bob.address, 3, 1, dueDate);
    const receipt = await tx.wait();

    // Extract the loan index from the event logs
    // const loanEvent = receipt.events.find(event => event.event === "LoanCreated");
    // const loanIndex = loanEvent.args.loanIndex.toString();
    // console.log("Loan index:", loanIndex);
    contractBalance = await communityLending.getContractBalance();
    console.log("Contract balance after lending:", ethers.formatEther(contractBalance));
    // Display lender balance after lending
    let lenderBalanceAfter = await ethers.provider.getBalance(bob.address);
    console.log("Lender balance after lending:", ethers.formatEther(lenderBalanceAfter));

    // Repay the loan
    await communityLending.connect(bob).repayLoan(0, { value: ethers.parseEther("4") });

    // Check contract balance after repayment
    contractBalance = await communityLending.getContractBalance();
    console.log("Contract balance after repayment:", ethers.formatEther(contractBalance));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });