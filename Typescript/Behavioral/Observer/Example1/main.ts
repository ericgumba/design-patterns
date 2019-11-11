import { Company } from "./Company"
import { Shareholder } from "./Shareholder"


(function(){

    const Aapl = new Company()

    const shareholder1 = new Shareholder()
    const shareholder2 = new Shareholder()

    Aapl.addObserver(shareholder1)
    Aapl.addObserver(shareholder2)

    Aapl.setPolicy("Protect the confidentiality of Apple's information and the information of our customers, suppliers, and employees.")
})()