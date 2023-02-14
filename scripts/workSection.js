export function workBalanceHandler(bankbalance, loanbalance, salary){
    if(loanbalance > 0){
        loan = loanbalance;
        loanbalance = loanbalance-salary;
        if(loanbalance<0){
            bankbalance = bankbalance-loanbalance;
        }
    }else{

    }
}