require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "PASTE_YOUR_PRIVATE_KEYS_WITHOUT_0X";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
