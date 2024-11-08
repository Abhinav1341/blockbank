// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const [deployer, alice, bob, lender] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CommunityLending = await ethers.getContractFactory("CommunityLending");
    const communityLending = await CommunityLending.deploy();
    await communityLending.deployed();

    console.log("CommunityLending deployed to:", communityLending.address);

    // Register users
    await communityLending.connect(alice).registerUser("Alice");
    await communityLending.connect(bob).registerUser("Bob");

    // Deposit funds into the contract
    await communityLending.connect(lender).depositFunds({ value: ethers.utils.parseEther("10") });

    // Lend money to Bob
    const dueDate = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60); // 30 days from now
    const loanIndex = await communityLending.connect(lender).lendMoney(bob.address, 3, 0.1, dueDate);
    console.log("Loan index:", loanIndex.toString());

    // Repay the loan
    await communityLending.connect(bob).repayLoan(0, { value: ethers.utils.parseEther("3.1") });

    // Check contract balance
    const contractBalance = await communityLending.getContractBalance();
    console.log("Contract balance:", ethers.utils.formatEther(contractBalance));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
