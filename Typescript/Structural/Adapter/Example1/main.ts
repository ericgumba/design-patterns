import { Elephant } from "./Elephant"
import { SoldierImpl } from "./SoldierImpl"
import { SoldierAdapter } from "./SoldierAdapter"
import { Soldier } from "./Soldier"
import { Animal } from "./Animal"

(function(){

    function instanceOfSoldier(object: any): object is Soldier { 
        return object.makeWarNoise !== undefined
    }
    const creatures = []

    const ele: Animal = new Elephant()

    const phyrrus:Soldier = new SoldierImpl()
 
    const warEle: Soldier = new SoldierAdapter(ele)

    creatures.push(ele)
    creatures.push(phyrrus)
    creatures.push(warEle)
 
    const makeWarNoises = function(){
        for (let creature of creatures){

            if (instanceOfSoldier(creature)){

                creature.makeWarNoise()

            } 
        }
    }
    makeWarNoises()



})()