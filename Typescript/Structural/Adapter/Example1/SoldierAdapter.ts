import { Soldier } from "./Soldier";
import { Animal } from "./Animal";

export class SoldierAdapter implements Soldier {

    animal: Animal
    constructor(animal:Animal ){
        this.animal = animal
    }
    makeWarNoise() { 
        this.animal.makeNoise()
    }

}