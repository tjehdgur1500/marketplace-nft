require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const projectId = process.env.PROJECT_ID;
const privateKey = process.env.METAMASK_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  network: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
  },
  solidity: "0.8.17",
};
