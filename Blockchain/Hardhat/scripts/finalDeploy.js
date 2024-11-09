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

//0x85c477DC5ac4A10f48bb41f9f2874a4E5A601E3E Prev
//0x139B815e15bba57A17Ff9ef85F930B6AfDb52C8e Prev 2
// 0x3AcC3038C22718FEba069c9626a2E699a5200114