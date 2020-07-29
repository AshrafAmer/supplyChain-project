
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "60de96eb19df4f589661a10674a69a28";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    
    
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    

    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`)
      },
      network_id: 3
    },
    
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 20000000000
    },
  }
// // Configure your compilers
// compilers: {
//   solc: {
//     version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
//     settings: {          // See the solidity docs for advice about optimization and evmVersion
//      optimizer: {
//        enabled: false,
//        runs: 200
//      },
//      evmVersion: "byzantium"
//     }
//   }
// }
};