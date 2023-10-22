require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {},
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      chainId: 137,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
