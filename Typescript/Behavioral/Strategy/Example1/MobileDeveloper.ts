import {Developer} from './Developer'

export class MobileDeveloper implements Developer {
    specialty = "mobile"  
    

    develop(){ 
        return `This developer is currently contributing to the mobile app portion of the project`
    }
}