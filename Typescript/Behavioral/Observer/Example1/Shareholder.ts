 
import { Subject } from "./Subject";
import { Observer } from "./Observer";

var __id = 0
export class Shareholder implements Observer{

    id: Number 
    constructor(){ 
        this.id = __id++
 

        
    }
    getId():Number{
        return this.id
    }
    update(newPolicy:String): void {
        console.log(`${this.id} : was notified that the company's new policy is ${newPolicy}`)
    }     

}