import {Observer} from './Observer'
export class Hero implements Observer {

    name: String
    xp = 0

    constructor(name:String){
        this.name = name
    }

    public getName() { 
        return this.name
    }

    public update(): void { 
        this.xp += 5
        console.log(`enemy died, xp gained +5, total xp points for ${this.name}: ${this.xp}`)
    }
}