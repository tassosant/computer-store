
import {dataResponseSimulator} from "./computerStoreData.js";

export function destructureData(dataJSON=[], baseURL){
    if(dataJSON==undefined){
        // console.log("sorry bro");
        return [];
    }
    let destructuredData = [];
    let destructuredDataEl={
        id:"",
        title:"",
        description:"",
        specs:[],
        price:"",
        image:""
    }
    console.log(dataJSON.length);
    for(let index = 0 ; index < dataJSON.length;index++){
        // console.log("ok");
        destructuredDataEl.id=dataJSON[index].id;
        destructuredDataEl.title=dataJSON[index].title;
        destructuredDataEl.description=dataJSON[index].description;
        destructuredDataEl.specs=dataJSON[index].specs; //copy the values of specs array
        destructuredDataEl.price = dataJSON[index].price;
        destructuredDataEl.image = `${baseURL}/${dataJSON[index].image}`;
        destructuredData.push(destructuredDataEl);
    }
    return destructuredData;
}

export function requestData(){
    const baseURL = "https://hickory-quilled-actress.glitch.me";
    
    //fetchJSON(`${baseURL}/computers`,computerStoreData,'jsonp');

    // async function fetchComputerStoreData() {
    //     const response = await fetch(`${baseURL}/computers`);
    //     // waits until the request completes...
    //     const computerStoreData = await response.json();
        
    //     return computerStoreData;
    // }
    // data=  fetchComputerStoreData();
    // const dataReturned = destructureData(data,baseURL);
    const dataResponse = dataResponseSimulator()
    //returns the JSON destructed
    const destructuredData = destructureData(dataResponse,baseURL); 
    return destructuredData;
}

