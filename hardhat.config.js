require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      // Uncomment these lines to use Hardhat's built-in accounts
      // accounts: [
      //   {
      //     privateKey: "",
      //     balance: "10000000000000000000000" // 10000 ETH
      //   }
      // ]
    },
  },
};
