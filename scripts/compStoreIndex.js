import {MyBalances} from "./myBalances.js";

import {
  renderRepayButton,RenderBalances,
  currencyDisplay,renderBankBalance,
  renderPayBalance,createAnElement,
  renderLoanBalance, renderLaptopPrice,
  renderSelectedSpecs, renderSelectLaptops, 
  selectLaptopsHandler, renderLaptopDesc
} from "./renders.js";

import { workBalanceHandler,salaryIncrease,WorkSection } from "./workSection.js";
import { BankArea } from "./bankArea.js";
// import { HelperClass } from "./helperClass.js";
import { requestData,destructureData } from "./requests.js";
import {dataResponseSimulator} from "./computerStoreData.js";



requestData();



//initialize the first constants
const myBalances= new MyBalances();
const workSection = new WorkSection(myBalances);
const bankArea =new BankArea(myBalances);
const renderWorkAndBankSection =new RenderBalances();

//this function is ot use it as a module in renders.js file
export function repayloanAfterClick(){
  workSection.pressRepayLoan();
}

export function init(data,baseURL){
let computerStoreData = data;
computerStoreData = destructureData(computerStoreData,baseURL); 
renderWorkAndBankSection.updateSalary(0);
renderWorkAndBankSection.updateBank(0);
renderLaptopDesc(computerStoreData[0].description);
// const computerStoreData=requestData();
// console.log(computerStoreData);
renderSelectLaptops(computerStoreData);
selectLaptopsHandler(1,computerStoreData);


const getLoanButton = document.getElementById("get-loan");
getLoanButton.addEventListener('click',()=> {
  //callback the function pressLoan to check if there is another loan, to veify the loan etc
  bankArea.pressloan();
  
});



//get the buttons of the work section and wait for click them  
const getWorkButton = document.getElementById('work');    
getWorkButton.addEventListener('click',workSection.pressWork);
const getBankButton = document.getElementById('bank');
getBankButton.addEventListener('click', workSection.pressBank);

//add an evernt listener to the dropdown list so to display the selected laptop's info
const getLaptopOptions = document.getElementById('laptops') ;
getLaptopOptions.addEventListener("change",()=>{ 
      //callback the selectLaptopsHandler function to render the proper values
     selectLaptopsHandler(document.getElementById('laptops').value,computerStoreData)}
      );

      
//handles the buy button      
const getBuyButton = document.getElementById("buy-button");
getBuyButton.addEventListener("click",()=>{
  const getLaptopId = document.getElementById("laptops").value;
  
  //extract the selected laptop
  let laptop = computerStoreData.filter((laptop,index,laptops)=>{
    //returns the element of the data that matches the laptopId
    return laptops[index].id==getLaptopId?laptops[index]:0;
  });
  
  //we write [0] because the returned value from above is an array of one element
  if(laptop[0].price>myBalances.bankBalance){
    alert("You cannot buy this laptop");
  }else{
    //handles bank balance
    myBalances.bankBalance = myBalances.bankBalance - laptop[0].price;
    renderBankBalance(myBalances.bankBalance);
    alert("The laptop is yours");
  }

});

}
// selectLaptopsHandler(1,computerStoreData);
  


//const repayLoan = HelperClass.waitForRepayLoanButton();




