import {MyBalances} from "./myBalances.js";

import {
  renderRepayButton,RenderBalances,
  currencyDisplay,renderBankBalance,
  renderPayBalance,createAnElement,
  renderLoanBalance, renderLaptopPrice,
  renderSelectedLaptop, renderSelectLaptops, 
  selectLaptopsHandler
} from "./renders.js";

import { workBalanceHandler,salaryIncrease,WorkSection } from "./workSection.js";
import { BankArea } from "./bankArea.js";
import { HelperClass } from "./helperClass.js";
import { requestData,destructureData } from "./requests.js";
import {dataResponseSimulator} from "./computerStoreData.js";


const myBalances= new MyBalances();













const bankArea =new BankArea(myBalances);
const workSection = new WorkSection(myBalances);
const renderWorkAndBankSection =new RenderBalances();
renderWorkAndBankSection.updateSalary(0);
renderWorkAndBankSection.updateBank(0);


const computerStoreData=requestData();
console.log(computerStoreData);
renderSelectLaptops(computerStoreData);


const getLoanButton = document.getElementById("get-loan");
const getWorkButton = document.getElementById('work');    
const getBankButton = document.getElementById('bank');
const getLaptopOptions = document.getElementById('laptops') 
getLoanButton.addEventListener('click', bankArea.pressloan);
getWorkButton.addEventListener('click',workSection.pressWork);
getBankButton.addEventListener('click', workSection.pressBank);
getLaptopOptions.addEventListener("change",()=>{ 
  selectLaptopsHandler(document.getElementById('laptops').value,computerStoreData)}
  );


//renderSelectedLaptop(computerStoreData[0]);
  


//const repayLoan = HelperClass.waitForRepayLoanButton();




