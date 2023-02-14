const VarType = {
    number : "number",
    string : "string",
    bigInt : "bigint",
    boolean : "boolean",
    undefined : "undefined",
    null : "null",
    symbol : "symbol",
    object : "object"
}

function validateType(inputVar, type){
    if(typeof inputVar==type || (type===VarType.null && inputVar === null))
        return true;
    return false;
}

function validateNumber(num){
    
    let pattern = new RegExp('^[0-9]');
    let result = num.match(pattern);
    // if(result===null)
    //     return false;
    // if(){

    // }
    return true;
}