import { UserRegistrationServices } from "./services/UserRegistrationServices";
import { EmailConfirmation } from "./helpers/EmailConfirmationHelper/EmailConfirmation"

exports.UserRegistrationHanlder = async (event: any, context: any) => {
    try {
        console.warn("step1" + event.request.userAttributes)
        console.warn("This is event", JSON.stringify(event.request.userAttributes.email))

        // INSERT INTO REGISGRATION VALUES INTO DATABASE
        const data = await UserRegistrationServices(event.request.userAttributes)

        // Email Confirmation 
        await EmailConfirmation(event.request.userAttributes.email)
       
        context.succeed(event)
    } catch (exception) {
        console.log(`This is UserRegistrationHanlder Error ${exception}`)
    }
}


