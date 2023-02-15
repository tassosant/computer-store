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
import { requestData,destructureData,fetchJSON } from "./requests.js";
import {dataResponseSimulator} from "./computerStoreData.js";



requestData();




const myBalances= new MyBalances();
const workSection = new WorkSection(myBalances);
const bankArea =new BankArea(myBalances);
const renderWorkAndBankSection =new RenderBalances();

export function repayloanAfterClick(){
  workSection.pressRepayLoan();
}

export function init(data,baseURL){
let computerStoreData = data;
computerStoreData = destructureData(computerStoreData,baseURL); 
renderWorkAndBankSection.updateSalary(0);
renderWorkAndBankSection.updateBank(0);
selectLaptopsHandler(1,computerStoreData);
renderLaptopDesc(computerStoreData[0].description);
// const computerStoreData=requestData();
// console.log(computerStoreData);
renderSelectLaptops(computerStoreData);


const getLoanButton = document.getElementById("get-loan");
const getWorkButton = document.getElementById('work');    
const getBankButton = document.getElementById('bank');
const getLaptopOptions = document.getElementById('laptops') ;
const getBuyButton = document.getElementById("buy-button");
getLoanButton.addEventListener('click',()=> {
  bankArea.pressloan();
  // if(getRepayLoanButton()==undefined){
  //   //getRepayLoanButton().onclick=workSection.pressRepayLoan();
  //   getRepayLoanButton().addEventListener('click',()=>{
  //   workSection.pressRepayLoan();console.log("Repay loan clicked");
  });
    // let clickEvent = new Event('click');
    // repayloanbtn.dispatchEvent(clickEvent);
  


getWorkButton.addEventListener('click',workSection.pressWork);
getBankButton.addEventListener('click', workSection.pressBank);
getLaptopOptions.addEventListener("change",()=>{ 
  selectLaptopsHandler(document.getElementById('laptops').value,computerStoreData)}
  );

getBuyButton.addEventListener("click",()=>{
  const getLaptopId = document.getElementById("laptops").value;
  let laptop = computerStoreData.filter((laptop,index,laptops)=>{
    //returns the element of the data that matches the laptopId
    return laptops[index].id==getLaptopId?laptops[index]:0;
  });
  //we write [0] because the returned value from above is an array of one element
  if(laptop[0].price>myBalances.bankBalance){
    console.log("You cannot buy this laptop");
  }else{
    myBalances.bankBalance = myBalances.bankBalance - laptop[0].price;
    renderBankBalance(myBalances.bankBalance);
    console.log("The laptop is yours");
  }

});

}
// selectLaptopsHandler(1,computerStoreData);
  


//const repayLoan = HelperClass.waitForRepayLoanButton();




