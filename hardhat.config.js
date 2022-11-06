require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
//require("./tasks/block-number");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const GOERLI_RPC_URL = "http://172.19.80.1:7545";
const PRIVATE_KEY =
  "6a857db9d74b199c1c9f55103aa2fd10bb607ed4e5d1dbc43ac108a278868b28";
const ETHERSCAN_API_KEY = "UEJUPTY9HDYC35V9SZD51YGHGY951MIRFM";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ganache: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1337,
    },
    mumbai: {
      url:
        "https://polygon-mumbai.g.alchemy.com/v2/gOG88l1cDipGocv9D-5tprcpQO-xI0a4",
      accounts: [
        "7068d64261be1dd07e2dfd3e295f088c681b7aab7224e11959d7ff5b6c332146",
      ],
      chainId: 80001,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.5.6" }],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  paths: {
    sources: "./src/contracts",
    tests: "./test",
  },
};
