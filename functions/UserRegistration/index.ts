import { Context } from "aws-sdk/clients/autoscaling";
import { Event } from "aws-sdk/clients/iotwireless";
import { UserRegistrationServices } from "./services/UserRegistrationServices";

exports.UserRegistrationHanlder = async(event:any,context:any,callback:any) =>{
    console.log("step1",event)
    const data = await UserRegistrationServices(event)

   return {
       statusCode:200,
       headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
        "Access-Control-Allow-Origin" : "http://localhost:3000", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
    },
       body:JSON.stringify(data)
   }

}


