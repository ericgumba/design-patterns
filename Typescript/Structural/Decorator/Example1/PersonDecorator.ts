import { FashionModel } from "./FashionModel";

export abstract class FashionModelDecorator implements FashionModel {
    protected fashionModel : FashionModel

    constructor(fashionModel){
        this.fashionModel = fashionModel
    }
    putOnClothes() { 
        this.fashionModel.putOnClothes()
    }
    
}