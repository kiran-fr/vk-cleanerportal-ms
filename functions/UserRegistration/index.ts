import { Context } from "aws-sdk/clients/autoscaling";
import { Event } from "aws-sdk/clients/iotwireless";
import { UserRegistrationServices } from "./services/UserRegistrationServices";
import { EmailConfirmation } from "./helpers/EmailConfirmation"

exports.UserRegistrationHanlder = async(event:any,context:any,callback:any) =>{
    // console.log('step 0', event.request.userAttributes)
    console.warn("step1"+ event.request.userAttributes)
    console.warn("This is event",JSON.stringify(event.request.userAttributes.email) )
    const data = await UserRegistrationServices(event.request.userAttributes)
    await EmailConfirmation(event.request.userAttributes.email) 
    context.succeed(event)
   }


