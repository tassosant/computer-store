import { renderLoanBalance, renderRepayButton,currencyDisplay } from "./renders.js"; 
import { WorkSection } from "./workSection.js";


export function isNumber(requestedLoanAmount){
    //
    //let pattern = new RegExp('^([0-9]+).([\.]).([0-9]+)$');
    let pattern = new RegExp('[^0-9]','g');
    let result = requestedLoanAmount.match(pattern);

    //if it matches only numbers, the regex is to match any string so if it does not find non numeric values it is a number, so the result will be null
    if(result==undefined){
        // console.log("number");
        return true;
    }
    else{
        // console.log("string");
        return false;
    }
    
}


export function BankArea(myBalances)  {
    
    
    function validateLoan(requestedLoanAmount){
        
        let loan = myBalances.loanBalance;
        let msg="";
        let bankbalance = myBalances.bankBalance;
        //console.log("current loan is:"+loan);
        if(loan>0){
            msg = `You cannot get a loan of ${currencyDisplay().format(requestedLoanAmount)} because you have another loan unpaid`;
            alert(msg);
            return;
        }else{
            
                if(2*bankbalance<Number(requestedLoanAmount)){
                    msg = `You cannot get a loan of ${currencyDisplay().format(requestedLoanAmount)} because you have low balance`;
                    alert(msg);
                    return;
                }
                else{
                    msg = `Loan amount of ${requestedLoanAmount} has been accepted`;
                    alert(msg);
                    //create the reapy loan button and add an evenet listener
                    renderRepayButton();
                    //we convert it to numebr because the input value is string

                    myBalances.loanBalance = Number(requestedLoanAmount);
                    renderLoanBalance(myBalances.loanBalance);
                }
            
        }
        
        
    }
    //if get a loan pressed call this function
    this.pressloan = function pressLoan(){
        //function for input value from user, returns a string
        function popup(message){
            //needs validating
            const aNumber = window.prompt(message, "");
            if(aNumber==undefined){
                
                return 0;
            }
            
            return aNumber;
        }
        let message = "Type a number";
        let errorMessage = "Invalid input, type a number";
        //execute the function assigned to this variable as an expression
        let requestedLoanAmount = popup(message);
        
        //do nothing//alert the user that nothing typed
        if(requestedLoanAmount==0){
            alert("You typed nothing");
            return;
        }
        //if the input string is not a number do nothing, alert the user for invalid input
        if(!isNumber(requestedLoanAmount)){
            alert("Type a valid number");
            return;
        }
        // check if there is loan or the bank balance is smaller than loanbalance/2.
        validateLoan(requestedLoanAmount);
        //display("The requested loan amount is:",requestedLoanAmount);
    }
    //was helper function
    function display(msg,requestedLoanAmount){
        alert(msg+requestedLoanAmount);
    }
}