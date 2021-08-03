class CheckingAccount extends Account {
    constructor(number, overDraft) {
        super(number);
        this._overDraft = overDraft;
    }

    setOverDraft(value) {
        if(value <= 0)
            throw new RangeError(`Overdraft limit shouldn't be less than zero`);
        this._overDraft = value;
    }
    getOverDraft() {
        return this._overDraft
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overDraft) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth() {
        if (super.getBalance() < 0)
            return "Warning, low balance CheckingAccount " + super.getNumber() + " : balance: " + super.getBalance() + " overdraft limit: " + this._overDraft;
    }



}