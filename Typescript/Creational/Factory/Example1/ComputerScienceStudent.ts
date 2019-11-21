import {Student} from './Student'


export class ComputerScienceStudent implements Student{

    startingSalary = 70000
    
    getStartingSalary(): Number {
        return this.startingSalary
    }

    

}
