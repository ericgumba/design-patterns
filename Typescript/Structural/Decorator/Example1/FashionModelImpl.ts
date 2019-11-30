import { FashionModel } from "./FashionModel";

export class BaseFashionModel implements FashionModel {

    color = ""
    setClothingColor(color) {
        this.color = color
    }

    getClothingColor(){
        return this.color
    }
 
    putOnClothes() { 
        console.log(`Fashion Model is wearing ${this.color} pants`)
    }

}