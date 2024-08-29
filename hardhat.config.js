require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x2ba6ccb61e2e0a56a1688e978fb7e1c368c53b9fb87b6c1a4ef7d821fd1e0359`],
    },
  },
};