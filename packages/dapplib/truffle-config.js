require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth predict under install farm equal gauge'; 
let testAccounts = [
"0x750a9d56852578d7f58b32880b4586ebca3b789b67cdf2e975786ee5ceda4239",
"0xa580b92605a6387ef55857bd14d246095283163a77ba87646cda0c6d7c31c790",
"0xca41b593069c92b5ed653d043b982d01ae1466d65c433b317ef710d875287052",
"0x1d63e1f55c453ef6b8e26c2afcb687cbc25cdc64ee7940d663afc324d7ba8f41",
"0x9eede4491b713a5439ba58444f527bd20d08cf758d9290570101c6f81941c0fe",
"0x6ddb66c3184b5fbdb82c3118ea3dcc9e0d21dfe7d19f8e63ba54c6dec893bbee",
"0xf8bf60417a7af5748e76b69268fc3cdfd20902a4fef823e4066ab7aa6da61e6d",
"0x463fcdb0d1cd51f1474e17b65d21a8c4b7111f0d7fc20e1667724ec48e85d471",
"0x56a2b3ba7cbbd573486fbbc43f7c1394bf6845259c92500451e9f797437b342c",
"0x18f373665053c0b3849c5f7accea8032524296cfbd5811f57a02971d674ee4c8"
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

