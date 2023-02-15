export class MyBalances{
    constructor(){
        this._bankBalance = 0;
        this._loanBalance = 0;
        this._payBalance = 0;
    }
    get bankBalance(){
        return this._bankBalance;
    }
    get loanBalance(){
        return this._loanBalance;
    }
    get payBalance(){
        return this._payBalance;
    }
    set bankBalance(balance){
        this._bankBalance=balance;
    }
    set loanBalance(balance){
        this._loanBalance=balance;
    }
    set payBalance(balance){
        this._payBalance=balance;
    }
    // display() {
    //     console.log("loanBalance is"+this.bankBalance);
    // }
}