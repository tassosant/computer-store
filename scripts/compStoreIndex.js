import {MyBalances} from "./myBalances.js";
import {renderRepayButton,RenderWorkAndBankSection} from "./renders.js";

const myBalances= new MyBalances();


function BankArea()  {
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
        
        if(loan>0){
            msg = `You cannot get a loan of ${requestedLoanAmount} because you have another loan unpaid`;
            console.log(msg);
        }else{
            if(2*bankbalance<requestedLoanAmount){
                msg = `You cannot get a loan of ${requestedLoanAmount} because you have low balance`;
                console.log(msg);
            }
            else{
                msg = `Loan amount of ${requestedLoanAmount} has been accepted`;
                console.log(msg);
                renderRepayButton();
            }
        }
        
        
    }
    
    this.pressloan = function pressLoan(){
    
        let message = "Type a number";
        let errorMessage = "Invalid input, type a number";
        function popup(message){
            //needs validating
            const aNumber = Number(window.prompt(message, ""));
            return aNumber;
        }
        let requestedLoanAmount = popup(message);
        
        //     while(typeof num!='number'){
        // while(! (validateType(num,VarType.number))){
        //     console.log("mpika");
        //     num = popup(errorMessage);
        // }
        validateLoan(requestedLoanAmount);
        display("The requested loan amount is:",requestedLoanAmount);
    }
    
    function display(msg,requestedLoanAmount){
        console.log(msg+requestedLoanAmount);
    }
}




function WorkSection(){
    this.pressWork=function pressWork(){
        myBalances.payBalance
    }
    this.pressBank=function pressBank(){
        let sth=0;
    }
}





const bankArea =new BankArea();
const workSection = new WorkSection();
const renderWorkAndBankSection =new RenderWorkAndBankSection();
renderWorkAndBankSection.updateSalary(0);
renderWorkAndBankSection.updateBank(0);
const getLoanButton = document.getElementById("get-loan");
const getWorkButton = document.getElementById('work');    
const getBankButton = document.getElementById('bank');
getLoanButton.addEventListener('click', bankArea.pressloan);
getWorkButton.addEventListener('click',workSection.pressWork);
getBankButton.addEventListener('click', workSection.pressBank);


 
  





