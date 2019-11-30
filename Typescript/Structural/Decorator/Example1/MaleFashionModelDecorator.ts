 import { FashionModelDecorator } from "./PersonDecorator";

export  class MaleFashionModelDecorator extends FashionModelDecorator { 
    constructor(fashionModel){ 
        super(fashionModel)
    }
    public putOnClothes() {  
        this.fashionModel.putOnClothes()

        this.putOnMaleClothes()
    }
    private putOnMaleClothes(){
        console.log("and wearing fancy shirt")
    }
}