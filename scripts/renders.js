export function renderRepayButton() {
    
    const getbankSectionButtons = document.getElementById('bank-loan-button');
    const getLoanButtonDiv = document.getElementById('bank-button-get-loan');
    const getLoanButton = document.getElementById("get-loan");
    const divClassRepay = document.createElement("div");
    const repayButton = document.createElement('button');
    const repayButtonText = document.createTextNode("Repay");
    repayButton.id='repay-button';
    getbankSectionButtons.appendChild(divClassRepay); //area append the div
    divClassRepay.appendChild(repayButton); //div append the button
    repayButton.appendChild(repayButtonText);//writting the text to button
    
    divClassRepay.className="repay-loan-button";
    divClassRepay.id="repay-loan-button";
    divClassRepay.style.width="50%";
    divClassRepay.style.display="contents";
    divClassRepay.style.height="50%";
    divClassRepay.style.marginLeft="10%";
    divClassRepay.style.marginRight="5%";
    
    getbankSectionButtons.style.display = "flex";
    getbankSectionButtons.style.flexDirection = "row";
    
    getLoanButton.style.width="inheritAttrs";
    getLoanButtonDiv.style.width="50%";
    getLoanButtonDiv.style.marginLeft=divClassRepay.style.marginRight;
    getLoanButtonDiv.style.marginRight= divClassRepay.style.marginLeft;
    getLoanButton.style.fontSize="large";
    getLoanButton.style.marginLeft="5%";
   //repayButton =document.getElementById('repay-button');
    repayButton.style.width="50%";
    repayButton.style.height="50%";
    repayButton.style.marginLeft=divClassRepay.style.marginLeft;
    repayButton.style.marginRight=divClassRepay.style.marginRight;
    repayButton.style.fontSize="large";
    repayButton.style.backgroundColor="red";
    //repayButton.style.
    
    
   
}

export function RenderWorkAndBankSection(){
    const salaryBalanceText = document.getElementById('pay-amount');
    const bankBalanceAmount = document.getElementById('balance-amount');
    const currency = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'EUR',
    });

    this.updateSalary = function updateSalary(val){
        salaryBalanceText.firstElementChild.innerHTML=currency.format(val);
    }

    this.updateBank =function updateBank(val){
        bankBalanceAmount.firstElementChild.innerHTML=currency.format(val);
    }
}