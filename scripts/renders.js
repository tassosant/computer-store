//import { WorkSection} from "./workSection.js";
import { repayloanAfterClick } from "./compStoreIndex.js";

//create repay loan button and create an event listener
export function renderRepayButton() {
    
     const getWorkSection = document.getElementById('work-section');
     const divElement = createAnElement('div','repay-loan','work-section inner-area-item repay-loan');
     const buttonElement = createAnElement('button','repay-loan-button','buttons');
     const buttonText = document.createTextNode('Repay loan');
     buttonElement.appendChild(buttonText);
     divElement.appendChild(buttonElement);
     getWorkSection.appendChild(divElement); 
     const getRepayLoanButton = document.getElementById('repay-loan-button');
     buttonElement.addEventListener('click',()=>{repayloanAfterClick();});
    
}
// export function getRepayLoanButton(){
//     return getRepayLoanButton;
// }
//display loan balance
export function renderLoanBalance(val){
    //if ther is banak balance as text update only its value, tehn return
    if(document.getElementById('loan-balance-display')!=undefined){
        const getLoanBalance = document.getElementById('loan-balance-amount').firstElementChild;
        getLoanBalance.innerHTML="";
        getLoanBalance.innerHTML=currencyDisplay().format(val);
        
        return;
    }
    

    const banckSectionEl = document.getElementById('bank-section');

    const loanBalanceDivEl = createAnElement('div','loan-balance-display','bank-section inner-area-item loan-balance-item');
    
    //creating the left div with all the elements inside it
    const loanBalanceTextEl = createAnElement('div','loan-balance-text','');
    const loanBalanceTextpEl = createAnElement('p','','');
    const loanBalanceTextpTextNodeEl = document.createTextNode('Loan Balance');
    
    //creating the right div with all the elements inside it
    const loanBalanceAmountEl = createAnElement('div','loan-balance-amount','');
    const loanBalanceAmountpEl = createAnElement('p','','');
    const loanBalanceAmountpTextNodeEl = document.createTextNode(currencyDisplay().format(val));
    
    //append the childs to left div
    loanBalanceTextpEl.appendChild(loanBalanceTextpTextNodeEl);
    loanBalanceTextEl.appendChild(loanBalanceTextpEl);


    //append the childs to right div
    loanBalanceAmountpEl.appendChild(loanBalanceAmountpTextNodeEl);
    loanBalanceAmountEl.appendChild(loanBalanceAmountpEl);
    
    //append the two divs to the parent
    loanBalanceDivEl.appendChild(loanBalanceTextEl);
    loanBalanceDivEl.appendChild(loanBalanceAmountEl);
    
    //append the parent to bank section
    banckSectionEl.appendChild(loanBalanceDivEl);
}

//creating a DOM element, this function is to avoid repeating myself
export function createAnElement(elementName,id,className){
    const createdELement = document.createElement(elementName);
    if(id!=undefined)
        createdELement.id = id;
    if(className!=undefined)
        createdELement.className = className;
    
    return createdELement;   
}

//helper funciton to display the currency
export function currencyDisplay(){
    const currency = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'EUR',
    });
    return currency;
}


//this function is to be used for the first time when DOM elements will be loaded to the DOM
export function RenderBalances(){
    this.updateSalary = function updateSalary(val){
        renderPayBalance(val);
    }

    this.updateBank =function updateBank(val){
        renderBankBalance(val);
    }
}

//dipslay bank balance
export function renderBankBalance(bankBalance){
    const bankBalanceAmount = document.getElementById('balance-amount').firstElementChild;
    bankBalanceAmount.innerHTML="";
    bankBalanceAmount.innerHTML=currencyDisplay().format(bankBalance);
}
//dipslay loan balance
export function renderPayBalance(payBalance){
    const salaryBalanceText = document.getElementById('pay-amount').firstElementChild;
    salaryBalanceText.innerHTML="";
    salaryBalanceText.innerHTML=currencyDisplay().format(payBalance);
}
//dipslay laptop price
export function renderLaptopPrice(price){
    const laptopPriceInfoDivEl = document.getElementById('laptop-price').firstElementChild;
    laptopPriceInfoDivEl.innerHTML="";
    laptopPriceInfoDivEl.innerHTML=currencyDisplay().format(price);
}


//render the laptops in dropdown menu
export function renderSelectLaptops(laptops){
    
    const dropDownList = document.getElementById('laptops');
    const descriptionPrepare = document.getElementById('laptop-description');
    descriptionPrepare.replaceChildren();
    dropDownList.replaceChildren();
    
    for(let index = 0; index < laptops.length; index++){
        let laptopTitleOption = createAnElement('option','','');
        let laptopTitleText = document.createTextNode(laptops[index].title);
        laptopTitleOption.appendChild(laptopTitleText);
        laptopTitleOption.value=laptops[index].id;
        dropDownList.appendChild(laptopTitleOption);
    }
    

}

//redner the specs int laptop information area
export function renderSelectedSpecs(laptop){
    let specs = laptop.specs;
    const selectedLaptopTitle = document.getElementById('laptop-title').firstElementChild;
    selectedLaptopTitle.innerHTML="";
    selectedLaptopTitle.innerHTML=laptop.title;
    
    const laptopSpecs= document.getElementById('laptop-specs');
    laptopSpecs.replaceChildren();
    const createUnorderedList = createAnElement('ul','','');
    for(let index = 0; index < specs.length; index++){
        let createUnorderedListElement = createAnElement('li','','');
        let spec= document.createTextNode(specs[index]);
        createUnorderedListElement.appendChild(spec);
        createUnorderedList.appendChild(createUnorderedListElement);
    }
    laptopSpecs.appendChild(createUnorderedList);

}

//render the 
export function selectLaptopsHandler(getLaptopId,laptops=[]){
    
    //filters the responsed data from API and exrtacts the laptop with specicif ID
    let laptop = laptops.filter((laptop,index,laptops)=>{
        return laptops[index].id==getLaptopId?laptops[index]:0;
    })
    
    //render all laptop required info
    renderLaptopDesc(laptop[0].description);
    renderSelectedSpecs(laptop[0]);
    renderLaptopPrice(laptop[0].price);
    renderLaptopImage(laptop[0]);
    

}


//render laptop description
export function renderLaptopDesc(description){
    const descriptionPrepare = document.getElementById('laptop-description');
    descriptionPrepare.replaceChildren();
    const descriptionPrepareRow = createAnElement('tr','','');
    const descriptionPrepareCol = createAnElement('td','','');
    const descrText = document.createTextNode(description);
    descriptionPrepareCol.appendChild(descrText);
    descriptionPrepareRow.appendChild(descriptionPrepareCol);
    descriptionPrepare.appendChild(descriptionPrepareRow);
}

//render laptop image
export function renderLaptopImage(laptop){
    const getLaptopImageDiv = document.getElementById("laptop-image");
    
    
    getLaptopImageDiv.replaceChildren();
    const createLaptopImage = createAnElement('img','','');
    createLaptopImage.src = laptop.image;
    createLaptopImage.alt=laptop.title;
    getLaptopImageDiv.appendChild(createLaptopImage);
}
