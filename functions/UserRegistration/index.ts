import { Context } from "aws-sdk/clients/autoscaling";
import { Event } from "aws-sdk/clients/iotwireless";
import { UserRegistrationServices } from "./services/UserRegistrationServices";

exports.UserRegistrationHanlder = async(event:any,context:any,callback:any) =>{
    // console.log('step 0', event.request.userAttributes)
    console.warn("step1"+ event.request.userAttributes)
    const data = await UserRegistrationServices(event.request.userAttributes)
    
    context.succeed(event)
   }


