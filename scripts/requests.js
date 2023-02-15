
import {dataResponseSimulator} from "./computerStoreData.js";
import { renderSelectLaptops, selectLaptopsHandler } from "./renders.js";
import {init} from "./compStoreIndex.js";

export function destructureData(dataJSON=[], baseURL){
    if(dataJSON==undefined){
        //console.log("sorry bro");
        return [];
    }
    let destructuredData = [];
    for(let index = 0 ; index < dataJSON.length;index++){
        destructuredData.push({
            id:dataJSON[index].id,
            title:dataJSON[index].title,
            description:dataJSON[index].description,
            specs:dataJSON[index].specs,
            price:dataJSON[index].price,
            image:`${baseURL}/${dataJSON[index].image}`
        })
    }
    
    console.log(destructuredData);
    // let destructuredDataEl=new Object();
    // for(let index = 0 ; index < dataJSON.length;index++){
       
    //     destructuredDataEl["id"]=dataJSON[index].id;
    //     destructuredDataEl["title"]=dataJSON[index].title;
    //     destructuredDataEl["description"]=dataJSON[index].description;
    //     destructuredDataEl["specs"]=dataJSON[index].specs; //copy the values of specs array
    //     destructuredDataEl["price"] = dataJSON[index].price;
    //     destructuredDataEl["image"] = `${baseURL}/${dataJSON[index].image}`;
    //     // destructuredData[index] = destructuredDataEl;
    //     //destructuredData.push(destructuredDataEl);
    //     //console.log(destructuredDataEl);
    // }
    return destructuredData;
}

export function requestData(){
    const baseURL = "https://hickory-quilled-actress.glitch.me";
    let dataResponse=new Object();
    // dataResponse=fetchJSON(`${baseURL}/computers`,dataResponse,'jsonp');

    async function fetchComputerStoreData() {
        const response = await fetch(`${baseURL}/computers`);
        // waits until the request completes...
        const computerStoreData =  response.json();
        
        return computerStoreData;
    }
    //dataResponse=fetchComputerStoreData();
    //sleep(3000);
    
    fetchComputerStoreData().then((computerStoreData)=>{
        init(computerStoreData,baseURL)});
     
    
    //const dataResponse = dataResponseSimulator()
    
    //returns the JSON destructed
    //let destructuredData = destructureData(dataResponse,baseURL); 
    // return destructuredData;
    //dataResponse = makeGetRequest(`${baseURL}/computers`);
    //  console.log(dataResponse);
    //  return dataResponse;
}

export function fetchJSON(path, success, error){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                success =JSON.parse(xhr.responseText);
                init(success);
                }
                else {
                error(xhr);
                }
            }
        };
        xhr.open('GET', path, true);
        xhr.send();
        
        
    }


    // function makeGetRequest(path) {
    //     json.get(path).then(
    //         (response) => {
    //             let result = response.data;
    //             console.log('Processing Request');
    //             return (result);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    // }
    // function sleep(milliseconds) {
    //     const date = Date.now();
    //     let currentDate = null;
    //     do {
    //       currentDate = Date.now();
    //     } while (currentDate - date < milliseconds);
    //   }