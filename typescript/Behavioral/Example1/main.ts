import { Project } from "./Project"
import { MobileDeveloper } from "./MobileDeveloper"
import { WebDeveloper } from "./WebDeveloper"

// MAIN FUNCTION
(function(){
    let zulip: Project = new Project()


    while(zulip.mobilePercentDone < 100 && zulip.webPercentDone < 100){

        if (zulip.mobilePercentDone > zulip.webPercentDone){
            zulip.setDeveloper( new MobileDeveloper() )
            zulip.complete()
        } else{
            zulip.setDeveloper( new WebDeveloper() )
            zulip.complete()
        }

        console.log(zulip)
    }
    
})()