import {ComputerScienceStudent} from './ComputerScienceStudent'
import { PetroleumEngineeringStudent } from './PetroleumEngineeringStudent'

export  class StudentFactory{

    public static createStudent(major:String){ 
        if ( major === "CS" ){
            return new ComputerScienceStudent()
        } else if ( major === "Petroleum Engineering" ){
            return new PetroleumEngineeringStudent()
        } 
    }
}