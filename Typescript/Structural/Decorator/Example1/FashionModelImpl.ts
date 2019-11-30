import { FashionModel } from "./FashionModel";

export class BaseFashionModel implements FashionModel {
 
    putOnClothes() { 
        console.log("Fashion Model is wearing pants")
    }

}