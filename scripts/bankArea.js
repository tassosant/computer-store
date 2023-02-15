import { renderLoanBalance, renderRepayButton,currencyDisplay } from "./renders.js"; 
export function isNumber(requestedLoanAmount){
    
    let pattern = new RegExp('[^0-9]','g');
    let result = requestedLoanAmount.match(pattern);

    if(result==undefined){
        console.log("number");
        return true;
    }
    else{
        console.log("string");
        return false;
    }
    
}


export function BankArea(myBalances)  {
    // constructor(){
    //     this.num;
    //     this.loan = 0;
    //     this.balance = 0;
    // }
             
    
    
    // validateLoan=(num)=>{
        
    //     let loan = this.loan;
    //     if(loan>num){
    //         console.log("nope");
    //     }else{
    //         console.log("ok");
    //     }
        
    // }
    // pressLoan=()=>{
    
    //     let message = "Type a number";
    //     let errorMessage = "Invalid input, type a number";
    //     function popup(message){
    //         const aNumber = Number (window.prompt(message, ""));
    //         return aNumber;
    //     }
    //     let num = popup(message);
        
    //     //while(! (validateType(num,VarType.number))){
    //         while(typeof num!='number'){
    //         console.log("mpika");
    //         num = popup(errorMessage);
    //     }
    //     this.validateLoan(this.num);
    // }
    
    function validateLoan(requestedLoanAmount){
        
        let loan = myBalances.loanBalance;
        let msg="";
        let bankbalance = myBalances.bankBalance;
        console.log("current loan is:"+loan);
        if(loan>0){
            msg = `You cannot get a loan of ${requestedLoanAmount} because you have another loan unpaid`;
            console.log(msg);
            return;
        }else{
            
                if(2*bankbalance<Number(requestedLoanAmount)){
                    msg = `You cannot get a loan of ${requestedLoanAmount} because you have low balance`;
                    console.log(msg);
                    return;
                }
                else{
                    msg = `Loan amount of ${requestedLoanAmount} has been accepted`;
                    console.log(msg);
                    renderRepayButton();
                    myBalances.loanBalance = Number(requestedLoanAmount);
                    renderLoanBalance(myBalances.loanBalance);
                }
            
        }
        
        
    }
    
    this.pressloan = function pressLoan(){
    
        let message = "Type a number";
        let errorMessage = "Invalid input, type a number";
        function popup(message){
            //needs validating
            const aNumber = window.prompt(message, "");
            if(aNumber==undefined){
                
                return 0;
            }
            
            return aNumber;
        }
        let requestedLoanAmount = popup(message);
        
        //     while(typeof num!='number'){
        // while(! (validateType(num,VarType.number))){
        //     console.log("mpika");
        //     num = popup(errorMessage);
        // }
        if(requestedLoanAmount==0){
            console.log("You typed nothing");
            return;
        }
        if(!isNumber(requestedLoanAmount)){
            console.log("Type a valid number");
            return;
        }
        validateLoan(requestedLoanAmount);
        display("The requested loan amount is:",requestedLoanAmount);
    }
    
    function display(msg,requestedLoanAmount){
        console.log(msg+requestedLoanAmount);
    }
}