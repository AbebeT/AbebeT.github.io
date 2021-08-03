class Bank {

    constructor() {
        this._accounts = [];
    }
    static nextNumber = 1;

    addAccount() {
        let acc = new Account(Bank.nextNumber);
        this._accounts[Bank.nextNumber] = acc;
        Bank.nextNumber = Bank.nextNumber + 1;        
        return Bank.nextNumber;
    }
    addSavingsAccount(interest) {
        let savingAcc = new SavingAccount(Bank.nextNumber, interest);
        this._accounts[Bank.nextNumber] = savingAcc;
        Bank.nextNumber = Bank.nextNumber + 1;
        return Bank.nextNumber;
    }
    addCheckingAccount(overdraft) {
        let checkingAccount = new CheckingAccount(Bank.nextNumber, overdraft)
        this._accounts[Bank.nextNumber] = checkingAccount;
        Bank.nextNumber = Bank.nextNumber + 1;
        return Bank.nextNumber;
    }

    accountReport() {
        this._accounts.forEach(account => {
            console.log(account.toString());
        });        
    }

    closeAccount(number) {
        this._accounts.forEach(account => {
            if (account.getNumber() === number) {
                const index = this._accounts.indexOf(account);
                if (index > -1) {
                    this._accounts.splice(index, 1);
                }                
            }
        });
            
        return this._accounts.length;

    }
    endOfMonth() {

        this._accounts.forEach(account => {
            account.endOfMonth();

        });

    }
}