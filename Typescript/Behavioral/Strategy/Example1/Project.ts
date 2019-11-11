import { Developer } from "./Developer"

export class Project {
    dev: Developer;
    mobilePercentDone = 0;
    webPercentDone = 0;

    setDeveloper(dev:Developer){
        this.dev = dev
    }

    complete(){
        if(this.dev.specialty === 'web'){
            this.webPercentDone += 10
        } else if (this.dev.specialty ==='mobile'){
            this.mobilePercentDone += 10
        }
    }
}