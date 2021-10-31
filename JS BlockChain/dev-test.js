const Wallet = require('./wallet');
const Transaction = require('./wallet/transaction');
const wallet = new Wallet();
const wallet2 = new Wallet();

transaction = Transaction.newTransaction(wallet, wallet2.publicKey, 10);
console.log(Wallet.blockchainWallet());