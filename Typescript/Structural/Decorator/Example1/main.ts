import {FemaleFashionModelDecorator } from "./FemaleFashionModelDecorator";
import { BaseFashionModel } from "./FashionModelImpl";
import { MaleFashionModelDecorator } from "./MaleFashionModelDecorator";

(function(){

    let fashionModel = new BaseFashionModel()


    fashionModel.putOnClothes()
    fashionModel.setClothingColor("red")

    
    let maleFashionModel: MaleFashionModelDecorator = new MaleFashionModelDecorator(fashionModel)
    let femaleFashionModel = new FemaleFashionModelDecorator(fashionModel)


    maleFashionModel.putOnClothes()


    fashionModel.setClothingColor("blue")

    femaleFashionModel.putOnClothes()
})()
 