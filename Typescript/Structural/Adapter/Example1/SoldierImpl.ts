import { Soldier } from "./Soldier";

export class SoldierImpl implements Soldier {
    makeWarNoise() { 
        console.log("Arf Arf Arf!")
    }
    
}