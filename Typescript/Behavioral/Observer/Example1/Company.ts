import { Subject } from "./Subject";
import {Observer} from './Observer' 
export class Company implements Subject{
    

    shareholders = []
    currentPolicy:String 

    addObserver(shareholder:Observer) {  
 
        this.shareholders.push(shareholder)
    }


    removeObserver(shareholderToRemove: Observer) { 
        for (let i = 0; i < this.shareholders.length; i++){
            if (shareholderToRemove === this.shareholders[i] ){
                this.shareholders.splice(i,1)
            }
        }
    } 


    setPolicy(newPolicy:String){ 
        this.currentPolicy = newPolicy
        this.notifyAllObservers()
    }
 
        
    notifyAllObservers(): void { 
        for (let i = 0; i < this.shareholders.length; i++){ 
            this.shareholders[i].update(this.currentPolicy) 
        }

    } 
}