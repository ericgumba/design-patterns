import { FashionModel } from "./FashionModel";

export abstract class FashionModelDecorator implements FashionModel {
    getClothingColor(): string { 
        return this.fashionModel.getClothingColor()
    }
    protected fashionModel : FashionModel

    constructor(fashionModel){
        this.fashionModel = fashionModel
    }
    putOnClothes() { 
        this.fashionModel.putOnClothes()
    }
    setClothingColor(color) {
        this.fashionModel.setClothingColor(color)
    }
    
}