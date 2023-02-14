import {ToBeModified} from "./testImport.js";
// let num="13243asd";
// let pattern = new RegExp('^[0-9]','g');
// let result = num.match(pattern);
// console.log(result);
const testImportedFun = new ToBeModified();
testImportedFun.modify(10);
testImportedFun.testvar=20;
testImportedFun.display();
