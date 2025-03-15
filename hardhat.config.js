require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter");

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",

  networks: {
    sepolia: {
      url: process.env.RPC_URL || "", // Prevents errors if RPC_URL is missing
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [], // Ensures PRIVATE_KEY is correctly passed
      chainId: 11155111, // Sepolia Chain ID
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "", // Ensures the key is passed correctly
  },

  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY ,
    apiKey: process.env.ETHERSCAN_API_KEY || "",// Optional for fetching live prices
  },
};
