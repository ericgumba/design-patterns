import {Developer} from './Developer'

export class WebDeveloper implements Developer { 
    specialty = "web"
    develop(){ 
        return `The developer is currently contributing to the web app portion of the project`
    }
}