class SavingAccount extends Account {
    constructor(number, interest){
        super(number);
        this._interset = interest;
    }

    getInterest(){
        return this._interset; 
    }
    setInterest(value){
        if(value <= 0){
            throw new RangeError("Value should be greater than zero");   
        }
        this._interset = value;
    }

    addInterest(){
        this._balance  +=  this._balance * this._interset / 100 ;
        return this._balance;
    }

    toString() {
        return "Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth(){
        this.addInterest();
        return "Interest added SavingsAccount "+   super.getNumber() + ": balance: " + super.getBalance() + "  interest: " + this.getInterest(); 
    }

}