const Transaction = require('./transaction');
const Wallet = require('./index');

describe('Transaction', () => {
    let transaction, wallet, recipient, amount, pubKey;

    beforeEach(() => {
        wallet = new Wallet();
        //console.log(`wallet stuff ${wallet.toString()}`);
        pubKey = wallet.publicKey;
        amount = 30;
        recipient = 'r3c1p13nt';
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    });

    it('outputs the amount subtracted from the wallet balance', () => {
        transaction = Transaction.newTransaction(wallet, recipient, amount);
        expect(transaction.outputs.find(output => output.address == pubKey).amount)
            .toEqual(wallet.balance - amount);
    });

    it('outputs the amount to the recipient', () => {
        expect(transaction.outputs.find(output => output.address==recipient).amount)
            .toEqual(amount);
    });

    it('inputs the balance of the wallet', () => {
        expect(transaction.input.amount).toEqual(wallet.balance);
    });

    describe('and updating a transaction', ()=>{
        let nextAmount, nextRecipient;

        beforeEach(() => {
            nextAmount = 20;
            nextRecipient = '82I5';
            transaction = transaction.update(wallet, nextRecipient, nextAmount);
        });

        it('subracts the net amount from the sender\'s output', () => {
            expect(transaction.outputs.find(output => output.address === wallet.publicKey))
        });
    });
});