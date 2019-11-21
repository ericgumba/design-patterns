import { StudentFactory } from "./Factory"


const CS = "CS";

const PETROLEUM_ENGINEERING = "Petroleum Engineering";


( function(){
    let recentGradA = StudentFactory.createStudent(CS)
    let recentGradB = StudentFactory.createStudent(PETROLEUM_ENGINEERING)

    console.log(`CS student starting salary: $${recentGradA.getStartingSalary()}, 
Petroleum Engineering student starting salary: $${recentGradB.getStartingSalary()}`)
})()