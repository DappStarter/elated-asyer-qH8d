require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift radar social coach impulse light army gasp'; 
let testAccounts = [
"0xf707a3594ad6c157132fe68d76085093fb57188afc62980fd2d0084496949537",
"0x1344e914b9bc750476e28f742ac7d9887732e07edfad085e6feb43a50436d6f2",
"0x84fa7527a585529e282e17d27b72dbd85d9c88a96cb8c6414ed0dcb1bc2dd08d",
"0xdb9eb7491af036f2b7935c4ed5418dee5ee2c5ff5858a72879dc129d1ca479c3",
"0xf3950d370dc2b8d22c0e0768cdb69fb4c02d43b11a61e7f1333606f1f0a830ad",
"0xc8c5ae7751bd6ff2d3cddbe9456b125d32b1df88c6fb5edfe7081b1b843ecdfa",
"0xed9dc4e1a3e1b25bba6a8cb47c3426e5222d51213c85de2e230ce95c795b708e",
"0xab78ba437285ddc0a1586aa3cbbc7874d3a88fc3c81784f09234e455e178d43b",
"0x13d401fcfd8a07726d62422740c781def428e0fb3286b771df1dc904e340ad0b",
"0x7fa2082eb8f1de6d595d7f8c6143e122a2efd5bb75dc13cdad31d32ee004ca3c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

