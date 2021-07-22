const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
    '',
    ''
);

const web3 = new Web3(provider);

const deploy = () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSOM.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
}

deploy();