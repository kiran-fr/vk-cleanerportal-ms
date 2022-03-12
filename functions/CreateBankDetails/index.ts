import { CreateBankDetailsService} from "./services/CreateBankDetailsService"

exports.CreateBankDetailsHandler  = async(event:any) => {
    try {

        // const data = JSON.parse(event)
        console.warn("This is worksmand id",event)
        await CreateBankDetailsService(event)
            
         return {
             statusCode:200,
             body: event
         }
    } catch (exception) {
        console.log("step error",exception)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

