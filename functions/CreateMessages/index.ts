import { CreateMessagesService} from "./services/CreateMessagesService"

exports.CreateMessagesHandler  = async(event:any) => {
    try {

        const data = JSON.parse(event)
        console.warn("This is worksmand id",data)
        await CreateMessagesService(data)
            
         return {
             statusCode:200,
             body: data
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

