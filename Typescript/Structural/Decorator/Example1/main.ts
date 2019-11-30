import {FemaleFashionModelDecorator } from "./FemaleFashionModelDecorator";
import { BaseFashionModel } from "./FashionModelImpl";
import { MaleFashionModelDecorator } from "./MaleFashionModelDecorator";

(function(){

    let fashionModel = new BaseFashionModel()


    fashionModel.putOnClothes()

    
    let maleFashionModel: MaleFashionModelDecorator = new MaleFashionModelDecorator(fashionModel)
    let femaleFashionModel = new FemaleFashionModelDecorator(fashionModel)


    maleFashionModel.putOnClothes()

    femaleFashionModel.putOnClothes()
})()
 