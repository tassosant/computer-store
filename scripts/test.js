// import {ToBeModified} from "./testImport.js";
// import { dataResponseSimulator } from "./computerStoreData.js";
// const testImportedFun = new ToBeModified();
// testImportedFun.modify(10);
// testImportedFun.testvar=20;
// //testImportedFun.display();


// // let pattern = new RegExp('[^0-9]','g');
// // let result = num.match(pattern);

// if(result==undefined)
//     console.log("number");
// else{
//     console.log("string");
// }
// console.log(result);



// function fetchJSON(path, success, error){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//             success(JSON.parse(xhr.responseText));
//             }
//             else {
//             error(xhr);
//             }
//         }
//     };
//     xhr.open('GET', path, true);
//     xhr.send();
// }
// function testArray(){
//     const baseURL = "https://hickory-quilled-actress.glitch.me";
// const dataJSON = dataResponseSimulator();
//     let anArray = [];
//     const destructuredDataEl = new Object()
//     let index  = 0;
//     destructuredDataEl["title"]=dataJSON[index].title;
//     destructuredDataEl["description"]=dataJSON[index].description;
//     destructuredDataEl["specs"]=dataJSON[index].specs; //copy the values of specs array
//     destructuredDataEl["price"] = dataJSON[index].price;
//     destructuredDataEl["image"] = `${baseURL}/${dataJSON[index].image}`;
//      anArray[index] = destructuredDataEl;
//     //anArray.push(data[0]);
//     console.log(anArray);
// }
// testArray();