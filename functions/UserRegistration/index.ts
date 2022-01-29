import { getWorksmanAddressIdService, UserRegistrationServices, WorksManAddressService } from "./services/UserRegistrationServices";
import { EmailConfirmation } from "./helpers/EmailConfirmation";


exports.UserRegistrationHanlder = async (event: any, context: any) => {
  console.warn("This is user registration",event)
  try {
    const data = await UserRegistrationServices(event.request.userAttributes)
    const worksmanId: any = await getWorksmanAddressIdService(event.request.userAttributes.email)
    console.warn('event.request.userAttributes.address', event.request.userAttributes.address)
    await WorksManAddressService(event.request.userAttributes, worksmanId[0].worksman_id)
    // await EmailConfirmation(event.request.userAttributes)

    context.succeed(event)
    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify('Success' + event)
    }

  }
  catch (exception) {
    console.warn('Error is at UserRegistrationHanlder' + JSON.stringify(exception));
    return {
      statusCode: 500,
      headers: {},
      body: JSON.stringify(exception)
    }
  }
}


