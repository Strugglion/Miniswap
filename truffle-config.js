const HDWalletProvider = require('@truffle/hdwallet-provider');

const infura_apikey = "61f9cb1619794231a9bc218a9bb278ff";

// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

// 测试1 账户
const deployer_private_key = '400b4614c6f663dc98ada3c64f1b7473998b4e998ab0e67d1b6fccac1f50b926';

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    
    ropsten: {
      provider: new HDWalletProvider(deployer_private_key, "https://ropsten.infura.io/v3/"+infura_apikey),
      network_id: 3
    },

    rinkeby: {
      provider: new HDWalletProvider(deployer_private_key, "https://rinkeby.infura.io/v3/"+infura_apikey),
      network_id: 4
    },

    mainnet: {
      provider: new HDWalletProvider(deployer_private_key, "https://mainnet.infura.io/v3/"+infura_apikey),
      network_id: 1
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       }
      }
    },
  },
};
