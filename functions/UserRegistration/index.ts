import { UserRegistrationServices,getWorksManAddressService } from "./services/UserRegistrationServices";
import { EmailConfirmation } from "./helpers/EmailConfirmation"


exports.UserRegistrationHanlder = async(event:any,context:any) =>{
    try {    
    const data = await UserRegistrationServices(event.request.userAttributes)
    await EmailConfirmation(event.request.userAttributes) 
    await getWorksManAddressService(event.request.userAttributes)
    context.succeed(event)
    return {
        statusCode: 200,
          headers: {},
          body: JSON.stringify('Success'+ event)
      }
    }
    catch(exception){
        console.log('Error is at UserRegistrationHanlder' + JSON.stringify(exception));
        return {
            statusCode: 500,
              headers: {},
              body: JSON.stringify(exception)
          }
    }
   }


