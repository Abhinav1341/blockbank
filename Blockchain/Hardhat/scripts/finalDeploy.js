const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CommunityLending = await ethers.getContractFactory("CommunityLending");
    const communityLending = await CommunityLending.deploy();
    await communityLending.waitForDeployment();

    console.log("CommunityLending deployed to:", communityLending.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });