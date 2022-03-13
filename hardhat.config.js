/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config()
require("@nomiclabs/hardhat-ethers");
//require("hardhat-deploy");
require("./scripts/deploy.js");
require("./scripts/mint.js");
require("@nomiclabs/hardhat-etherscan");

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    feeCollector: {
      default: 1
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  }
};

// deployed at 0x65b8c5340f8499a424811500E5691d5FDA932f31 rinkeby
