require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    solidity: "0.8.9",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        amoy: {
            url: RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
};
