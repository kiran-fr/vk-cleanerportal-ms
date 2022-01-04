import { getWorksmanAddressIdService, UserRegistrationServices,WorksManAddressService } from "./services/UserRegistrationServices";
import { EmailConfirmation } from "./helpers/EmailConfirmation"


exports.UserRegistrationHanlder = async(event:any,context:any) =>{
    try {    
    const data = await UserRegistrationServices(event.request.userAttributes)
    await EmailConfirmation(event.request.userAttributes) 

    const worksmanId:any = await getWorksmanAddressIdService(event.request.userAttributes.email)
    console.log('user registrtion handler id ',worksmanId)
    await WorksManAddressService(event.request.userAttributes,worksmanId[0].worksman_id)
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


