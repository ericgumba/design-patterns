import { Enemy } from "./Enemy"
import { Hero } from "./Hero"


(function(){
    const Balrog = new Enemy()

    const party = []

    party.push(new Hero("Legolas"), new Hero("Aragorn"),new Hero("Gimli"),new Hero("Gandalf"))
 
    party.forEach(partyMember =>{
        Balrog.addObserver(partyMember)
    } ) 


    console.log(`Balrog attacks: ${party[party.length-1].getName()} ` )

    Balrog.removeObserver(party.pop())

    console.log(`${party[party.length-1].getName()} attacks, Balrog dies`)

    Balrog.die()

    
})()