import { RenderBalances,renderPayBalance,renderLoanBalance,currencyDisplay,renderBankBalance } from "./renders.js";

export function WorkSection(myBalances){
    

    //common lines to handle when pressing bank or repay loan button
    function renderAllBalances(repayButtonPressed,renderLoan){
        

        //creating a dictionary of balances
        const balances={
            BankBalance:myBalances.bankBalance,
            LoanBalance:myBalances.loanBalance,
            PayBalance:myBalances.payBalance
        }
        let bankbalance= balances.BankBalance;
        let loanbalance= balances.LoanBalance;
        let paybalance = balances.PayBalance;
        if(loanbalance==0)
            renderLoan=false;
        //assign balance to function workBalanceHandler
        const transferBalancies = workBalanceHandler(bankbalance,loanbalance,paybalance,repayButtonPressed);
        myBalances.bankBalance = transferBalancies.BankBalance;
        myBalances.loanBalance = transferBalancies.LoanBalance;
        myBalances.payBalance = transferBalancies.PayBalance;
        //render balances
        if(renderLoan!=false)
            renderLoanBalance(myBalances.loanBalance);
        renderBankBalance(myBalances.bankBalance);
        renderPayBalance(myBalances.payBalance);



    }
    //run this function if the work button is pressed
    this.pressWork=function pressWork(){
        
       
        //we increase our pay balance
        myBalances.payBalance=salaryIncrease(myBalances.payBalance);
        renderPayBalance(myBalances.payBalance);
    }
    //run this function if the bank button is pressed
    this.pressBank=function pressBank(){
        //console.log("bank pressed");
        
        if(myBalances.loanBalance>0){
            renderLoanBalance(myBalances.loanBalance);
        }
        //repay button not pressed //loan button not displayed
        renderAllBalances(false,true);
        
    }
    //run this function if the repay loan button is pressed
    this.pressRepayLoan = function pressRepayLoan(){
        if(myBalances.loanBalance==0 || myBalances.loanBalance==undefined){
            let msg="You have not a loan to repay";
            alert(msg);
            return;
        }else if(myBalances.payBalance==0 || myBalances.payBalance==undefined){
            let msg="You have no pay balance";
            alert(msg);
            return;
        }
        //repay button pressed
        renderAllBalances(true,true);
        
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
        //we reduce the loan when bank button or repay button is pressed.It reduces as the assignment requires
        //because I update the paybalance depending the case
        loanBalance = loanBalance-payBalanceFixed;
        //if loanBalance is below zero, transfer the remaining funds to bank balance
        if(loanBalance<0){
            bankBalance = bankBalance-loanBalance;
            //loan cannot be below to zero
            loanBalance = 0;
        }
        else{
            //if loan balance is not below zero try this:
            //here we pressed the bank button but there is loan or there is no loan, so the 10% of pay balance must be transferred to 
            //the bank balance in case the loan exists. In this line I check that if payBalance is greater than payBalanceFixed then the
            //bank button has been pressed, so the 10% is transferred to loan(bankBalance = bankBalance+0.9*paybalance). 
            //If the repay button is pressed the payBalanceFixed is equal to paybalance, so it will be trans
            bankBalance = bankBalance+(payBalanceFixed<payBalance?payBalance-payBalanceFixed:payBalanceFixed);
        }
        //console.log("loan balance is:"+loanBalance);

        //if there is NO loan
    }else{
        //If there is no loan the whole pay balance transfers to the bank balance
        bankBalance = bankBalance+payBalanceFixed;

        //I assign the zero value to avoid possible bugs
        loanBalance = 0;
    }
    //we pressed either bank or loan button, so the pay balance reduced to 0
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

