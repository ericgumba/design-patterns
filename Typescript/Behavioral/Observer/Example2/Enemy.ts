import {Subject} from './Subject' 
import { Hero } from './Hero'

export class Enemy implements Subject {

    isAlive = true
    heroes = []

    addObserver(hero: Hero): void { 
        this.heroes.push(hero)
        
    }    
    removeObserver(heroToRemove: Hero) { 

        console.log(`${heroToRemove.getName()} dies`)
        for (let i = 0; i < this.heroes.length; i++){
            if (heroToRemove === this.heroes[i] ){
                this.heroes.splice(i,1)
            }
        }
    }

    die(){
        this.isAlive = false
        this.notifyAllObservers()
    }

    notifyAllObservers(): void { 
        this.heroes.forEach(hero=>{
            hero.update()
        })
    } 
}