// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     compilers: [
//       {
//         version: "0.7.6",
//         settings: {
//           evmVersion: "istanbul",
//           optimizer: {
//             enabled: true,
//             runs: 1000,
//           },
//         },
//       },
//     ],
//   },
//   networks: {
//     hardhat: {
//       forking: {
//         url: "your",
//       },
//     },
//   },
// };

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: false },
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/pim-bid8xGGmQAp2Nxu324feMReP8Sbu",
        // accounts: [`0x${"your"}`],
      },
    },
  },
};
