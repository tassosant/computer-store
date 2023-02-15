import { RenderBalances,renderPayBalance,renderLoanBalance,currencyDisplay,renderBankBalance } from "./renders.js";

export function WorkSection(myBalances){
    
    this.pressWork=function pressWork(){
        
        console.log("work pressed");
        myBalances.payBalance=salaryIncrease(myBalances.payBalance);
        renderPayBalance(myBalances.payBalance);
    }
    this.pressBank=function pressBank(){
        console.log("bank pressed");
        if(myBalances.loanBalance>0){
            renderLoanBalance(myBalances.loanBalance);
        }
        const balances={
            BankBalance:myBalances.bankBalance,
            LoanBalance:myBalances.loanBalance,
            PayBalance:myBalances.payBalance
        }
        let bankbalance= balances.BankBalance;
        let loanbalance= balances.LoanBalance;
        let paybalance = balances.PayBalance;
        console.log(paybalance);
        
        const transferBalancies = workBalanceHandler(bankbalance,loanbalance,paybalance,false);
        console.log(myBalances.payBalance);
        myBalances.bankBalance = transferBalancies.BankBalance;
        myBalances.loanBalance = transferBalancies.LoanBalance;
        myBalances.payBalance = transferBalancies.PayBalance;
        console.log(transferBalancies);
        renderLoanBalance(myBalances.loanBalance);
        renderBankBalance(myBalances.bankBalance);
        renderPayBalance(myBalances.payBalance);
    }

    this.pressRepayLoan = function pressRepayLoan(){
        if(myBalances.loanBalance==0 || myBalances.loanBalance==undefined){
            console.log("You have not a loan to repay");
            return;
        }
        const balances={
            BankBalance:myBalances.bankBalance,
            LoanBalance:myBalances.loanBalance,
            PayBalance:myBalances.payBalance
        }
        let bankbalance= balances.BankBalance;
        let loanbalance= balances.LoanBalance;
        let paybalance = balances.PayBalance;
        const transferBalancies = workBalanceHandler(bankbalance,loanbalance,paybalance,true);
        console.log("my bank balances:"+myBalances.bankBalance);
        myBalances.bankBalance = transferBalancies.BankBalance;
        myBalances.loanBalance = transferBalancies.LoanBalance;
        myBalances.payBalance = transferBalancies.PayBalance;
        renderLoanBalance(myBalances.loanBalance);
        renderBankBalance(myBalances.bankBalance);
        renderPayBalance(myBalances.payBalance);
    }
}





//this function is to transfer from pay balance to bank or loan balance
export function workBalanceHandler(bankBalance, loanBalance, payBalance, repayButtonPressed=Boolean){
    let payBalanceFixed=payBalance;
    if(loanBalance > 0){
        
        //if repay button NOT pressed
        if(!repayButtonPressed){
            //reduce salary by 10% to transfer to bank
            payBalanceFixed=payBalance*0.1;
        }

        loanBalance = loanBalance-payBalanceFixed;
        //if loanBalance is below zero, transfer the remaining funds to bank balance
        if(loanBalance<0){
            bankBalance = bankBalance-loanBalance;
            loanBalance = 0;
        }
        console.log("loan balance is:"+loanBalance);
    }else{
        //if there is NO loan
        bankBalance = bankBalance + payBalanceFixed;
        loanBalance = 0;
    }
    payBalanceFixed = 0;
    const balances = {
        BankBalance:bankBalance,
        LoanBalance:loanBalance,
        PayBalance:payBalanceFixed
    };
    return balances;
        
    
}

export function salaryIncrease(salary){
    return salary+=100;
}

