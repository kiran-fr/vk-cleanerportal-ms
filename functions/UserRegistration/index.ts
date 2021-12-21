import { Context } from "aws-sdk/clients/autoscaling";
import { Event } from "aws-sdk/clients/iotwireless";
import { UserRegistrationServices } from "./services/UserRegistrationServices";

exports.UserRegistrationHanlder = async(event:any,context:any,callback:any) =>{
    console.log(event)
    const data = await UserRegistrationServices(event)

   return {
       statusCode:200,
       body:JSON.stringify(data)
   }

}


