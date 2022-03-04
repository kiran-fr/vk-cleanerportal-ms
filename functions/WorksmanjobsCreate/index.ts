import { WorksmanjobsCreateService} from "./services/WorksmanjobsCreateService"

exports.WorksmanjobsCreateHandler  = async(event:any) => {
    try {

        const data = JSON.parse(event)
        console.warn("This is worksmand id",data)
        await WorksmanjobsCreateService(data)
            
         return {
             statusCode:200,
             body: data
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

