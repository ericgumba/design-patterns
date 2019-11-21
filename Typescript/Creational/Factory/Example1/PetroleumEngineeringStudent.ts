import {Student} from './Student'


export class PetroleumEngineeringStudent implements Student{

    startingSalary = 120000
    
    getStartingSalary(): Number {
        return this.startingSalary
    }

    

}
