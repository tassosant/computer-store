import { RenderBalances,renderPayBalance,renderLoanBalance,currencyDisplay,renderBankBalance } from "./renders.js";

export function WorkSection(myBalances){
    

    //common lines to handle when pressing bank or repay loan button
    function renderAllBalances(repayButtonPressed){
        


        const balances={
            BankBalance:myBalances.bankBalance,
            LoanBalance:myBalances.loanBalance,
            PayBalance:myBalances.payBalance
        }
        let bankbalance= balances.BankBalance;
        let loanbalance= balances.LoanBalance;
        let paybalance = balances.PayBalance;
        const transferBalancies = workBalanceHandler(bankbalance,loanbalance,paybalance,repayButtonPressed);
        myBalances.bankBalance = transferBalancies.BankBalance;
        myBalances.loanBalance = transferBalancies.LoanBalance;
        myBalances.payBalance = transferBalancies.PayBalance;
        renderLoanBalance(myBalances.loanBalance);
        renderBankBalance(myBalances.bankBalance);
        renderPayBalance(myBalances.payBalance);



    }
    //run this function if the work button is pressed
    this.pressWork=function pressWork(){
        
        console.log("work pressed");
        myBalances.payBalance=salaryIncrease(myBalances.payBalance);
        renderPayBalance(myBalances.payBalance);
    }
    //run this function if the bank button is pressed
    this.pressBank=function pressBank(){
        console.log("bank pressed");
        if(myBalances.loanBalance>0){
            renderLoanBalance(myBalances.loanBalance);
        }
        renderAllBalances(false);
        
    }
    //run this function if the repay loan button is pressed
    this.pressRepayLoan = function pressRepayLoan(){
        if(myBalances.loanBalance==0 || myBalances.loanBalance==undefined){
            console.log("You have not a loan to repay");
            return;
        }
        renderAllBalances(true);
        
    }
}





//this function is to transfer from pay balance to bank or loan balance
export function workBalanceHandler(bankBalance, loanBalance, payBalance, repayButtonPressed=Boolean){
    let payBalanceFixed=payBalance;
    //if there is loan
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
        else{
            bankBalance = bankBalance+(payBalanceFixed<payBalance?payBalance-payBalanceFixed:payBalanceFixed);
        }
        console.log("loan balance is:"+loanBalance);
    }else{
        //if there is NO loan
        bankBalance = bankBalance+payBalanceFixed;
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

