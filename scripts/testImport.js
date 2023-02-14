export class ToBeModified{
    constructor(){
        this._testvar=3;
    }

    get testvar(){
        return this._testvar;
    }
    set testvar(val){
        this._testvar=val;
    }
    modify=(val)=>{
        this._testvar=val;
    }
    display=()=>{
        console.log("tested var="+this.testvar);
    }

}

export function testToExport(){
    
}