import { CreatePaymentHistoryDetailsService} from "./services/CreatePaymentHistoryDetailsService"

exports.CreatePaymentHistoryDetailsHandler  = async(event:any) => {
    try {

        // const data = JSON.parse(event)
        console.warn("This is worksmand id",event)
        console.log('warn0',event)
        await CreatePaymentHistoryDetailsService(event)
            
         return {
             statusCode:200,
             body: event
         }
         
    } catch (exception) {
        console.log("CreateMessages step error",exception)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

