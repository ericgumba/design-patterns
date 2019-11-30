import { FashionModelDecorator } from "./PersonDecorator";

export  class FemaleFashionModelDecorator extends FashionModelDecorator { 
    constructor(fashionModel){ 
        super(fashionModel)
    }
    public putOnClothes() {  
        this.fashionModel.putOnClothes()

        this.putOnFemaleClothes()
    }
    private putOnFemaleClothes(){
        console.log(" and wearing fancy dress")
    }
}